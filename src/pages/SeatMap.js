import React from 'react'
import { Container, Row } from 'react-bootstrap'
import NavbarComponent from '../components/navbar/Navbar' 
import Footer from '../components/footer/Footer'
import '../css/SeatMap.css'

function SeatMap() {
  let rowCount = 0

  const checkout = () => {
    console.log('Checkout')
  }

  return (
    <Container fluid className="seatmap d-flex flex-column m-0 p-0">
        <NavbarComponent data={{ background: 'transparent' }} />
        <Container fluid className="d-flex flex-column align-items-center p-0 m-0">
          <div className="bg-light w-25 mx-auto d-flex mb-5" style={{ height: '15vh' }}>
            <h3 className="fw-bolder text-center m-auto">SCENE</h3>
          </div>
          {[1,2,3,4,5,6,7,8].map((row) => {
            if (row === 3 || row === 6) {

            } else {
              rowCount += 1
            }
            return (
              <Row className="d-flex">
                {
                  row === 3 || row === 6 ?
                    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((seat) => {
                      return (
                        <div style={{ width: '40px', height: '40px', background: 'transparent' }}>
                          &nbsp;
                        </div>
                      )
                    })
                    : 
                    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((seat) => {
                      return ( 
                        <div onClick={true === true ? checkout : null} className={true === true ? 'p-3 seat-avail' : 'p-3'} style={true === true ? { width: '4rem', cursor: 'pointer' } : { width: '4rem', backgroundColor: 'red' }}>
                          {seat < 10 ? <span className='text-light'>{rowCount}0{seat}</span> : <span className='text-light'>{rowCount}{seat}</span>}
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