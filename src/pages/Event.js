import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import '../css/Event.css'
import NavbarComponent from '../components/navbar/Navbar'  
import Footer from '../components/footer/Footer' 
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import Linkify from 'react-linkify'

function Event() {
  const nextEventId = 'm8T5RrE1DAKWDSnHmoDh'
  const [event, setEvent] = useState(null)

  useEffect(() => {
    const fetchEvent = async () => {
      const docRef = doc(db, 'hendingar', nextEventId)

      const document = await getDoc(docRef)

      setEvent({
        title: document.data().title, 
          eventId: document.data().eventId,
          desc: document.data().description,
          start: document.data().start,
          end: document.data().end,
          img: document.data().img,
          prices: document.data().prices,
          place: document.data().place,
          id: document.id
      })
    }

    fetchEvent()
  }, [])

  return (
    <Container fluid className="event d-flex flex-column p-0 m-0">
        <NavbarComponent data={{ background: 'transparent' }} />
          <Container fluid className="d-flex flex-column text-light p-0 m-0">
            {event !== null && event !== undefined ? 
              <>
                <h1 className='fw-bolder mt-3 align-self-center'>{event.title}</h1>
                {event.img !== undefined ? 
                <img
                  src={event.img}
                  alt={event.title}
                  title={event.title}
                  style={{ 
                    objectFit: 'contain',
                    width: '50%',
                    height: 'auto',
                    alignSelf: 'center'
                  }}
                  className="mt-5 mb-4"
                /> : null}
                <Linkify className="text-light mt-3 w-75">
                  {event.desc}
                </Linkify>
                <Container fluid className="text-light d-flex flex-column p-0 m-0">
                  <div>
                    
                  </div>
                </Container>
              </>
              : null
            }
            
          </Container>
        <Footer />
    </Container>
  )
}

export default Event