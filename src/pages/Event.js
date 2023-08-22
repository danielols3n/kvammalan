import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import '../css/Event.css'
import NavbarComponent from '../components/navbar/Navbar'  
import Footer from '../components/footer/Footer' 
import 'moment/locale/nn'
import eventpic from '../img/eventpage.jpg'
import { HiOutlineTicket } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import moment from 'moment/moment'
import Countdown from 'react-countdown';

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
                {moment().unix() * 1000 >= 1692374400000 ?
                  <>
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
                    </Container>
                  </Container>
                </>
                  : 
                  <>
                    <Container style={{ width: '75%', backgroundColor: '#ffffff', color: 'black' }} className="m-0 p-0 rounded d-flex flex-column m-auto mt-5 p-3">
                      <span style={{ fontSize: '2rem' }} className="fw-bolder mx-auto">
                        Billettsalet startar om
                      </span>
                      <Countdown className="countdown m-0 m-auto p-0" date={1692374400000} autoStart />
                      <span style={{ fontSize: '2rem' }} className="fw-bolder mx-auto">
                        dagar
                      </span>
                    </Container>
                  </>
                }
              </Col>
            </Row>
            <Row className="w-75 mx-auto mt-5 mb-5">
              <p className="text-light">
                I 2022 var fyrste gongen me arrangerte KvammaLAN. Det vart ein suksess med nærare 100 deltakarar. I 2023 
                gjentar me suksessen og køyrer i gang med eit 70 timar lang LAN i Øystese idrettshall 10. - 13. oktober! 
              </p>
              <p className="text-light">
                10. oktober kl. 16:00 går startskotet for den andre utgåva av KvammaLAN, KvammaLAN 2023. Arrangementet vert halde i Øystese
                idrettshall. Det vert lagt til rette for sovesal i bygget og det vert ein scene med underhaldning og konkurransar. 
              </p>
              <p className="text-light">
                Me satsar større på underhaldning under årets KvammaLAN. Programmet er ikkje heilt ferdig, men følg med på enten her på nettsida eller på Facebook/Instagram for å sjå programmet.  
              </p>
              <p className="text-light">
                Nytt for i år er at me opnar for at publikum kan koma og sjå på konkurransane. Dette er heilt gratis og ein møter rett og slett opp i døra. Her kan alle koma, store og små, unge og eldre. Me
                 set ingen begrensingar.
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