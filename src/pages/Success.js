import React from 'react'
import { Button, Container, NavLink } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { BsCheckCircle } from 'react-icons/bs'

function Success() {
    const [searchParams] = useSearchParams()
  return (
    <Container fluid className="d-flex flex-column align-items-center">
        <Container fluid className="d-flex flex-column align-items-center justify-content-center">
            <BsCheckCircle size='15rem' color='green' />
            <h3 className="fw-bolder mt-5">Påmeldinga var vellukka</h3>
            <p className="text-center w-75 mt-3">
                Du skal ha fått ein e-post med meir utfyllande informasjon. Om du er under 18 år er det den
                registrerte foresatten som får e-posten. Om du har nokre spørsmål, ikkje vèr redd for å ta kontakt
                med oss på <a href="mailto:kvammalan@kvam-esport.no">kvammalan@kvam-esport.no</a>.
            </p>
            <NavLink as={Button} href='/' type='variant' className="w-25 text-light">
                Tilbake til framsida
            </NavLink>
        </Container>
    </Container>
  )
}

export default Success