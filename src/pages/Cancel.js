import React from 'react'
import { Button, Container, NavLink } from 'react-bootstrap'
import { GiCancel } from 'react-icons/gi'

function Cancel() {

  document.title = 'Kansellert | KvammaLAN'
  return (
    <Container style={{ minHeight: '80vh' }} fluid className="d-flex flex-column justify-content-center align-items-center">
      <Container fluid className="d-flex flex-column justify-content-center align-items-center">
        <GiCancel size="15rem" color="red" />
        <h3 className="fw-bolder mt-5">Påmeldinga vart kansellert</h3>
        <p className="text-center w-75 mt-3">
            Påmeldinga vart kansellert. Dette kan skuldast at betalinga vart kansellert av deg eller ein feil i systemet.
            Om du ikkje gjorde dette med vilje, prøv på nytt om nokre få minutt. 
            Viss problemet vedvarar, ta kontakt med oss på <a href="mailto:kvammalan@kvam-esport.no">kvammalan@kvam-esport.no</a>.
        </p>
        <NavLink as={Button} href='/' type='variant' className="w-50 text-light">
            Tilbake til framsida
        </NavLink>
      </Container>
    </Container>
  )
}

export default Cancel