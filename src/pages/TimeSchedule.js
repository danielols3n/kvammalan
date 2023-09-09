import React from 'react'
import { Card, Container } from 'react-bootstrap'
import NavbarComponent from '../components/navbar/Navbar'
import '../css/TimeSchedule.css'

function TimeSchedule() {
    
  return (
    <Container fluid className="d-flex flex-column m-0 p-0 timeschedule" style={{ minHeight: '100vh' }}>
        <NavbarComponent data={{ background: 'transparent' }} />
        <Container fluid className="d-flex flex-column m-0 p-0 h-100 mb-5">
          <h1 className="fw-bolder text-center w-100 mt-3 text-light">PROGRAM</h1>
          <p className="text-center text-light fw-bolder mx-auto mt-3 w-75">
            <i>Med forbehold om endringar i programmet</i>
          </p>
          <Card className="w-75 mx-auto mt-3">
            <Card.Header>TYSDAG 10. OKTOBER 2023</Card.Header>
            <Card.Body>
              <ul style={{ listStyle: 'none' }}>
                <li><b>KL. 16:00</b> Dørene opnar</li>
                <li><b>KL. 17:00</b> Offisiell opning</li>
                <li><b>KL. 18:00</b> Racingkonkurranse med Måge Motorsport - Klarar du slå ein rallybilsjåfør i Forza Horizon 5?</li>
                <li><b>KL. 19:30</b> Mario Kart</li>
                <li><b>KL. 23:00</b> Ro i salen</li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="w-75 mx-auto mt-3">
            <Card.Header>ONSDAG 11. OKTOBER 2023</Card.Header>
            <Card.Body>
              <ul style={{ listStyle: 'none' }}>
                <li><b>KL. 13:00</b> Uteaktivitet (EvoTag eller Boblefotball)</li>
                <li><b>KL. 15:30</b> Beat Saber (VR)</li>
                <li><b>KL. 15:30</b> Minecraftrebus</li>
                <li><b>KL. 17:00</b><i> Dørene opnar for publikum</i></li>
                <li><b>KL. 17:30</b> Minecraftturnering</li>
                <li><b>KL. 19:00</b> FIFA-turnering</li>
                <li><b>KL. 21:00</b><i> Dørene stengjer for publikum</i></li>
                <li><b>KL. 00:00</b> Ro i salen</li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="w-75 mx-auto mt-3">
            <Card.Header>TORSDAG 12. OKTOBER 2023</Card.Header>
            <Card.Body>
              <ul style={{ listStyle: 'none' }}>
                <li><b>KL. 10:00</b> Byggekonkurransen i Minecraft startar (meir informasjon kjem)</li>
                <li><b>KL. 10:00</b> Miniturnering i Fortnite</li>
                <li><b>KL. 13:00</b> Uteaktivitet (EvoTag eller Boblefotball)</li>
                <li><b>KL. 17:00</b><i> Dørene opnar for publikum</i></li>
                <li><b>KL. 17:30</b> Fortniteturnering</li>
                <li><b>KL. 20:00</b> Kåringar - Minecraft byggekonkurranse</li>
                <li><b>KL. 20:30</b> Gamingquiz for ALLE!</li>
                <li><b>KL. 21:00</b><i> Dørene stengjer for publikum</i></li>
                <li><b>KL. 00:00</b> Ro i salen</li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="w-75 mx-auto mt-3">
            <Card.Header>FREDAG 13. OKTOBER 2023</Card.Header>
            <Card.Body>
              <ul style={{ listStyle: 'none' }}>
                <li><b>KL. 10:00</b> Miniturnering - Forza Horizon 5</li>
                <li><b>KL. 12:00</b> Premieutdeling</li>
                <li><b>KL. 14:00</b> Dørene stengjer. Me sjåast til neste år!</li>
              </ul>
            </Card.Body>
          </Card>
        </Container>
    </Container>
  )
}

export default TimeSchedule