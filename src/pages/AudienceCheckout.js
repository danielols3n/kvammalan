import React, { useState } from 'react'
import { Container, Form, Row, Col, Button, Modal } from 'react-bootstrap'
import NavbarComponent from '../components/navbar/Navbar' 
import Footer from '../components/footer/Footer'
import '../css/CheckoutInfo.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { db } from '../Firebase'
import { collection, addDoc } from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment/moment'
import axios from 'axios'

function AudienceCheckout() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [validate, setValidate] = useState(false)

  const submit = (event) => {
    event.preventDefault()

    if (name === '' || phone === '') {
      setValidate(true)
      window.scrollTo(0, 0)
      console.log(validate)
    } else {
        setValidate(false)
        const id = uuidv4()

        const colRef = collection(db, 'events', 'kvammalan2023', 'registrations')

        addDoc(colRef, {
            name: name, 
            phone: phone, 
            email: email,
            ticketId: searchParams.get('ticketId'),
            reservationId: id,
        }).then(() => {
            axios.post('https://kvam-e-sport-or-api.olsendaniel04.repl.co/create-checkout-session', {
                reservationId: id, 
                ticketId: searchParams.get('ticketId')
            }).then((res) => {
                window.location.href = res.data.url
            }).catch(error => console.error(error))
        })
    }
  }

  const games = ['Fortnite', 'Counter-Strike: Global Offensive', 'Valorant', 'Forza Horizon 5', 'Minecraft', 'Rocket League', 'League of Legends']

  return (
    <Container fluid className="checkoutinfo d-flex flex-column m-0 p-0">
        <NavbarComponent data={{ background: 'transparent' }} />
        <Container fluid className="d-flex flex-column align-items-center p-0 m-0 mb-5">
          <h1 className="fw-bolder text-light text-center mt-3">DELTAKARINFORMASJON - PUBLIKUM</h1>
          {validate === true ? <p className="text-danger fw-bolder mt-3 m-0 my-auto p-0">Ein eller fleire av dei obligatoriske felta er ikkje fylte ut. Fyll ut dei resterande felta og prøv på nytt.</p> : null}
          <Container fluid className="d-flex flex-column align-items-center">
            <Form className="checkout-form mt-5" onSubmit={submit}>
              <Row className="w-100 my-3">
                <Form.Group controlId='formName' className="my-2" as={Col} lg={6}>
                  <Form.FloatingLabel label='NAMN'>
                    <Form.Control placeholder='NAMN' value={name} onChange={(e) => setName(e.target.value)} type='text' />
                  </Form.FloatingLabel>
                  {name === '' && validate === true ? <p className="text-danger mt-2">Dette feltet er ikkje fylt ut.</p> : null}
                </Form.Group>
                <Form.Group controlId='formPhone' className='my-2' as={Col} lg={6}>
                  <Form.FloatingLabel label='TELEFONNUMMER'>
                    <Form.Control placeholder='TELEFONNUMMER' value={phone} onChange={(e) => setPhone(e.target.value)} type='tel' />
                  </Form.FloatingLabel>
                  {phone === '' && validate === true ? <p className="text-danger mt-2">Dette feltet er ikkje fylt ut.</p> : null}
                </Form.Group>
              </Row>
              <Row className="w-100 my-3">
                <Form.Group controlId='formEmail' as={Col} lg={12}>
                  <Form.FloatingLabel label='E-POSTADRESSE'>
                    <Form.Control placeholder='E-POSTADRESSE' value={email} onChange={(e) => setEmail(e.target.value)} type='email' />
                  </Form.FloatingLabel>
                  {email === '' && validate === true ? <p className="text-danger mt-2">Dette feltet er ikkje fylt ut.</p> : null}
                </Form.Group>
              </Row>
              <Row className="w-100 d-flex mt-5">
                <Button className="my-2 p-1" variant="secondary" onClick={() => navigate(`/kvammalan/checkout/cancel?reservationId=${searchParams.get('reservationId')}`)}>AVBRYT</Button>
                <Button className="my-2 p-1" variant="primary" type='submit'>GÅ TIL BETALING</Button>
              </Row>
            </Form>
          </Container>
        </Container>
        <Footer />
    </Container>
  )
}

export default AudienceCheckout