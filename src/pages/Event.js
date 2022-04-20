import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import '../css/Event.css'
import NavbarComponent from '../components/navbar/Navbar'  
import Footer from '../components/footer/Footer' 
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'

function Event() {
  const nextEventId = ' m8T5RrE1DAKWDSnHmoDh'
  const [event, setEvent] = useState(null)

  useEffect(() => {
    const fetchEvent = async () => {
      const temp = []
      const q = query(collection(db, 'hendingar'), where('eventId', '==', nextEventId))

      const querySnapshot = await getDocs(q)

      querySnapshot.forEach((doc) => {
        temp.push({
          title: doc.data().title, 
          eventId: doc.data().eventId,
          desc: doc.data().description,
          start: doc.data().start,
          end: doc.data().end,
          img: doc.data().img,
          prices: doc.data().prices,
          place: doc.data().place
        })
      })
      setEvent(temp[0])
    }

    fetchEvent()
  }, [])

  return (
    <Container fluid className="event d-flex flex-column p-0 m-0">
        <NavbarComponent data={{ background: 'transparent' }} />
          <Container fluid className="d-flex flex-column text-light">
            {event !== null ? <h1 className='fw-bolder mt-3 align-self-center'>{event.title}</h1> : null}
          </Container>
        <Footer />
    </Container>
  )
}

export default Event