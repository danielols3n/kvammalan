import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { auth, db } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'

function Registrations() {
    const nextEventId = 'BX4GwZjW1hTBn2G8NFwz'
    const [user, setUser] = useState(null)
    const [regs, setRegs] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                navigate('/logg-inn', { replace: true })
            }
        })

        const temp = []

        const fetchRegistrations = () => {
            const colRef = collection(db, 'hendingar', nextEventId, 'registreringar')
            
            getDocs(colRef).then((snap) => {
                snap.forEach((doc) => {
                    temp.push({
                        name: doc.data().name, 
                        email: doc.data().email, 
                        phone: doc.data().phone,
                        birth: doc.data().birthdate,
                        minor: doc.data().minor,
                        parentemail: doc.data().parentemail,
                        parentname: doc.data().parentname,
                        parentphone: doc.data().parentphone, 
                        paid: doc.data().paid,
                        id: doc.id
                    })
                })
            })

            setRegs(temp)
        }

        fetchRegistrations()
    }, [])

  return (
    <Container fluid className="d-flex flex-column p-0 m-0">
        <h1 className="align-self-center fw-bolder mt-3">Påmeldingar</h1>
        <Table striped bordered>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Namn</th>
                    <th>E-post</th>
                    <th>Telefon</th>
                    <th>Under 18?</th>
                    <th>Handlingar</th>
                </tr>
            </thead>
            <tbody>
                {regs.map((item) => {
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.minor === true ? 'Ja' : 'Nei'}</td>
                        <td>Handlingar</td>
                    </tr>
                })}
            </tbody>
        </Table>
    </Container>
  )
}

export default Registrations