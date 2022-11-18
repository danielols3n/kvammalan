import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import Footer from '../components/footer/Footer'
import NavbarComponent from '../components/navbar/Navbar'
import '../css/Events.css'

function Events() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
          setLoading(false)
        }, 1000)

        const colRef = 
    })

    document.title = 'Hendingar | KvammaLAN'
  return (
    <Container fluid style={loading === false ? { minHeight: '100vh' } : { overflow: 'hidden', position: 'fixed' }} className="d-flex flex-column p-0 m-0 events">
        <NavbarComponent data={{ background: 'transparent' }} />
        <Container fluid className="d-flex flex-column">
            <h1 className="fw-bolder text-light mx-auto">HENDINGAR</h1>
            <Container fluid className="d-flex flex-column">
                <Row className="w-100">
                    {events.map((item) => {
                        return (
                            <Card></Card>
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