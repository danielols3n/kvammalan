import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import NavbarComponent from '../components/navbar/Navbar' 
import Footer from '../components/footer/Footer'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../Firebase'
import Seatmap from '../components/seatmap/Seatmap'
import '../css/SeatMap.css'

function SeatMap() {
  let seatNumber
  let rowCount = 0

  const checkout = () => {
    console.log('Checkout')
  }

  return (
    <Container fluid className="seatmap d-flex flex-column m-0 p-0">
        <NavbarComponent data={{ background: 'transparent' }} />
        <Container fluid className="d-flex flex-column align-items-center p-0 m-0 mb-5">
          <div className="bg-light w-25 mx-auto d-flex mb-5" style={{ height: '15vh' }}>
            <h3 className="fw-bolder text-center m-auto">SCENE</h3>
          </div>
          <Seatmap />
        </Container>
        <Footer />
    </Container>
  )
}

export default SeatMap