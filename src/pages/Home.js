import React from "react";
import { Button, Card, Container, NavLink, Row } from "react-bootstrap";
import NavbarComponent from "../components/navbar/Navbar";
import "../css/Home.css";
import { IoMdTime, IoMdPricetag } from 'react-icons/io'
import { MdOutlinePlace } from 'react-icons/md'
import Footer from '../components/footer/Footer'
import { signOutUser } from "../firebase/functions";

function Home() {
  return(
      <Container fluid className="d-flex flex-column p-0 m-0 home text-light">
          <NavbarComponent data={{ background: 'transparent' }} />
          <Container fluid className="d-flex flex-column align-items-center">
            <h1 className="fw-bolder display-2 home-h1">KvammaLAN</h1>
            <p className="font-italic" style={{ fontSize: '1.2rem', color: '#9ca9b3' }}>
              Eit datatreff for born og ungdom i Kvam.
            </p>
            <Container className="w-50 d-flex justify-content-center gap-5 mt-2">
              <Button variant='primary'>
                Meld deg på
              </Button>
              <NavLink as={Button} href='/om-oss' style={{ color: '#fff' }} variant='secondary'>
                Les meir
              </NavLink>
              <Button onClick={() => {
                signOutUser()
              }}>
                Test sign in
              </Button>
            </Container>
            <div className="home-img">
              <img
                src={require('../img/lan.jpg')}
                alt='The Gathering 2014'
                title='The Gathering 2014'
                style={{
                  objectFit: 'contain',
                  width: '100%',
                  height: 'auto',
                  borderRadius: '.5%'
                }}
              />
              <small style={{ position: 'absolute', bottom: 0, right: '1%' }}>Ⓒ Foto: Eirik Jeppesen</small>
            </div>
          </Container>  
          <div className="divider"></div>
          <Container className="d-flex flex-column m-0 p-0" fluid>
            <h1 className="fw-bolder display-5 mt-5 align-self-center mb-5">INFORMASJON</h1>
            <Container fluid className="d-flex m-0 p-0 mb-5">
              <Row className="d-flex justify-content-center m-auto p-0">
                <Card className="col-lg-2 mx-2" bg='dark'>
                  <Card.Header className="d-flex justify-content-center">
                    <IoMdTime size='2.5rem' />
                  </Card.Header>
                  <Card.Body>
                    <div>
                      <b>JuniorLAN:</b>&nbsp;13.06.2022 kl. 14:00 til 13.06.2022 kl. 19:00
                    </div>
                    <br></br>
                    <div>
                      <b>SeniorLAN:</b>&nbsp;13.06.2022 kl. 20:00 til 14.06.2022 kl. 08:00
                    </div>
                  </Card.Body>
                </Card>
                <Card bg='dark' className="col-lg-2 mx-2">
                  <Card.Header className="d-flex justify-content-center">
                    <MdOutlinePlace size='2.5rem' />
                  </Card.Header>
                  <Card.Body className="d-flex flex-column">
                    <b style={{ alignSelf: 'center', fontSize: '1.1rem' }}>Kvam ungdomsskule</b>
                    <p className="m-0 mt-3">Holmatunvegen 12</p>
                    <p>5610 Øystese</p>
                    <small>
                      Me held til i fyrste etasje på Kvam ungdomsskule.
                      Inngangen finn du på framsida av skule
                      (den sida med sandvolleyballbanen).
                    </small>
                  </Card.Body>
                </Card>
                <Card bg='dark' className="col-lg-2 mx-2">
                  <Card.Header className="d-flex justify-content-center">
                    <IoMdPricetag size='2.5rem' />
                  </Card.Header>
                  <Card.Body>
                    <b>JuniorLAN</b>
                    <br></br>
                    <p className="mt-2">kr 50 ,-</p>
                    <br></br>
                    <b>SeniorLAN</b>
                    <br></br>
                    <ul style={{ listStyleType: 'circle' }}>
                      <li>Ikkje medlem: kr 150 ,-</li>
                      <li>Medlem: kr 100 ,-</li>
                    </ul>
                  </Card.Body>
                </Card>
                <Card bg='dark' className="col-lg-2 mx-2">
                  <Card.Header className="d-flex justify-content-center">
                    <h3 className="fw-bolder">Det vert</h3>
                  </Card.Header>
                  <Card.Body>
                    <ul style={{ listStyleType: 'circle' }}>
                      <li>Kiosk</li>
                      <li>Konkurransar</li>
                      <li>God stemning</li>
                    </ul>
                  </Card.Body>
                </Card>
              </Row>
            </Container>
          </Container>
          <div className="divider"></div>
          <Container fluid className="d-flex flex-column m-0 p-0 mt-3 mb-3">
            <h2 className="mx-5 mt-3 fw-bolder">Hugseliste</h2>
            <ul className="todo-list" style={{ listStyleType: 'circle' }}>
              <li>Noko å spela på (konsoll, stasjonær pc, laptop etc.)</li>
              <li>Skjerm(ar)</li>
              <li>Alt av nødvendig utstyr for å spela (tastatur, mus, headset, musematte, ladarar etc.)</li>
              <li>Nettverkskabel (nokre kan sitja så langt som 15 meter vekke frå næraste nettverkspunkt)</li>
              <li>Stol (om du ynskjer. Me har stolar som du òg kan bruka)</li>
              <li>Skøyteleidning(ar)</li>
            </ul>
          </Container>
          <Footer />
      </Container>
  )
}

export default Home;
