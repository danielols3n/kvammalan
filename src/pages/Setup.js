import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import NavbarComponent from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import '../css/Setup.css'
import { TailSpin } from 'react-loader-spinner'

function Setup() {
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [description, setDescription] = useState('')
  const [products, setProducts] = useState([])
  const [image, setImage] = useState(null)
  const [place, setPlace] = useState('')
  const [address, setAddress] = useState('')

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  })

  const createEvent = (event) => {
    event.preventDefault()

    const ticketPrice = document.getElementById('formTicketPrice')
    console.log(ticketPrice)
  }

  document.title = 'Oppsett | KvammaLAN'

  return (
    <Container style={loading === false ? { minHeight: '100vh' } : { overflow: 'hidden', position: 'fixed' }} fluid className="d-flex flex-column p-0 m-0 faq">
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
        <Container fluid className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-light fw-bolder">OPPSETT</h1>
            <Container fluid className="d-flex justify-content-center">
              <Card style={{ width: '85%' }} className="p-4 my-3" bg='dark'>
              <Form className="w-100" onSubmit={createEvent}>
                <Form.Group as={Row} className="w-100">
                  <Col lg={1}></Col>
                  <Col lg={4}>
                    <Form.FloatingLabel controlId="eventName" label="NAMN">
                      <Form.Control value={name} onChange={e => setName(e.target.value)} type="text" placeholder="NAMN" />
                    </Form.FloatingLabel>
                  </Col>
                  <Col lg={2}></Col>
                  <Col lg={4}>
                    <Form.Label controlId="eventImage" className="text-light">BILETE</Form.Label>
                    <Form.Control value={image} onChange={e => setImage(e.target.files[0])} type="file" placeholder="BILETE" />
                  </Col>
                  <Col lg={1}></Col>
                </Form.Group>
                <Form.Group as={Row} className="w-100 mt-3">
                  <Col lg={1}></Col>
                  <Col lg={4}>
                    <Form.FloatingLabel controlId="eventStartTime" label="STARTTIDSPUNKT">
                      <Form.Control value={startTime} onChange={e => setStartTime(e.target.value)} type="datetime-local" placeholder="STARTTIDSPUNKT" />
                    </Form.FloatingLabel>
                  </Col>
                  <Col lg={2}></Col>
                  <Col lg={4}>
                  <Form.FloatingLabel controlId="eventEndTime" label="SLUTTIDSPUNKT">
                      <Form.Control value={endTime} onChange={e => setEndTime(e.target.value)} type="datetime-local" placeholder="SLUTTIDSPUNKT" />
                    </Form.FloatingLabel>
                  </Col>
                  <Col lg={1}></Col>
                </Form.Group>
                <Form.Group as={Row} className="w-100 my-3">
                  <Col lg={1}></Col>
                  <Col lg={4}>
                    <Form.FloatingLabel controlId="eventPlace" label="STAD">
                      <Form.Control value={place} onChange={e => setPlace(e.target.value)} type="text" placeholder="STAD" />
                    </Form.FloatingLabel>
                  </Col>
                  <Col lg={2}></Col>
                  <Col lg={4}>
                    <Form.FloatingLabel controlId="eventAddress" label="ADRESSE (eks. Nedre Vik 4, 5610 Øystese)">
                      <Form.Control value={address} onChange={e => setAddress(e.target.value)} type="text" placeholder="ADRESSE" />
                    </Form.FloatingLabel>
                  </Col>
                  <Col lg={1}></Col>
                </Form.Group>
                <Form.Group as={Row} className="w-100 mt-5">
                  <Col lg={1}></Col>
                  <Col lg={10}>
                      <Form.Label controlId="eventDescription">BESKRIVELSE</Form.Label>
                      <Form.Control as='textarea' rows={10} value={description} onChange={e => setDescription(e.target.value)} placeholder="BESKRIVELSE" />
                  </Col>
                  <Col lg={1}></Col>
                </Form.Group>
                <Form.Group as={Row} style={{ width: '85%' }} className="mt-5 d-flex flex-column m-auto">
                  <h5 className="text-light fw-bolder">BILLETTAR</h5>
                  <div className="setup-divider mb-3"></div>
                </Form.Group>
                <Form.Group as={Row} className="w-100 my-3">
                  <Col lg={1}></Col>
                  <Col lg={4}>
                    <Form.FloatingLabel controlId="formTicketName" label="BILLETTNAMN">
                      <Form.Control type="text" placeholder="BILLETTNAMN" />
                    </Form.FloatingLabel>
                  </Col>
                  <Col lg={2}></Col>
                  <Col lg={4}>
                    <Form.FloatingLabel controlId="eventTicketPrice" label="BILLETTPRIS (nok)">
                      <Form.Control id='formTicketPrice' type="number" placeholder="BILLETTPRIS (nok)" />
                    </Form.FloatingLabel>
                  </Col>
                  <Col lg={1}></Col>
                </Form.Group>
                <Form.Group as={Row} className="w-100 mb-3 mt-1">
                  <Button style={{ marginLeft: '10%', width: '15%' }} onClick={() => setCounter(counter + 1)}>LEGG TIL</Button>
                </Form.Group>
              </Form>
              <Form.Control value='' onChange={(e) => e.target.parentElement.value = e.target.value} id='formTicketPrice' type="text" placeholder="BILLETTPRIS (nok)" />
              </Card>
            </Container>
        </Container>
      <Footer />
    </Container>
  )
}

export default Setup