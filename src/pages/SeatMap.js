import React from 'react'
import { Container, Row } from 'react-bootstrap'
import NavbarComponent from '../components/navbar/Navbar' 
import Footer from '../components/footer/Footer'
import '../css/SeatMap.css'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../Firebase'

function SeatMap() {
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
                      let availability = true
                      const colRef = collection(db, 'events', 'kvammalan2023', 'reservations')

                      if (seat < 10) {
                        let seatNumber = rowCount + `0` + seat
                        const q = query(colRef, where('seat' , '==', Number(seatNumber)))
                        
                        getDocs(q).then((querySnapshot) => {
                          console.log(querySnapshot.empty, seatNumber)
                          if (querySnapshot.empty === true) {
                            availability = true
                          } else {
                            availability = false
                          }
                        })
                        
                        return ( 
                          <div onClick={availability === true ? checkout : null} className={availability === true ? 'p-3 seat-avail' : 'p-3 seat-taken'} style={availability === true ? { width: '4rem', cursor: 'pointer' } : { width: '4rem', backgroundColor: 'red' }}>
                            <span className='text-light'>{rowCount}0{seat}</span>
                          </div>
                        )
                      } else {
                        return ( 
                          <div onClick={availability === true ? checkout : null} className={availability === true ? 'p-3 seat-avail' : 'p-3 seat-taken'} style={availability === true ? { width: '4rem', cursor: 'pointer' } : { width: '4rem', backgroundColor: 'red' }}>
                            <span className='text-light'>{rowCount}{seat}</span>
                          </div>
                        )
                      }
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