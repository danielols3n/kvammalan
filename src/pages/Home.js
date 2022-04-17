import React from "react";
import { Button, Card, Container, NavLink, Row } from "react-bootstrap";
import NavbarComponent from "../components/navbar/Navbar";
import "../css/Home.css";
import { IoMdTime } from 'react-icons/io'

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
          <Container className="d-flex flex-column" fluid>
            <h1 className="fw-bolder display-5 mt-5 align-self-center">INFORMASJON</h1>
            <Container fluid className="d-flex">
              <Row lg={3} md={3} sm={1} className="d-flex justify-content-center">
                <Card className="col-lg-2 m-2" bg='dark'>
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
                <Card className="col-lg-2 m-2">
                  <Card.Header className="d-flex justify-content-center">
                    <IoMdTime size='2.5rem' />
                  </Card.Header>
                  <Card.Body>
                    <b>JuniorLAN:</b>&nbsp;13.06.2022 kl. 14:00 til 13.06.2022 kl. 19:00
                  </Card.Body>
                </Card>
                <Card className="col-lg-2 m-2">
                  <Card.Header className="d-flex justify-content-center">
                    <IoMdTime size='2.5rem' />
                  </Card.Header>
                  <Card.Body>
                    <b>JuniorLAN:</b>&nbsp;13.06.2022 kl. 14:00 til 13.06.2022 kl. 19:00
                  </Card.Body>
                </Card>
                <Card className="col-lg-2 m-2">
                  <Card.Header className="d-flex justify-content-center">
                    <IoMdTime size='2.5rem' />
                  </Card.Header>
                  <Card.Body>
                    <b>JuniorLAN:</b>&nbsp;13.06.2022 kl. 14:00 til 13.06.2022 kl. 19:00
                  </Card.Body>
                </Card>
              </Row>
            </Container>
          </Container>
      </Container>
  )
}

export default Home;
