import React, { useState } from 'react'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import AdminNavbar from '../../components/admin-navbar/AdminNavbar'
import { useNavigate } from 'react-router-dom'
import moment from 'moment/moment'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../Firebase'

function AdminCompetitions() {
  const [modal, setModal] = useState()

  const [name, setName] = useState('')
  const [game, setGame] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [creator, setCreator] = useState('')

  const navigate = useNavigate()

  const createNewCompetition = (event) => {
    event.preventDefault()

    const colRef = collection(db, 'events', 'kvammalan2023', 'competitions')

    addDoc(colRef, {
      name: name, 
      game: game, 
      start: start,
      end: end
    }).then((docRef) => {
      navigate(`/kvammalan/admin/competitions/view-competition?eventId=${docRef.id}`)
    }).catch(error => alert(`Error message: ${error.message}`))
  }
  return (
    <Container fluid className="d-flex flex-column m-0 p-0">
      <AdminNavbar />
      <Container fluid className="d-flex flex-column m-0 p-0">
        <Row className="w-100 m-0 p-0 h-auto">
          <Col lg={8} className="mt-4">
            <h1 className="w-50 fw-bolder m-auto">KONKURRANSAR</h1>
          </Col>
          <Col lg={4} className="d-flex flex-column h-auto mt-3 align-items-end">
            <Button onClick={() => setModal(true)} className="d-flex flex-column w-25 py-0 px-3 h-auto mx-5 mt-3" variant='primary'>
              <span className="m-auto" style={{ fontSize: '2rem' }}>+</span>
            </Button>
          </Col>
        </Row>
      </Container>
      <Modal show={modal} onHide={() => setModal(false)} size='xl' centered>
        <Modal.Header closeButton>
          <h1 className='text-center w-100 fw-bolder'>OPPRETT KONKURRANSE</h1>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={createNewCompetition} className="d-flex flex-column m-0 p-0">
            <Row className="w-100 m-0 p-0 mt-3">
              <Form.Group as={Col} lg={6}> 
                <Form.FloatingLabel label='NAMN PÅ KONKURRANSE'>
                  <Form.Control placeholder='NAMN PÅ KONKURRANSE' type='text' value={name} onChange={e => setName(e.target.value)} />
                </Form.FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} lg={6}> 
                <Form.FloatingLabel label='SPEL'>
                  <Form.Select onChange={e => setGame(e.target.value)} value={game}>
                    <option value=' '>&nbsp;</option>
                    <option value='Fortnite'>Fortnite</option>
                    <option value='Minecraft'>Minecraft</option>
                    <option value='Rocket League'>Rocket Leauge</option>
                    <option value='Counter Strike: Global Offensive'>Counter Strike: Global Offensive</option>
                    <option value='Forza Horizon 5'>Forza Horizon 5</option>
                    <option value='League of Legends'>League of Legends</option>
                    <option value='Valorant'>Valorant</option>
                  </Form.Select>
                </Form.FloatingLabel>
              </Form.Group>
            </Row>
            <Row className="w-100 m-0 p-0 mt-3">
              <Form.Group as={Col} lg={6}> 
                <Form.FloatingLabel label='START'>
                  <Form.Control placeholder='START' type='datetime-local' value={start} onChange={e => setStart(e.target.value)} />
                </Form.FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} lg={6}> 
                <Form.FloatingLabel label='SLUTT'>
                  <Form.Control placeholder='SLUTT' type='datetime-local' value={end} onChange={e => setEnd(e.target.value)} />
                </Form.FloatingLabel>
              </Form.Group>
            </Row>
            <Row className="w-100 m-0 p-0 mt-4">
              <Form.Group as={Col} lg={4}>
                <Button type='submit' variant='primary'>OPPRETT</Button>
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  )
}

export default AdminCompetitions