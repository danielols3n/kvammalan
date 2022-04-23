import React, { useState, useEffect } from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap'
import Footer from '../components/footer/Footer'
import NavbarComponent from '../components/navbar/Navbar'
import '../css/Registration.css'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import axios from 'axios'

function Registration() {
    const nextEventId = 'm8T5RrE1DAKWDSnHmoDh'
    const [event, setEvent] = useState(null)

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
      }, 750)
    }

    fetchEvent()
  }, [])

  return (
    <Container fluid className="registration d-flex flex-column p-0 m-0">
        <NavbarComponent data={{ background: 'transparent' }} />
        <Container fluid className="d-flex flex-column p-0 m-0">
            {event !== null && event !== undefined ?
                <> 
                    <h1 className="fw-bolder text-light align-self-center mt-4">Påmelding | {event.title}</h1>
                    <Tabs defaultActiveKey={event.prices[0].name}>
                        {event.prices.map((price) => {
                            return (
                                <Tab style={{ backgroundColor: '#171a1c' }} tabClassName='custom-tab' eventKey={price.name} title={price.name}>
        
                                </Tab>
                            )
                        })}
                    </Tabs>
                </>
                : null
            }
        </Container>
        <Footer />
    </Container>
  )
}

export default Registration