import React from 'react'
import { Container, Row } from 'react-bootstrap'
import NavbarComponent from '../components/navbar/Navbar' 
import Footer from '../components/footer/Footer'
import '../css/SeatMap.css'

function SeatMap() {
  let counter = 1
  return (
    <Container fluid className="seatmap d-flex flex-column m-0 p-0">
        <NavbarComponent data={{ background: 'transparent' }} />
        <Container fluid className="d-flex flex-column align-items-center p-0 m-0">
          <div className="bg-light w-25 mx-auto d-flex mb-5" style={{ height: '15vh' }}>
            <h3 className="fw-bolder text-center m-auto">SCENE</h3>
          </div>
          {[0,1,2,3,4,5,6,7,8].map((row) => {
            return (
              <Row className="d-flex">
                {
                  row === 2 || row === 5 || row === 8 ?
                    [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((seat) => {
                      return (
                        <div style={{ width: '40px', height: '40px', background: 'transparent' }}>
                          &nbsp;
                        </div>
                      )
                    })
                    : 
                    [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((seat) => {
                      return ( 
                        <div>
                          <span className="text-light">Row: {row}, seat: {seat}</span>
                        </div>
                      )
                    })
                  }
              </Row>
            )
          })}
        </Container>
        <Footer />
    </Container>
  )
}

export default SeatMap