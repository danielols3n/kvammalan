import { collectionGroup, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { db } from '../firebase/config'

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
            <Row>
              <Col>
                <b></b>
              </Col>
              <Col>
              
              </Col>
              <Col>
              
              </Col>
              <Col>
              
              </Col>
              <Col>
              
              </Col>
              <Col>
              
              </Col>
            </Row>
          </Container>
        </>
      : null}
    </Container>
  )
}

export default DisplayRegistration