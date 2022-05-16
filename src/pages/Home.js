import React, { useState } from "react";
import { Button, Card, Container, NavLink, Row } from "react-bootstrap";
import NavbarComponent from "../components/navbar/Navbar";
import "../css/Home.css";
import { IoMdTime, IoMdPricetag } from 'react-icons/io'
import { MdOutlinePlace } from 'react-icons/md'
import Footer from '../components/footer/Footer'
import { TailSpin } from 'react-loader-spinner'

function Home() {
  const [loading, setLoading] = useState(true)

  document.title = 'Heim | KvammaLAN'
  return(
      <Container style={loading === false ? {} : { overflow: 'hidden', position: 'fixed' }} fluid className="d-flex flex-column p-0 m-0 home text-light">
        {loading === true ?
          <Container className="d-flex flex-column p-0 m-0 home text-light" fluid style={loading === true ? { alignItems: 'center', justifyContent: 'center', height: '100vh', overflow: 'hidden' }: {}}>
              <TailSpin
                color="#00BFFF"
                height={100}
                width={100}
            />    
            <span>Lastar inn...</span>
          </Container>
          : null}
          <NavbarComponent data={{ background: 'transparent' }} />
          <Container onLoad={() => setLoading(false)} style={loading ? { overflow: 'hidden' }: {}} fluid className="d-flex flex-column align-items-center">
            <h1 className="fw-bolder display-2 home-h1">KvammaLAN</h1>
            <p className="font-italic text-center" style={{ fontSize: '1.2rem', color: '#9ca9b3' }}>
              Eit datatreff for born og ungdom i Kvam.
            </p>
            <Container fluid className="d-flex justify-content-center gap-5 mt-2">
              <NavLink as={Button} href='/kvammalan' style={{ color: '#fff' }} variant='primary' >
                Meld deg på
              </NavLink>
              <NavLink as={Button} href='/om-oss' style={{ color: '#fff' }} variant='secondary'>
                Les meir
              </NavLink>
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
              <Row lg={4} md={3} sm={1} xs={1} className="w-100 d-flex justify-content-center m-auto p-0">
                <Card className="mx-2 my-3" bg='dark'>
                  <Card.Header className="d-flex justify-content-center">
                    <IoMdTime size='2.5rem' />
                  </Card.Header>
                  <Card.Body className="align-items-center justify-content-center">
                    <div>
                      <b>KvammaLAN:</b>&nbsp;10.10.2022 kl. 15:00 til 12.10.2022 kl. 15:00
                    </div>
                  </Card.Body>
                </Card>
                <Card bg='dark' className="mx-2 my-3">
                  <Card.Header className="d-flex justify-content-center">
                    <MdOutlinePlace size='2.5rem' />
                  </Card.Header>
                  <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                    <b style={{ alignSelf: 'center', fontSize: '1.1rem' }}>Øystese idrettshall</b>
                    <p className="m-0 mt-3">Holmane 20</p>
                    <p>5610 Øystese</p>
                  </Card.Body>
                </Card>
                <Card bg='dark' className="mx-2 my-3">
                  <Card.Header className="d-flex justify-content-center">
                    <IoMdPricetag size='2.5rem' />
                  </Card.Header>
                  <Card.Body>
                    <b>KvammaLAN</b>
                    <br></br>
                    <ul style={{ listStyleType: 'circle' }}>
                      <li>Ikkje medlem: kr 250 ,-</li>
                      <li>Medlem: kr 150 ,-</li>
                    </ul>
                  </Card.Body>
                </Card>
                <Card bg='dark' className="mx-2 my-3">
                  <Card.Header className="d-flex justify-content-center">
                    <h3 className="fw-bolder">Det vert</h3>
                  </Card.Header>
                  <Card.Body>
                    <ul style={{ listStyleType: 'circle' }}>
                      <li>Kiosk</li>
                      <li>Konkurransar</li>
                      <li>God stemning</li>
                      <li>Mykje speling</li>
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
              <li>Mobil og ladar</li>
              <li>Drikkeflaske med vatn</li>
              <li>Pengar om du ynskjer å handla i kiosken</li>
              <li>Sovepose, liggjeunderlag og pute (om du skal sova på LANet)</li>
            </ul>
          </Container>
          <Footer />
      </Container>
  )
}

export default Home;
