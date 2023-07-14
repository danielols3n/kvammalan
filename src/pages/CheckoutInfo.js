import React, { useState } from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'
import NavbarComponent from '../components/navbar/Navbar' 
import Footer from '../components/footer/Footer'
import '../css/CheckoutInfo.css'

function CheckoutInfo() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [gender, setGender] = useState('')

  const submit = () => {
    console.log('Submit')
  }

  return (
    <Container fluid className="checkoutinfo d-flex flex-column m-0 p-0">
        <NavbarComponent data={{ background: 'transparent' }} />
        <Container fluid className="d-flex flex-column align-items-center p-0 m-0 mb-5">
          <h1 className="fw-bolder text-light text-center mt-3">DELTAKARINFORMASJON</h1>
          <Container fluid className="d-flex flex-column align-items-center">
            <Form className="checkout-form mt-5" onSubmit={submit}>
              <Row className="w-100 my-3">
                <Form.Group as={Col} lg={6}>
                  <Form.FloatingLabel label='NAMN'>
                    <Form.Control placeholder='NAMN' value={name} onChange={(e) => setName(e.target.value)} type='text' />
                  </Form.FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} lg={6}>
                  <Form.FloatingLabel label='TELEFONNUMMER'>
                    <Form.Control placeholder='TELEFONNUMMER' value={phone} onChange={(e) => setPhone(e.target.value)} type='tel' />
                  </Form.FloatingLabel>
                </Form.Group>
              </Row>
              <Row className="w-100 my-3">
                <Form.Group as={Col} lg={12}>
                  <Form.FloatingLabel label='E-POSTADRESSE'>
                    <Form.Control placeholder='E-POSTADRESSE' value={email} onChange={(e) => setEmail(e.target.value)} type='email' />
                  </Form.FloatingLabel>
                </Form.Group>
              </Row>
              <Row className="w-100">
                &nbsp;
              </Row>
              <Row className="w-100 my-3 mt-5">
                <Form.Group as={Col} lg={12}>
                  <Form.FloatingLabel label='ADRESSE'>
                    <Form.Control placeholder='ADRESSE' value={address} onChange={(e) => setAddress(e.target.value)} type='text' />
                  </Form.FloatingLabel>
                </Form.Group>
              </Row>
              <Row className="w-100 my-3">
                <Form.Group as={Col} lg={3}>
                  <Form.FloatingLabel label='POSTNUMMER'>
                    <Form.Control placeholder='POSTNUMMER' value={zipcode} onChange={(e) => setZipcode(e.target.value)} type='text' />
                  </Form.FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} lg={9}>
                  <Form.FloatingLabel label='POSTSTAD'>
                    <Form.Control placeholder='POSTSTAD' value={city} onChange={(e) => setCity(e.target.value)} type='text' />
                  </Form.FloatingLabel>
                </Form.Group>
              </Row>
              <Row className="w-100 my-3">
                <Form.Group as={Col} lg={12}>
                  <Form.FloatingLabel label='LAND'>
                    <Form.Control placeholder='LAND' value={country} onChange={(e) => setCountry(e.target.value)} type='text' />
                  </Form.FloatingLabel>
                </Form.Group>
              </Row>
              <Row className="w-100">
                &nbsp;
              </Row>
              <Row className="w-100 my-3 mt-5">
                <Form.Group as={Col} lg={6}>
                  <Form.FloatingLabel label='FØDSELSDATO'>
                    <Form.Control value={birthdate} onChange={(e) => setBirthdate(e.target.value)} type='date' />
                  </Form.FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} lg={6}>
                  <Form.Select className="py-3" onSelect={(e) => setGender(e.target.value)}>
                    <option value=' '>&nbsp;</option>
                    <option value='Mann'>Mann</option>
                    <option value='Kvinne'>Kvinne</option>
                    <option value='Annet'>Annet</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row className="w-100">
                &nbsp;
              </Row>
              <Row className="w-100 mt-3">
                <h2 className="fw-bolder text-light">SPELINFORMASJON</h2>
              </Row>
              <Row className="w-100 my-3 mt-5 d-flex flex-column align-items-center">
                <Form.Group as={Col} lg={12}>
                  
                </Form.Group>
              </Row>
            </Form>
          </Container>
        </Container>
        <Footer />
    </Container>
  )
}

export default CheckoutInfo