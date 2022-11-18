import React, { useEffect, useState } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import Footer from '../components/footer/Footer'
import NavbarComponent from '../components/navbar/Navbar'
import '../css/Events.css'
import { db } from '../Firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

function Events() {
    const [loading, setLoading] = useState(true)
    const [events, setEvents] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
          setLoading(false)
        }, 1000)

        const temp = []
        const colRef = collection(db, 'events')

        getDocs(colRef).then((snapshot) => {
            snapshot.forEach((doc) => {
                temp.push({
                    name: doc.data().name, 
                    description: doc.data().description, 
                    startTime: doc.data().startTime, 
                    endTime: doc.data().endTime,
                    image: doc.data().image,
                    tickets: doc.data().tickets,
                    place: doc.data().place,
                    address: doc.data().address, 
                    id: doc.id
                })
            })
            setEvents(temp)
        }).catch(error => console.error(error))
    })

    document.title = 'Hendingar | KvammaLAN'
  return (
    <Container fluid style={loading === false ? { height: '100vh' } : { overflow: 'hidden', position: 'fixed' }} className="d-flex flex-column p-0 m-0 events">
        <NavbarComponent data={{ background: 'transparent' }} />
        <Container fluid className="h-100 d-flex flex-column">
            <h1 className="fw-bolder text-light mx-auto">HENDINGAR</h1>
            <Container fluid className="d-flex flex-column mt-3 mb-5">
                <Row className="w-100 d-flex justify-content-center">
                    {events.map((item) => {
                        return (
                            <Card bg='dark' style={{ cursor: 'pointer' }} onClick={() => navigate(`/admin/events/${item.id}`)} className="d-flex flex-column p-3 m-2 col-lg-3">
                                <Container fluid className="d-flex">
                                    <img src={item.image} className="m-3 m-auto rounded" alt='' style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                                </Container>
                                <Container fluid className="d-flex flex-column">
                                    <h4 className="fw-bolder text-light mx-auto mt-3">{item.name.toUpperCase()}</h4>
                                </Container>
                            </Card>
                        )
                    })}
                </Row>
            </Container>
        </Container>
        <Footer />
    </Container>
  )
}

export default Events