import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import '../css/Event.css'
import NavbarComponent from '../components/navbar/Navbar'  
import Footer from '../components/footer/Footer' 
import { IoMdTime } from 'react-icons/io'
import { MdOutlinePlace } from 'react-icons/md'
import 'moment/locale/nn'
import eventimage from '../img/KvammaLAN.png'

function Event() {
  document.title = 'LAN | KvammaLAN'

  return (
    <Container fluid className="event d-flex flex-column p-0 m-0">
        <NavbarComponent data={{ background: 'transparent' }} />
          <Container style={{ backgroundColor: '#171a1c' }} fluid className="d-flex flex-column text-light p-0 m-0">
                <h1 className='fw-bolder mt-3 align-self-center text-center'>KvammaLAN 2022 | Haustferie</h1>
                <img
                  src={eventimage}
                  alt={'KvammaLAN 2022 | Haustferie'}
                  title={'KvammaLAN 2022 | Haustferie'}
                  style={{ 
                    objectFit: 'contain',
                    width: '50%',
                    height: 'auto',
                    alignSelf: 'center'
                  }}
                  className="mt-5 mb-4"
                />
                <p style={{ backgroundColor: '#171a1c' }} className="mx-5 text-light mt-3 w-75">
                  Er du klar for årets happening i gamingmiljøet i Kvam? Velkomen til KvammaLAN 2022! 10. oktober 2022 arrangerer Kvam E-sport eit "storLAN" i Øystese idrettshall. KvammaLAN er eit arrangement av og for born og unge i Kvam og nabokommunane. Dette er fyrste gongen KvammaLAN vert arrangert og me tek sikte på å arrangera fleire LAN fleire gongar i løpet av dei neste åra.
                </p>
                <p style={{ backgroundColor: '#171a1c' }} className="mx-5 text-light mt-3 w-75">
                  Arrangementet varer frå 10. oktober 2022 kl. 14:00 til 12. oktober 2022 kl. 14:00. Under arrangementet vert det mogleg å sova, samt kjøpa mat og drikke frå kiosken. Me har inga aldersgrense på arrangementet, men alle som deltar og er under 16 år, lyt få føresette til å senda inn skriftleg samtykke til <a href="mailto:kvammalan@kvam-esport.no">kvammalan@kvam-esport.no</a>. Samtykkeskjema finn du på våre nettsider (<a href="https://kvammalan.kvam-esport.no">https://kvammalan.kvam-esport.no</a>)
                </p>
                <p style={{ backgroundColor: '#171a1c' }} className="mx-5 text-light mt-3 w-75">
                  Meir informasjon finn du på vår nettside <a href="https://kvammalan.kvam-esport.no">https://kvammalan.kvam-esport.no</a>. Dersom du har nokre spørsmål anbefaler me å sjå gjennom vår nettside før du eventuelt sender ein e-post til oss. Me er òg å få tak i på Facebook og Instagram (Kvam E-sport). Dette er det lenkja til på KvammaLAN si nettside. 
                </p>
                <Container style={{ backgroundColor: '#171a1c', paddingLeft: '1.5%' }} fluid className="text-light d-flex flex-column my-4 m-0">
                  <div className="text-light" style={{ backgroundColor: '#171a1c' }}>
                    <IoMdTime size='2rem' />
                    <b>Start:</b>&nbsp;10.10.2022 kl. 14:00
                  </div>
                  <div className="text-light" style={{ backgroundColor: '#171a1c' }}>
                    <IoMdTime size='2rem' />
                    <b>Slutt:</b>&nbsp;12.10.2022 kl. 14:00
                  </div>
                  <div className="text-light" style={{ backgroundColor: '#171a1c' }}>
                    <MdOutlinePlace size='2rem' />
                    <b>Stad:</b>&nbsp;Øystese idrettshall (Holmane 20, 5610 Øystese)
                  </div>
                  <h4 className="fw-bolder text-light mt-5 ">Prisar</h4>
                  <ul className="text-light">
                    <li>Medlem: kr 250 ,-</li>
                    <li>Ikkje medlem: kr 400 ,-</li>
                  </ul>
                </Container>
                <Row className="m-0 p-0 w-100 d-flex justify-content-center align-items-center">
                  <Button className="w-25 m-5" onClick={() => window.location.href = 'https://arena360.no/events/80779/7247'} variant='primary'>
                    Meld deg på
                  </Button>
                </Row>            
          </Container>
        <Footer />
    </Container>
  )
}

export default Event