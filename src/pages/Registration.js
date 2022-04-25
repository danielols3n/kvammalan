import React, { useState, useEffect } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import Footer from '../components/footer/Footer'
import NavbarComponent from '../components/navbar/Navbar'
import '../css/Registration.css'
import { doc, getDoc, addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/config'
import axios from 'axios'
import moment from 'moment'

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
      }, 1500)
    }

    fetchEvent()
  }, [])

  const register = (event) => {
    event.preventDefault()

    if (minor === true) {
      axios.post('https://Kvam-E-sport-API.olsendaniel04.repl.co/create-checkout-session', {
        priceId: tickettype,
        email: parentemail,
        success_url: `${window.location.href}/success`,
        cancel_url: `${window.location.href}/cancel`,
        metadata: {
          name: `${firstname} ${lastname}`, 
          email: email, 
          phone: phone,
          birth: birth,
          minor: true,
          parentname: `${parentfirstname} ${parentlastname}`,
          parentemail: parentemail,
          parentphone: parentphone
        }
      }).then(async (response) => {
        console.log(response)
      })
    } else if (minor === false) {
      axios.post('https://Kvam-E-sport-API.olsendaniel04.repl.co/create-checkout-session', {
        priceId: tickettype,
        email: email,
        success_url: `${window.location.href}/success`,
        cancel_url: `${window.location.href}/cancel`
      }).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.error(error)
      })
    }
  }

  return (
    <Container fluid className="registration d-flex flex-column p-0 m-0">
        <NavbarComponent data={{ background: 'transparent' }} />
        <Container fluid className="d-flex flex-column p-0 m-0">
            {event !== null && event !== undefined ?
                <> 
                    <h1 className="fw-bolder text-light align-self-center mt-4 text-center">Påmelding | {event.title}</h1>
                    <Form className="w-75 align-self-center mt-4" onSubmit={register}>
                      <Form.Group lg={2} md={1} sm={1} xs={1} className="mt-3 mb-3" as={Row}>
                        <Col className="my-3">
                          <Form.FloatingLabel controlId='floatingFirstname' label='Fornamn'>
                            <Form.Control placeholder='Fornamn' value={firstname} onChange={e => setFirstname(e.target.value)} type='text' />
                          </Form.FloatingLabel>
                        </Col>
                        <Col className="my-3">
                          <Form.FloatingLabel controlId='floatingLastname' label='Etternamn'>
                            <Form.Control placeholder='Etternamn' type='text' value={lastname} onChange={e => setLastname(e.target.value)} />
                          </Form.FloatingLabel>
                        </Col>
                      </Form.Group>
                      <Form.Group lg={2} md={1} sm={1} xs={1} className="mt-3 mb-3" as={Row}>
                        <Col className="my-3">
                          <Form.FloatingLabel controlId='floatingEmail' label='E-postadresse'>
                            <Form.Control placeholder='E-postadresse' type='email' value={email} onChange={e => setEmail(e.target.value)} />
                          </Form.FloatingLabel>
                        </Col>
                        <Col className="my-3">
                          <Form.FloatingLabel controlId='floatingPhone' label='Telefonnummer'>
                            <Form.Control placeholder='Telefonnummer' type='tel' value={phone} onChange={e => setPhone(e.target.value)} />
                          </Form.FloatingLabel>
                        </Col>
                      </Form.Group>
                      <Form.Group lg={2} md={1} sm={1} xs={1} className="mt-3 mb-3" as={Row}>
                        <Col className="my-3">
                          <Form.FloatingLabel label='Fødselsdato'>
                            <Form.Control placeholder='Fødselsdato' type='date' value={birth} onChange={e => {
                              setBirth(e.target.value)
                              if (moment().unix() - moment(e.target.value).unix() < 568024668) {
                                console.log('Minor')
                                setMinor(true)
                              } else {
                                setMinor(false)
                                console.log('Not minor')
                              }
                            }} />
                          </Form.FloatingLabel>
                        </Col>
                        <Col className="my-3">

                        </Col>
                      </Form.Group>
                      <Form.Group className="my-3" as={Row} lg={2} md={1} sm={1} xs={1}>
                        <Form.FloatingLabel controlId='formTickettype' label="Vel billettype">
                          <Form.Select aria-label='Vel billettype' value={tickettype} onChange={e => setTickettype(e.target.value)}>
                            <option>Vel billettype..</option>
                            {event.prices.map((price) => {
                              return(
                                <option value={price.priceId}>{price.name} - {price.price} kr</option>
                              )
                            })}
                          </Form.Select>
                        </Form.FloatingLabel>
                      </Form.Group>
                      {minor === true ? 
                        <>
                        <h3 className="mt-5 text-light fw-bolder">Foresatt</h3>
                        <p className="text-light">
                          Sidan du er under 18 år gamal, lyt ein foresatt stå oppført på deg.
                        </p>
                        <Form.Group className="my-3" as ={Row} lg={2} md={1} sm={1} xs={1}>
                          <Col>
                            <Form.FloatingLabel label='Fornamn'>
                              <Form.Control type='text' placeholder='Fornamn' value={parentfirstname} onChange={e => setParentfirstname(e.target.value)} />
                            </Form.FloatingLabel>
                          </Col>
                          <Col>
                            <Form.FloatingLabel label='Etternamn'>
                              <Form.Control type='text' placeholder='Etternamn' value={parentlastname} onChange={e => setParentlastname(e.target.value)} />
                            </Form.FloatingLabel>
                          </Col>
                        </Form.Group>
                        <Form.Group className="my-3" as ={Row} lg={2} md={1} sm={1} xs={1}>
                          <Col>
                            <Form.FloatingLabel label='E-postadresse'>
                              <Form.Control placeholder='E-postadresse' type='email' value={parentemail} onChange={e => setParentemail(e.target.value)} />
                            </Form.FloatingLabel>
                          </Col>
                          <Col>
                            <Form.FloatingLabel label='Telefonnummer'>
                              <Form.Control placeholder='Telefonnummer' type='tel' value={parentphone} onChange={e => setParentphone(e.target.value)} />
                            </Form.FloatingLabel>
                          </Col>
                        </Form.Group>
                        </>
                        : null
                      }
                      <Row className="m-0 p-0 my-3">
                        <Button className="w-25 mt-5 mb-4" type='submit' variant='primary'>
                          Meld på
                        </Button>
                      </Row>
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