import { collectionGroup, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { db } from '../firebase/config'

function DisplayRegistration() {
  const location = useLocation()
  const id = location.pathname.split('/')[2]

  useEffect(() => {
    const fetchReg = async () => {
      const q = query(collectionGroup(db, 'registreringar'), where('id', '==', id))

    const qSnap = await getDocs(q)

    console.log(qSnap[0])
    }

    fetchReg()
  }, [])

  return (
    <Container fluid className="d-flex flex-column m-0 p-0">
      <h1 className="fw-bolder"></h1>
    </Container>
  )
}

export default DisplayRegistration