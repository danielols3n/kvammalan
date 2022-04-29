import React from 'react'
import { Container } from 'react-bootstrap'

function Privacy() {
  return (
    <Container fluid className="d-flex flex-column p-0 m-0">
      <h2 className='fw-bolder mx-4 mt-4'>Personvernerklæring</h2>
      <Container fluid className="d-flex flex-column">
        <p className="mt-3">
          Kvam E-sport nyttar nokre tenester for å forbetra brukaropplevinga og for å samla inn data. Under vil du
          finna ei oversikt over dei ulike tenestane som vert nytta på denne sida. 
        </p>
        <h4 className="fw-bolder mt-3">Persondata som vert lagra</h4>
        <p className="mt-2">
          Ved påmelding til arrangement via denne nettsida, vert fylgjande data samla inn om deg:
        </p>
        <ul>
          <li><b>Namn:</b>&nbsp;Namn vert samla inn for å sjekka om du er medlem eller ei.</li>
          <li><b>E-postadresse:</b>&nbsp;E-postadresse vert samla inn for å kunne kontakta deg om dette er naudsynt. </li>
          <li><b>Telefonnummer:</b>&nbsp;Telefonnummer vert samla inn for å ha ein kontaktmoglegheit i tillegg til e-post.</li>
          <li><b>Fødselsdato:</b>&nbsp;Fødselsdato vert samla inn for å sjekka om du er under 18 år gamal.</li>
          <li><b>Namn på foresatt:</b>&nbsp;Om du er under 18 år er du nøydd til å skriva opp ein foresatt som skal stå som ansvarleg.</li>
          <li><b>E-postadresse til foresatt:</b>&nbsp;Om du er under 18 år er du nøydd til å skriva opp ein foresatt som skal stå som ansvarleg.</li>
          <li><b>Telefonnummer til foresatt:</b>&nbsp;Om du er under 18 år er du nøydd til å skriva opp ein foresatt som skal stå som ansvarleg.</li>
        </ul>
        <h3 className="fw-bolder mt-3">Databehandlarar</h3>
        <p className="mt-2">
          Kvam E-sport nyttar fylgjande tenester for å behandla data på vegne av Kvam E-sport.
        </p>
        <ul style={{ listStyle: 'none', marginLeft: 0 }}>
          <li style={{ marginLeft: 0 }}>
            <h4 className="mt-3 fw-bolder">Firebase</h4>
            <p className="mt-2">
              <a href="https://firebase.google.com">Firebase</a> vert nytta til å lagra data om kvar einskild deltakar.
              Her vert namn, e-post, telefonnummer, fødselsdato og informasjon om foresatt (om oppgjeve) lagra. 
            </p>
          </li>
          <li style={{ marginLeft: 0 }}>
            <h4 className="mt-3 fw-bolder">Stripe</h4>
            <p className="mt-2">
              <a href="https://stripe.com">Stripe</a> vert nytta til betaling av deltakaravgift. Denne tenesta har tilgang
              til e-postadresse, samt kortinformasjon som vert skrive inn. Kortinformasjon vert ikkje lagra.
            </p>
          </li>
        </ul>
      </Container>
    </Container>
  )
}

export default Privacy