import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import '../css/Event.css'
import NavbarComponent from '../components/navbar/Navbar'  
import Footer from '../components/footer/Footer' 
import { collection, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'

function Event() {
  const [eventData, setEvent] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    setData(JSON.parse(event))

    const q = query(collection(db, 'hendingar'), where('eventId', '==', data.nextevent))
  }, [])

  return (
    <Container fluid className="event d-flex flex-column p-0 m-0">
        <NavbarComponent data={{ background: 'transparent' }} />
          <Container fluid className="d-flex flex-column">
            <h1 className='fw-bolder mt-3 align-self-center'>Test</h1>
          </Container>
        <Footer />
    </Container>
  )
}

export default Event