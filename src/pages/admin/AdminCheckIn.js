import { onAuthStateChanged } from 'firebase/auth'
import { collection, doc, getDoc, getDocs, onSnapshot, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Container, FormCheck, Row, Table } from 'react-bootstrap'
import { auth, db } from '../../Firebase'
import { useNavigate } from 'react-router-dom'
import AdminNavbar from '../../components/admin-navbar/AdminNavbar'
import moment from 'moment'

function AdminCheckIn() {
    const navigate = useNavigate()
    const [registrations, setRegistrations] = useState([])


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const docRef = doc(db, 'users', user.uid)

                getDoc(docRef).then((document) => {
                    if (document.data().admin === true) {
                        console.log('Admin access granted')
                            const colRef = collection(db, 'events', 'kvammalan2023', 'registrations')

                            const unsub = onSnapshot(colRef, (snapshot) => {
                                if (snapshot.docs && snapshot.docs.length > 0) {
                                    setRegistrations(snapshot.docs)
                                  } else {
                                    console.log("No valid documents found.");
                                  }
                        }).catch(error => console.error(error))
                    } else {
                        navigate('/kvammalan/admin/login')
                    }
                }).catch(error => console.error(error))
            } else {
                navigate('/kvammalan/admin/login')
            }
        })
    }, [])
  return (
    <Container fluid className="d-flex flex-column m-0 p-0">
        <AdminNavbar />
        <Container fluid className="d-flex flex-column m-0 p-0">
            <h1 className="fw-bolder mt-5 mx-auto">
              DELTAKARAR
            </h1>
            <Container fluid className="m-0 p-0 d-flex flex-column">
              <Table hover className="mt-3">
                <thead border>
                  <tr>
                    <th>SETE</th>
                    <th>NAMN</th>
                    <th>TELEFONNUMMER</th>
                    <th>E-POSTADRESSE</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {registrations.length !== 0 && registrations.map((participant) => {
                    return(
                      <tr>
                        <td>{participant.data().seatId !== undefined ? participant.data().seatId : <b>Publikum</b>}</td>
                        <td>{participant.data().name}</td>
                        <td>{participant.data().phone}</td>
                        <td>{participant.data().email}</td>
                        <td>
                          <FormCheck
                            type='checkbox'
                            checked={(participant.data().checkedIn === false || participant.data().checkedIn === undefined) ? false : true}
                            onChange={(e) => {
                              const docRef = doc(db, 'events', 'kvammalan2023', 'registrations', participant.id)

                              updateDoc(docRef, {
                                checkedIn: e.target.checked,
                                checkedInTime: moment().unix()
                              }).then(() => {
                                console.log('Checked in', participant.data().name)
                              }).catch(error => console.error(error))
                            }}
                          />
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </Container>
        </Container>
    </Container>
  )
}

export default AdminCheckIn