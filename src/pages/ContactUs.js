import React from 'react'
import { Container } from 'react-bootstrap'
import NavbarComponent from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import '../css/ContactUs.css'

function ContactUs() {
  return (
    <Container fluid className="contactus d-flex flex-column p-0 m-0">
      <NavbarComponent data={{ background: 'transparent' }} />
        <Container fluid className="h-100 d-flex flex-column ">
          <h1 className="fw-bolder text-light mt-3 mx-3">KONTAKT OSS</h1>
          <p className="mt-3 mx-4 w-75 text-light fw-bold">
            Har du nokre spørsmål eller ynskjer du å kontakta oss? Då er du kome til rett plass!
          </p>
          <h4 className="text-light fw-bold mt-3">E-post:</h4><a className="text-primary" href="mailto:kvammalan@kvam-esport.no">kvammalan@kvam-esport.no</a>
          <h4 className="text-light fw-bold mt-3">Telefon:</h4><a className="text-primary" href="tel:98663863">98663863 (Daniel Olsen)</a>
          <h4 className="text-light fw-bold mt-3">Besøksadresse:</h4><p className="text-light">Nedre Vik 4, 5610 Øystese</p>
          <p className="mt-3 text-light">
            Du finn oss òg på Facebook og Instagram. Lenkje til dette finst nedst på sida.
          </p>
        </Container>
      <Footer />
    </Container>
  )
}

export default ContactUs