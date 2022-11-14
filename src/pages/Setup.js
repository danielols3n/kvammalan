import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  })

  const createEvent = (event) => {
    event.preventDefault()
  }

  document.title = 'Oppsett | KvammaLAN'

  return (
    <Container style={loading === false ? { height: '100vh' } : { overflow: 'hidden', position: 'fixed' }} fluid className="d-flex flex-column p-0 m-0 faq">
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
        <Container fluid className="h-100 d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-light fw-bolder">OPPSETT</h1>
            <Container fluid className="d-flex justify-content-center customform">
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
              </Form>
            </Container>
        </Container>
      <Footer />
    </Container>
  )
}

export default Setup