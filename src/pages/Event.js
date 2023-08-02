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
                <Container style={{ width: '75%', backgroundColor: '#ffffff' }} className="m-0 p-0 rounded d-flex flex-column m-auto mt-5">
                  <h3 className="text-dark mx-auto mt-4">BILLETTAR</h3>
                  <Container fluid className="d-flex flex-column p-0 m-0 my-3 mx-auto">
                    <Row className="w-100 p-2 m-0">
                      <Col xs={2} className="d-flex">
                        <HiOutlineTicket color='#000' size='2rem' className="m-auto" />
                      </Col>
                      <Col xs={6} className="fw-bolder d-flex">
                        <b className="my-auto text-dark">Billett - Medlem</b>
                      </Col>
                      <Col xs={4} className="d-flex">
                        <Button variant="primary" className="my-auto" onClick={() => navigate('/kvammalan/checkout/seat-map?ticketId=Medlem')}>
                          400 ,-
                        </Button>
                      </Col>
                    </Row>
                    <Row className="w-100 p-2 m-0">
                      <Col xs={2} className="d-flex">
                        <HiOutlineTicket color='#000' size='2rem' className="m-auto" />
                      </Col>
                      <Col xs={6} className="fw-bolder d-flex">
                        <b className="my-auto text-dark">Billett - Ikkje medlem</b>
                      </Col>
                      <Col xs={4} className="d-flex">
                        <Button variant="primary" className="my-auto" onClick={() => navigate('/kvammalan/checkout/seat-map?ticketId=Ikkje-medlem')}>
                          600 ,-
                        </Button>
                      </Col>
                    </Row>
                    <Row className="w-100 p-2 m-0">
                      <Col xs={2} className="d-flex">
                        <HiOutlineTicket color='#000' size='2rem' className="m-auto" />
                      </Col>
                      <Col xs={6} className="fw-bolder d-flex">
                        <b className="my-auto text-dark">Billett - Publikum</b>
                      </Col>
                      <Col xs={4} className="d-flex">
                        <Button variant="primary" className="my-auto" onClick={() => navigate('/kvammalan/checkout/audience?ticketId=Publikum')}>
                          30 ,-
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                </Container>
              </Col>
            </Row>
            <Row className="w-75 mx-auto mt-5 mb-5">
              <p className="text-light">
                I 2022 var fyrste gongen me arrangerte KvammaLAN. Det vart ein suksess med nærare 100 deltakarar. I 2023 
                gjentar me suksessen og køyrer i gang med eit 72 timar lang LAN i Øystese idrettshall 10. - 13. oktober! 
              </p>
              <p className="text-light">
                10. oktober kl. 16:00 går startskotet for den andre utgåva av KvammaLAN, KvammaLAN 2023. Arrangementet vert halde i Øystese
                idrettshall og varer i 72 timar. Det vert lagt til rette for sovesal i bygget og det vert ein scene med underhaldning og konkurransar. 
              </p>
              <p className="text-light">
                I tillegg får me besøk av Torgeir Børven på onsdagen. Han vil veldig gjerne prøva å vinna mot deg i FIFA. Klarar du å slå han? 
                Sjekk ut FIFA-konkurransen onsdag 11. oktober kl. 13:00. 
              </p>
              <p className="text-light">
                Nytt for i år er at me opnar for at publikum kan koma og sjå på konkurransane. Inngangsbilletten koster 30 kroner og ein kjøper billett, enten
                på nett eller i døra. Dette er ikkje billett for å DELTA i konkurransane, berre for å sjå. 
              </p>
              <p className="text-light">
                Siste nyheit for i år er at me får besøk av Youtuber og TV-profil, Preben Fjell. Han kjem og snakkar litt til ungdomen og skal til slutt spela konkurranse 
                mot nokon av deltakarane på LANet. Dette kan ein fritt koma og sjå på. Inngangsbilletten koster 30 kroner her òg. 
              </p>
              <p className="text-light">
                Dersom du har nokre spørsmål angåande årets KvammaLAN, ta kontakt med oss på <a href="mailto:kvammalan@kvam-esport.no">kvammalan@kvam-esport.no</a> eller telefon 
                &nbsp;<a href="tel:+4798663863">+47 986 63 863 (Daniel Olsen).</a>
              </p>
              <p className='text-light'>
                Me gler oss til å sjå deg på KvammaLAN 2023!
              </p>
            </Row>
          </Container>
        <Footer />
    </Container>
  )
}

export default Event