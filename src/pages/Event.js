import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import '../css/Event.css'
import NavbarComponent from '../components/navbar/Navbar'  
import Footer from '../components/footer/Footer' 
import 'moment/locale/nn'
import eventpic from '../img/eventpage.jpg'
import { HiOutlineTicket } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

function Event() {
  document.title = 'KvammaLAN 2023'

  const navigate = useNavigate()

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
                <Container style={{ width: '75%', backgroundColor: '#ffffff' }} className="m-0 p-0 rounded d-flex flex-column my-auto">
                  <h3 className="text-dark mx-auto mt-4">BILLETTAR</h3>
                  <Container fluid className="d-flex flex-column p-0 m-0 my-3">
                    <Row className="w-100 p-2 m-0">
                      <Col lg={2} className="d-flex">
                        <HiOutlineTicket color='#000' size='2rem' className="m-auto" />
                      </Col>
                      <Col lg={6} className="fw-bolder d-flex">
                        <b className="my-auto text-dark">Billett - Medlem</b>
                      </Col>
                      <Col lg={4} className="d-flex">
                        <Button variant="primary" className="my-auto" onClick={() => navigate('/kvammalan/checkout/seat-map?ticketId=Medlem')}>
                          400 ,-
                        </Button>
                      </Col>
                    </Row>
                    <Row className="w-100 p-2 m-0">
                      <Col lg={2} className="d-flex">
                        <HiOutlineTicket color='#000' size='2rem' className="m-auto" />
                      </Col>
                      <Col lg={6} className="fw-bolder d-flex">
                        <b className="my-auto text-dark">Billett - Ikkje medlem</b>
                      </Col>
                      <Col lg={4} className="d-flex">
                        <Button variant="primary" className="my-auto" onClick={() => navigate('/kvammalan/checkout/seat-map?ticketId=Ikkje-medlem')}>
                          600 ,-
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                </Container>
              </Col>
            </Row>
          </Container>
        <Footer />
    </Container>
  )
}

export default Event