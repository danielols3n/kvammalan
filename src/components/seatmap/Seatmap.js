import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import SeatPicker from 'react-seat-picker'
import { db } from '../../Firebase.js'
import { collection, getDocs } from 'firebase/firestore'
import { Button, Container } from 'react-bootstrap'
import { useNavigate, useSearchParams } from 'react-router-dom'
import './Seatmap.css'

function Seatmap() {
    const [loading, setLoading] = useState(false)
    const [rows, setRows] = useState([])
    const [seat, setSeat] = useState(null)

    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    const addSeatCallback = async ({ row, number, id }, addCb) => {
        setLoading(true)
            await new Promise(resolve => setTimeout(resolve, 1500))
            console.log(`Added seat ${number}, row ${row}, id ${id}`)
            const newTooltip = `${number}`
            addCb(row, number, id, newTooltip)
            setSeat(number)
        setLoading(false)
    }

    const removeSeatCallback = async ({ row, number, id }, removeCb) => {
        setLoading(true)
            await new Promise(resolve => setTimeout(resolve, 1500))
            const newTooltip = ['A', 'B', 'C'].includes(row) ? null : ''
            removeCb(row, number, newTooltip)
            setSeat(null)
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        const colRef = collection(db, 'events', 'kvammalan2023', 'registrations')

        const temp = []
        let rowCount = 1

        getDocs(colRef).then((snapshot) => {
            [1,2,3,4,5,6,7,8].forEach((row) => {
                const tempRow = []
                if (row === 3 || row === 6) {
                    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].forEach((seat) => {
                        tempRow.push(null)
                    })
                } else {
                    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].forEach((seat) => {
                        if (seat < 10) {
                            const currentSeat = rowCount + `0` + seat
                            if (snapshot.docs.some(document => document.data().seatId === currentSeat)) {
                                console.log('Reserved')
                                tempRow.push({
                                    id: rowCount + `0` + seat,
                                    number: rowCount + `0` + seat,
                                    isReserved: true
                                })
                            } else {
                                tempRow.push({
                                    id: rowCount + `0` + seat,
                                    number: rowCount + `0` + seat,
                                    isReserved: false
                                })
                            }
                        } else {
                            const currentSeat = `${rowCount}` + `${seat}`
                            if (snapshot.docs.some(document => document.data().seatId === currentSeat)) {
                                tempRow.push({
                                    id: `${rowCount}` + `${seat}`,
                                    number: `${rowCount}` + `${seat}`,
                                    isReserved: true
                                })
                            } else {
                                tempRow.push({
                                    id: `${rowCount}` + `${seat}`,
                                    number: `${rowCount}` + `${seat}`,
                                    isReserved: false
                                })
                            }
                        }
                    })
                    rowCount += 1
                }
                temp.push(tempRow)
            })
            setRows(temp)
            setLoading(false)
        })
    }, [])
      
  return (
    <Container fluid className="seatmap-container d-flex flex-column">
        <SeatPicker
            addSeatCallback={addSeatCallback}
            removeSeatCallback={removeSeatCallback}
            rows={rows}
            maxReservableSeats={1}
            alpha
            visible
            selectedByDefault
            loading={loading}
          />
          <Container fluid className="d-flex flex-column">
            <Container fluid className="d-flex m-auto align-items-center justify-content-center mt-5">
                <Button className="m-2" variant='secondary' onClick={() => navigate('/kvammalan')}>AVBRYT</Button>
                <Button className="m-2" variant='primary' onClick={() => navigate(`/kvammalan/checkout/participant-info?ticketId=${searchParams.get('ticketId')}&seatId=${seat}`)}>NESTE</Button>
            </Container>
          </Container>
    </Container>
  )
}

export default Seatmap