import React, { useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import '../css/Event.css'
import NavbarComponent from '../components/navbar/Navbar'  
import Footer from '../components/footer/Footer' 
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { IoMdTime } from 'react-icons/io'
import { MdOutlinePlace } from 'react-icons/md'
import moment from 'moment'
import 'moment/locale/nn'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { TailSpin } from 'react-loader-spinner'

function Event() {
  const nextEventId = 'BX4GwZjW1hTBn2G8NFwz'
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

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
      }, 2000)
    }

    fetchEvent()
  }, [])

  return (
    <Container fluid className="event d-flex flex-column p-0 m-0">
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
          <Container onLoad={() => setLoading(false)} style={{ backgroundColor: '#171a1c' }} fluid className="d-flex flex-column text-light p-0 m-0">
            {event !== null && event !== undefined ? 
              <>
                <h1 className='fw-bolder mt-3 align-self-center text-center'>{event.title}</h1>
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
                <p style={{ backgroundColor: '#171a1c' }} className="mx-5 text-light mt-3 w-75">
                  {event.desc}
                </p>
                <Container style={{ backgroundColor: '#171a1c', paddingLeft: '1.5%' }} fluid className="text-light d-flex flex-column my-4 m-0">
                  <div className="text-light" style={{ backgroundColor: '#171a1c' }}>
                    <IoMdTime size='2rem' />
                    <b>Start:</b>&nbsp;{moment(event.start).locale('nn').format('LLLL')}
                  </div>
                  <div className="text-light" style={{ backgroundColor: '#171a1c' }}>
                    <IoMdTime size='2rem' />
                    <b>Slutt:</b>&nbsp;{moment(event.end).locale('nn').format('LLLL')}
                  </div>
                  <div className="text-light" style={{ backgroundColor: '#171a1c' }}>
                    <MdOutlinePlace size='2rem' />
                    <b>Stad:</b>&nbsp;{event.place}
                  </div>
                  <h4 className="fw-bolder text-light mt-5 ">Prisar</h4>
                  <ul className="text-light">
                    {event.prices.map((price) => {
                      return (
                        <li><b>{price.name}:</b>&nbsp;{price.price} kr</li>
                      )
                    })}
                  </ul>
                </Container>
                <Row className="m-0 p-0 w-100 d-flex justify-content-center align-items-center">
                  <Button className="w-25 m-5" onClick={() => navigate('/kvammalan/pamelding')} variant='primary'>
                    Meld deg på
                  </Button>
                </Row>
              </>
              : null
            }
            
          </Container>
        <Footer />
    </Container>
  )
}

export default Event