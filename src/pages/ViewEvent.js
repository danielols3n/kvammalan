import React, { useEffect, useState } from 'react'
import { Card, Container, Form, Row } from 'react-bootstrap'
import NavbarComponent from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { TailSpin } from 'react-loader-spinner'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../Firebase'
import eventimage from '../img/event.png'
import moment from 'moment'
import 'moment/locale/nn'
import { IoMdTime } from 'react-icons/io'
import { MdOutlinePlace } from 'react-icons/md'
import ReactLinkify from 'react-linkify'
import ReactAvatar from 'react-avatar'

function ViewEvent() {
  const [loading, setLoading] = useState(true)
  const [event, setEvent] = useState(null)
  const eventId = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)

    const temp = []
    const docRef = doc(db, 'events', eventId)

    getDoc(docRef).then((item) => {
            setEvent({
                name: item.data().name, 
                description: item.data().description, 
                startTime: item.data().startTime, 
                endTime: item.data().endTime,
                image: item.data().image,
                tickets: item.data().tickets,
                place: item.data().place,
                address: item.data().address, 
                id: item.id
            })
            console.log(item.data().tickets)
        }).catch(error => console.error(error))
    })

  document.title = 'Vis hending | KvammaLAN'

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
        <Container fluid className="h-100 d-flex flex-column align-items-center">
            {event !== null ?
                <>
                    <h1 className="text-light fw-bolder mt-3">{event.name.toUpperCase()}</h1>
                    <Container fluid className="d-flex flex-column align-items-center">
                        <Container fluid className="d-flex mt-3">
                            {event.image !== undefined && event.image !== '' && event.image !== null ? <img alt='' className="rounded" style={{ width: '50%', height: 'auto', objectFit: 'contain', margin: 'auto' }} src={event.image} /> : <img alt='' style={{ width: '50%', height: 'auto', objectFit: 'contain', margin: 'auto' }} src={eventimage} />}
                        </Container>
                        <Form style={{ marginLeft: '2.5%' }} className="w-100">
                            <Form.Group as={Row} className="w-75 text-light mt-5">
                                <Form.Label className="fw-bolder" style={{ fontSize: '1.5rem', marginLeft: '1.5%' }} >BESKRIVELSE</Form.Label>
                                <ReactLinkify>
                                    <p style={{ whiteSpace: 'pre-line' }} className="text-light">
                                        {event.description}
                                    </p>
                                </ReactLinkify>
                            </Form.Group>
                        </Form>
                        <Form style={{ marginLeft: '2.5%' }} className="w-100">
                            <Form.Group as={Row} className="w-75 text-light fw-bolder mt-5">
                                <Form.Label className="my-0" style={{ fontSize: '1.5rem' }} >STARTTIDSPUNKT</Form.Label>
                                <Container fluid className="d-flex align-items-center mb-3 p-0">
                                    <IoMdTime size="1.5rem" />
                                    <Form.Control style={{ fontSize: '0.9rem', marginLeft: '1%', margin: '0' }} disabled plaintext className="text-light" defaultValue={moment.unix(new Date(event.startTime)/1000).locale('nn').format('LLL')} />
                                </Container>
                            </Form.Group>
                            <Form.Group as={Row} className="w-75 text-light fw-bolder mt-2">
                                <Form.Label className="my-0" style={{ fontSize: '1.5rem' }} >SLUTTIDSPUNKT</Form.Label>
                                <Container fluid className="d-flex align-items-center mb-3 p-0">
                                    <IoMdTime size="1.5rem" />
                                    <Form.Control style={{ fontSize: '0.9rem', marginLeft: '1%', margin: '0' }} disabled plaintext className="text-light" defaultValue={moment.unix(new Date(event.endTime)/1000).locale('nn').format('LLL')} />
                                </Container>
                            </Form.Group>
                            <Form.Group as={Row} className="w-75 text-light fw-bolder mt-2">
                                <Form.Label className="my-0" style={{ fontSize: '1.5rem' }} >STAD</Form.Label>
                                <Container fluid className="d-flex align-items-center mb-3 p-0">
                                    <MdOutlinePlace size="1.5rem" />
                                    <a style={{ cursor: 'pointer', marginLeft: '1%', margin: '0' }} href={`https://maps.google.com/?q=${event.address}`}><Form.Control style={{ fontSize: '0.9rem', marginLeft: '1%', margin: '0', cursor: 'pointer' }} disabled plaintext className="text-light" defaultValue={event.place} /></a>
                                </Container>
                            </Form.Group>
                        </Form>
                        <Container fluid className="d-flex flex-column mt-5 mb-3">
                            <h2 className="fw-bolder text-light">BILLETTAR | {event.name}</h2>
                            <Row className="w-100 d-flex justify-content-center mt-4 mb-5">
                                {event.tickets.map((item) => {
                                    return(
                                        <Card className="d-flex flex-column m-3 col-lg-3 align-items-center p-3">
                                            <ReactAvatar className="mt-2" name={item.ticketname} round maxInitials={2} />
                                            <h2 className="fw-bolder mt-3">{item.ticketname.toUpperCase()}</h2>
                                            <Container fluid className="d-flex justify-content-center">
                                                <span style={{ fontSize: '1.2rem' }} className="mt-3"><b>PRIS:</b>&nbsp;{item.price} ,-</span>
                                            </Container>
                                        </Card>
                                    )
                                })}
                            </Row>
                        </Container>
                    </Container>
                </>
            : null}
        </Container>
      <Footer />
    </Container>
  )
}

export default ViewEvent