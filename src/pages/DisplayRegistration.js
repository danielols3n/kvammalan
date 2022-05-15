import { collectionGroup, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { db } from '../firebase/config'
import moment from 'moment'
import 'moment/locale/nn'

function DisplayRegistration() {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const [reg, setReg] = useState(null)

  useEffect(() => {
    const fetchReg = async () => {
      const q = query(collectionGroup(db, 'registreringar'), where('id', '==', id))

      const qSnap = await getDocs(q)

      setReg(qSnap.docs[0].data())
    }

    fetchReg()
  }, [])

  return (
    <Container fluid className="d-flex flex-column m-0 p-0">
      {reg !== null ? 
        <>
          <h1 className="fw-bolder mt-5 align-self-center">{reg.name}</h1>
          <Container fluid>
            <Row className="mt-5" style={{ fontSize: '20px' }}>
              <Col className='d-flex justify-content-center align-items-center'>
                <b>NAMN:</b>&nbsp;<span>{reg.name}</span>
              </Col>
              <Col className='d-flex justify-content-center align-items-center'>
                <b>E-POSTADRESSE:</b>&nbsp;<span>{reg.email}</span>
              </Col>
            </Row>
            <Row className="mt-3" style={{ fontSize: '20px' }}>
              <Col className='d-flex justify-content-center align-items-center'>
                <b>TELEFONNUMMER:</b>&nbsp;<span>{reg.phone}</span>
              </Col>
              <Col className='d-flex justify-content-center align-items-center'>
                <b>FØDSELSDATO:</b>&nbsp;<span>{moment(reg.birthdate).locale('nn').format('L')}</span>
              </Col>
            </Row>
            <Row className="mt-3" style={{ fontSize: '20px' }}>
              <Col className='d-flex justify-content-center align-items-center'>
                <b>UNDER 18?:</b>&nbsp;<span>{reg.minor === 'true' ? 'Ja' : 'Nei'}</span>
              </Col>
              <Col className='d-flex justify-content-center align-items-center'>
                <b>BETALT:</b>&nbsp;<span>{reg.paid === true ? 'Ja' : 'Nei'}</span>
              </Col>
            </Row>
            <Row className="mt-3" style={{ fontSize: '20px' }}>
              <Col className='d-flex justify-content-center align-items-center'>
                <b>EVENTID:</b>&nbsp;<span>{reg.eventId}</span>
              </Col>
              <Col className='d-flex justify-content-center align-items-center'>
                <b>REG_ID:</b>&nbsp;<span>{reg.id}</span>
              </Col>
            </Row>
            {reg.minor === 'true' ?
              <>
                <Row style={{ fontSize: '20px', marginTop: '7.5%' }}>
                  <Col className='d-flex justify-content-center align-items-center'>
                    <b>NAMN FORESATT:</b>&nbsp;<span>{reg.parentname}</span>
                  </Col>
                  <Col className='d-flex justify-content-center align-items-center'>
                    <b>E-POST FORESATT:</b>&nbsp;<span>{reg.parentemail}</span>
                  </Col>
                </Row>
                <Row className="mt-3" style={{ fontSize: '20px' }}>
                  <Col className='d-flex justify-content-center align-items-center'>
                    <b>TELEFONNUMMER FORESATT:</b>&nbsp;<span>{reg.parentphone}</span>
                  </Col>
                </Row>
              </>
              : null
            }
            <Row className="mt-5" style={{ fontSize: '20px' }}>
              <Col className='d-flex justify-content-center align-items-center'>
                <b>SJEKKA INN?:</b>&nbsp;<span>{reg.checkedIn ? 'Ja' : 'Nei'}</span>
              </Col>
            </Row>
          </Container>
        </>
      : null}
    </Container>
  )
}

export default DisplayRegistration