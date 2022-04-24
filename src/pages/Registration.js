import React, { useState, useEffect } from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'
import Footer from '../components/footer/Footer'
import NavbarComponent from '../components/navbar/Navbar'
import '../css/Registration.css'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import axios from 'axios'

function Registration() {
    const nextEventId = 'm8T5RrE1DAKWDSnHmoDh'
    const [event, setEvent] = useState(null)

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [birth, setBirth] = useState('')
    const [minor, setMinor] = useState(false)

    const [parentfirstname, setParentfirstname] = useState('')
    const [parentlastname, setParentlastname] = useState('')
    const [parentphone, setParentphone] = useState('')
    const [parentemail, setParentemail] = useState('')

    const [tickettype, setTickettype] = useState('')

  useEffect(() => {
    const fetchEvent = async () => {
      const prices = []
      const docRef = doc(db, 'hendingar', nextEventId)

      const document = await getDoc(docRef)

      document.data().prices.forEach((price) => {
        axios.post('https://Kvam-E-sport-API.olsendaniel04.repl.co/price/get', {
          price: price.priceId,
          prod: price.productId
        }).then((response) => {
          prices.push({
            prodId: price.productId,
            priceId: price.priceId,
            name: response.data.product.name,
            price: response.data.price.unit_amount / 100
          })
        }).catch(error => {
          console.error(error)
        })
      })

      console.log(prices)

      setTimeout(() => {
        setEvent({
          title: document.data().title,
          eventId: document.data().eventId,
          desc: document.data().description,
          start: document.data().start,
          end: document.data().end,
          img: document.data().img,
          place: document.data().place,
          prices: prices,
          id: document.id
        })
      }, 1000)
    }

    fetchEvent()
  }, [])

  const register = (event) => {
    event.preventDefault()


  }

  return (
    <Container fluid className="registration d-flex flex-column p-0 m-0">
        <NavbarComponent data={{ background: 'transparent' }} />
        <Container fluid className="d-flex flex-column p-0 m-0">
            {event !== null && event !== undefined ?
                <> 
                    <h1 className="fw-bolder text-light align-self-center mt-4">Påmelding | {event.title}</h1>
                    <Form className="w-75 align-self-center mt-4" onSubmit={register}>
                      <Form.Group className="mt-3 mb-3" as={Row}>
                        <Col>
                          <Form.FloatingLabel controlId='floatingFirstname' label='Fornamn'>
                            <Form.Control placeholder='Fornamn' value={firstname} onChange={e => setFirstname(e.target.value)} type='text' />
                          </Form.FloatingLabel>
                        </Col>
                        <Col>
                          <Form.FloatingLabel controlId='floatingLastname' label='Etternamn'>
                            <Form.Control placeholder='Etternamn' type='text' value={lastname} onChange={e => setLastname(e.target.value)} />
                          </Form.FloatingLabel>
                        </Col>
                      </Form.Group>
                      <Form.Group className="mt-3 mb-3" as={Row}>
                        <Col>
                          <Form.FloatingLabel controlId='floatingEmail' label='E-postadresse'>
                            <Form.Control placeholder='E-postadresse' type='email' value={email} onChange={e => setEmail(e.target.value)} />
                          </Form.FloatingLabel>
                        </Col>
                        <Col>
                          <Form.FloatingLabel controlId='floatingPhone' label='Telefonnummer'>
                            <Form.Control placeholder='Telefonnummer' type='tel' value={phone} onChange={e => setPhone(e.target.value)} />
                          </Form.FloatingLabel>
                        </Col>
                      </Form.Group>
                      <Form.Group className="mt-3 mb-3" as={Row}>
                        <Col>
                        
                        </Col>
                        <Col>
                        
                        </Col>
                      </Form.Group>
                    </Form>
                </>
                : null
            }
        </Container>
        <Footer />
    </Container>
  )
}

export default Registration