import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import NavbarComponent from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import '../css/FAQ.css'
import { TailSpin } from 'react-loader-spinner'
import SeatPicker from 'react-seat-picker'

function Registration() {
  const [loading, setLoading] = useState(true)
  const [rows, setRows] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  })

  document.title = 'Ofte stitle spørsmål | KvammaLAN'
  return (
    <Container style={loading === false ? { height: '100vh' } : { overflow: 'hidden', position: 'fixed' }} fluid className="d-flex flex-column p-0 m-0 faq">
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
        <Container fluid className="h-100 d-flex flex-column align-items-center justify-content-center">
            <SeatPicker
                rows={rows}
                maxReservableSeats={3}
                alpha
                visible
                selectedByDefault
                loading={loading}
                tooltipProps={{multiline: true}}
            />
        </Container>
      <Footer />
    </Container>
  )
}

export default Registration