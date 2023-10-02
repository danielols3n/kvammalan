import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import NavbarComponent from '../components/navbar/Navbar'
import '../css/TimeSchedule.css'

function Information() {
  return (
    <Container fluid className="d-flex flex-column m-0 p-0 timeschedule" style={{ minHeight: '100vh' }}>
        <NavbarComponent data={{ background: 'transparent' }} />
        <Container fluid className="d-flex flex-column m-0 p-0 h-100">
            <h2 className="text-light m-auto fw-bolder">PRAKTISK INFORMASJON | KVAMMALAN 2023</h2>
        </Container>
        <Container fluid className="d-flex flex-column m-0 p-0 text-light mt-5">
          <Row className="w-75 m-0 p-0 mx-auto my-3">
            <p className='text-center w-100'>
              KvammaLAN 2023 går av stabelen 10. oktober kl. 16:00 og varer til 13. oktober kl. 14:00. Arrangementet føregår i Øystese idrettshall. Det vert kiosk, ulike aktivitetar og underhaldning i løpet av LAnet. 
              Det er òg satt av ein sal i idrettshallen til soving, men her må ein ta med eige utstyr til soving. 
            </p>
          </Row>
          <Row className="w-75 m-0 p-0 mx-auto my-3">
            <p className='text-center w-100'>
              Før du kjem på LAN er det lurt å oppdatera alle spela du tenkjer du vil spela. Når hundre ungdomar skal oppdatera spela sine samtidig, vert det fort fullt på internettlinja vår, 
              så ved å oppdatera spela dine før du kjem, gjer du opplevinga betre for alle. Det er òg lurt å lada alt trådlaust utstyr før du kjem.
            </p>
          </Row>
          <Row className="w-75 m-0 p-0 mx-auto my-3">
            <p className='text-center w-100'>
              Pga. problem med påmeldingsystemet vårt har ikkje alle fått automatisk bekreftelse på kjøpt billett. Dette har vorte ordna og alle har fått tilsendt billett (QR-kode) per dags dato (2. oktober 2023). 
              QR-koden er billetten din og må visast kvar gong du anten kjem inn i bygget eller forlatar bygget. Når du kjem på LANet viser du denne til ein av vaktane ved inngangen, då får me registrert at du er sjekka inn. 
              Viss du vil gå ein tur på butikken eller av andre grunnar må forlata bygget, må du òg visa QR-koden. Dette er fordi me må vita kor mange som er i bygget til ei kvar tid i tilfelle brann eller anna grunn til evakuering. Dette er veldig viktig!!!
            </p>
          </Row>
          <Row className="w-75 m-0 p-0 mx-auto my-3">
            <p className='text-center w-100'>
              Under finn du ei pakkeliste som me syntest er fin å ta utgangspunkt i før du reiser på LAN. Denne lista er ikkje komplett, så her må du sjølv finna ut kva du vil ha med deg eller ikkje. Kvar deltakar får ein pult og ein stol (vanleg stablestol), samt eit uttak i 
              ein av våre internettswitchar og ein stikkontakt. Skøyteleidning og internettkabel må du ta med sjølv, dersom du ikkje har avtalt lån med oss på førehand.
            </p>
          </Row>
          <Row className="w-75 m-0 p-0 mx-auto my-5">
            <h2 className='text-start fw-bolder'>HUGSELISTE</h2>
            <ul className="todo-list" style={{ listStyleType: 'circle' }}>
              <li>Noko å spela på (konsoll, stasjonær pc, laptop etc.)</li>
              <li>Skjerm(ar)</li>
              <li>Alt av nødvendig utstyr for å spela (tastatur, mus, headset, musematte, ladarar etc.)</li>
              <li>Nettverkskabel (nokre kan sitja så langt som 15 meter vekke frå næraste nettverkspunkt)</li>
              <li>Stol (om du ynskjer. Me har stablestolar som du òg kan bruka)</li>
              <li>Skøyteleidning(ar)</li>
              <li>Mobil og ladar</li>
              <li>Drikkeflaske med vatn (vatn får du gratis hjå oss òg. Vatn er godt!)</li>
              <li>Pengar om du ynskjer å handla i kiosken</li>
              <li>Sovepose, liggjeunderlag og pute (om du skal sova på LANet)</li>
            </ul>
          </Row>
        </Container>
    </Container>
  )
}

export default Information