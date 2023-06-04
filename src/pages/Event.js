import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import '../css/Event.css'
import NavbarComponent from '../components/navbar/Navbar'  
import Footer from '../components/footer/Footer' 
import 'moment/locale/nn'
import eventpic from '../img/eventpage.jpg'

function Event() {
  document.title = 'KvammaLAN 2023'

  return (
    <Container fluid className="event d-flex flex-column p-0 m-0">
        <NavbarComponent data={{ background: 'transparent' }} />
          <Container fluid className="d-flex flex-column text-light p-0 m-0 mt-5">
            <Row className="w-100 m-0 p-0">
              <Col lg={8}>
                <Container fluid className="p-0 m-0 d-flex flex-column text-light">
                  <h1 className="fw-bolder mx-auto">KvammaLAN 2023</h1>
                  <Image src={eventpic} alt='' rounded width='75%' className="mx-auto mt-3" />
                </Container>
              </Col>
              <Col className="d-flex" lg={4}>
                <Container style={{ width: '75%' }} className="m-0 p-0 rounded bg-light d-flex flex-column my-auto">
                  <h3 className="fw-bolder text-dark mx-auto mt-4">BILLETTAR</h3>
                </Container>
              </Col>
            </Row>
          </Container>
        <Footer />
    </Container>
  )
}

export default Event