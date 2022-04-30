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
              til e-postadresse, samt kortinformasjon som vert skrive inn. 
            </p>
          </li>
        </ul>
        <h3 className="fw-bolder">Sletting og lagring av persondata</h3>
        <p className="mt-3">
          Data om personar som melder seg på eit arrangement vert lagra frå personen melder seg inn og inntil 30 dagar etter arrangementet. Seinast 30 dagar etter arrangementet vert all
          persondata om personen sletta. 
        </p>
        <h3 className="fw-bolder">Behandlingsansvarleg</h3>
        <p className="mt-3">
          Kvam E-sport er ansvarleg for behandlinga av personopplysningar sendt til KvammaLAN.
        </p>
        <p>
          Kontaktinformasjon: KvammaLAN v/ Kvam E-sport (<a href="mailto:kvammalan@kvam-esport.no">kvammalan@kvam-esport.no</a>)
        </p>
      </Container>
      <div className="mt-5" style={{ width: '85%', height: '1px', backgroundColor: '#000', alignSelf: 'center' }}></div>
      <Container fluid className="d-flex flex-column">
        <h1 className="fw-bolder mx-3 mt-5">Salgsvilkår</h1>
          <p className='mt-3'>
            Desse salsvilkåra gjelder for alt sal av billettar gjennom KvammaLAN (Kvam E-sport) til forbrukarane. Salsvilkåra utgjer saman med di bestilling, det samla 
            avtalegrunnlaget for kjøpet. Salsvilkåra og anna informasjon på kvammalan.kvam-esport.no er berre tilgjengeleg på norsk.
          </p>
          <p>
            KvammaLAN v/ Kvam E-sport sel billettar til lokale datatreff (LAN) arrangert av Kvam E-sport. På denne nettsida er det berre billettar som vert seld. 
          </p>
          <h4 className="fw-bolder">1) Partar</h4>
          <p className="mt-2">
            Selgjar er KvammaLAN v/ Kvam E-sport. Nedre Vik 4, 5610 Øystese. Registrert i Brønnøysundsregistera (www.brreg.no) med organisasjonsnummer: 926528238. Telefon: +47 986 63 863. E-post:
            kvammalan@kvam-esport.no. Vidare vil ein bruka "me" eller "oss" om selgjaren, KvammaLAN v/ Kvam E-sport. Kjøpar er den personen som føretar kjøpet og blir vidare nemnt "du", "deg", "din" eller "ditt".
          </p>
          <h4 className="fw-bolder">2) Betaling</h4>
          <p className="mt-2">
            Kjøpssummen kan betalast med anten bankkort eller via VIPPS. Me forbeholder retten til å nekta deg adgang til arrangementa dersom du har betalt for lite ifm. feil val av 
            billettype. 
          </p>
          <h4 className="fw-bolder">3) Levering</h4>
          <p className='mt-2'>
            Det skjer ingen fysisk levering frå oss. Etter kjøp vil du få tilsendt eit digitalt bevis på betalt deltakaravgift, samt ein QR-kode som er ditt deltakarbevis. Leveringa av 
            deltakarbevis og bevis på betalt deltakaravgift vert sendt på e-post oppgjeve i påmeldinga. Er du under 18 år vil e-posten verta sendt til den oppgjeve foresatten. Er du over 18 år
            vil e-posten verta sendt til den oppgjevne e-postadressa i påmeldinga. 
          </p>
          <h4 className="fw-bolder">4) Angrerett</h4>
          <p className="mt-2">
            Du har rett til å angra etter kjøp av billett(ar). Dette kan seinast skje 3 dagar før arrangementstart. Ved angring av kjøp må dette sendast skriftleg til oss på e-post
            (kvammalan@kvam-esport.no). Du vil då få refundert beløpet (minus betalingsavgift på 3%). Angrar du på kjøpet seinare enn 3 dagar før arrangementstart får du ikkje refundert
            beløpet.
          </p>
          <h4 className="fw-bolder">5) Konfliktløysning</h4>
          <p className="mt-2">
            Klager rettast til selgjar innan rimeleg tid (30 dagar). Partane skal forsøka å løysa eventuelle tvistar i minnelegheit. Dersom dette ikkje lukkast, kan kjøparen ta kontakt med
            Forbrukerrådet for mekling. 
          </p>
          <h4 className="fw-bolder">6) Endring av allereie kjøpt billett</h4>
          <p className="mt-2">
            Kjøparen har høve til å endra ein allereie kjøpt billett. Dette må spørjast om via e-post (kvammalan@kvam-esport.no). Dersom beløpet av den nye billetten er lågare enn den
            opprinnelege billetten, vil du verta refundert forskjellen i pris mellom desse billettane. Dersom beløpet av den nye billetten er høgare enn den opprinnelege billetten, er du nøydd
            til å betala forskjellen i pris mellom desse billettane. 
          </p>
          <p className="my-5">
            Spørsmål kan rettast til KvammaLAN v/ Kvam E-sport på e-post: <a href="mailto:kvammalan@kvam-esport.no">kvammalan@kvam-esport.no</a>
          </p>
      </Container>
    </Container>
  )
}

export default Privacy