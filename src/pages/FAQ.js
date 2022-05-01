import React from 'react'
import { Container } from 'react-bootstrap'
import NavbarComponent from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import '../css/FAQ.css'

function FAQ() {
  return (
    <Container fluid className="faq d-flex flex-column p-0 m-0">
      <NavbarComponent data={{ background: 'transparent' }} />
        <Container fluid className="h-100 d-flex flex-column align-items-center justify-content-center">
          <h1 className="text-light fw-bold">MEIR INFORMASJON KJEM SNART..</h1>
        </Container>
      <Footer />
    </Container>
  )
}

export default FAQ