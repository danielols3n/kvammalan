import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import NavbarComponent from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import '../css/FAQ.css'
import { TailSpin } from 'react-loader-spinner'

function FAQ() {
  const [loading, setLoading] = useState(true)
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
        <Container onLoad={() => setLoading(false)} fluid className="h-100 d-flex flex-column align-items-center justify-content-center">
          <h1 className="text-light fw-bold">MEIR INFORMASJON KJEM SNART..</h1>
        </Container>
      <Footer />
    </Container>
  )
}

export default FAQ