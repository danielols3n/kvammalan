import React, { useEffect, useState } from 'react'
import { Container, Form, Row, Col, Card } from 'react-bootstrap'
import { db } from '../../Firebase'
import { query, getDocs, collection, where } from 'firebase/firestore'
import { useSearchParams } from 'react-router-dom'
import AdminNavbar from '../../components/admin-navbar/AdminNavbar'

function AdminViewParticipant() {
  const [participant, setParticipant] = useState(null)
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const q = query(collection(db, 'events', 'kvammalan2023', 'registrations'), where('reservationId', '==', searchParams.get('reservationId')))

    getDocs(q).then(querySnapshot => {
      const participantDocument = querySnapshot.docs[0]

      setParticipant({
        ...participantDocument.data(),
        id: participantDocument.id
      })

    }).catch(error => console.error(error))
  }, [])
  return (
    <Container fluid className="d-flex flex-column m-0 p-0">
      <AdminNavbar />
      {participant !== null ? 
        <>
          <h1 className="w-50 mx-auto mt-4 fw-bolder text-center">{participant.name.toUpperCase()}</h1>
          <Container fluid className="d-flex flex-column m-0 p-0">
            <Card className="w-75 rounded boxshadow mx-auto my-5">
              <Card.Header>INFORMASJON</Card.Header>
              <Card.Body>
                <Form className="w-100">
                  <Row className="w-100 m-0 my-3 p-0">
                    <Form.Group className="my-2" as={Col} lg={6}>
                      <Form.Label><b>NAMN</b></Form.Label>
                      <Form.Control defaultValue={participant.name} plaintext readOnly />
                    </Form.Group>
                    <Form.Group className="my-2" as={Col} lg={6}>
                      <Form.Label><b>E-POSTADRESSE</b></Form.Label>
                      <Form.Control defaultValue={participant.email} plaintext readOnly />
                    </Form.Group>
                  </Row>
                  <Row className="w-100 m-0 my-3 p-0">
                    <Form.Group className="my-2" as={Col} lg={6}>
                      <Form.Label><b>TELEFONNUMMER</b></Form.Label>
                      <Form.Control defaultValue={participant.phone} plaintext readOnly />
                    </Form.Group>
                    <Form.Group className="my-2" as={Col} lg={6}>
                      <Form.Label><b>FØDSELSDATO</b></Form.Label>
                      <Form.Control defaultValue={participant.birthdate} plaintext readOnly />
                    </Form.Group>
                  </Row>
                  <Row className="w-100 m-0 my-3 p-0">
                    <Form.Group className="my-2" as={Col} lg={6}>
                      <Form.Label><b>ADRESSE</b></Form.Label>
                      <Form.Control defaultValue={participant.address} plaintext readOnly />
                    </Form.Group>
                    <Form.Group className="my-2" as={Col} lg={6}>
                      <Form.Label><b>POSTNUMMER</b></Form.Label>
                      <Form.Control defaultValue={participant.zipcode} plaintext readOnly />
                    </Form.Group>
                  </Row>
                  <Row className="w-100 m-0 my-3 p-0">
                    <Form.Group className="my-2" as={Col} lg={6}>
                      <Form.Label><b>BY</b></Form.Label>
                      <Form.Control defaultValue={participant.city} plaintext readOnly />
                    </Form.Group>
                    <Form.Group className="my-2" as={Col} lg={6}>
                      <Form.Label><b>LAND</b></Form.Label>
                      <Form.Control defaultValue={participant.country} plaintext readOnly />
                    </Form.Group>
                  </Row>
                  <Row className="w-100 m-0 my-3 p-0">
                    <Form.Group className="my-2" as={Col} lg={6}>
                      <Form.Label><b>KJØNN</b></Form.Label>
                      <Form.Control defaultValue={participant.gender} plaintext readOnly />
                    </Form.Group>
                    <Form.Group className="my-2" as={Col} lg={6}>
                      <Form.Label><b>VALGTE SPEL</b></Form.Label>
                      <Form.Control defaultValue={participant.selectedGames !== undefined ? participant.selectedGames.join(', ') : "Ingen valgte spel"} plaintext readOnly />
                    </Form.Group>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Container>
        </>
        : null
      }
    </Container>
  )
}

export default AdminViewParticipant