import React from 'react'
import { Container } from 'react-bootstrap'
import NavbarComponent from '../components/navbar/Navbar' 
import Footer from '../components/footer/Footer'
import '../css/SeatMap.css'

function SeatMap() {
  return (
    <Container fluid className="seatmap d-flex flex-column m-0 p-0">
        <NavbarComponent data={{ background: 'transparent' }} />
        <Container fluid className="d-flex flex-column p-0 m-0">

        </Container>
        <Footer />
    </Container>
  )
}

export default SeatMap