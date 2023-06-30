import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import SeatPicker from 'react-seat-picker'
import { db } from '../../Firebase.js'
import { collection, getDocs } from 'firebase/firestore'

function Seatmap() {
    const [loading, setLoading] = useState(false)
    const [rows, setRows] = useState([])

    const addSeatCallback = async ({ row, number, id }, addCb) => {
        setLoading(true)
            await new Promise(resolve => setTimeout(resolve, 1500))
            console.log(`Added seat ${number}, row ${row}, id ${id}`)
            const newTooltip = `tooltip for id-${id} added by callback`
            addCb(row, number, id, newTooltip)
        setLoading(false)
    }

    const removeSeatCallback = async ({ row, number, id }, removeCb) => {
        setLoading(true)
            await new Promise(resolve => setTimeout(resolve, 1500))
            console.log(`Removed seat ${number}, row ${row}, id ${id}`)
            const newTooltip = ['A', 'B', 'C'].includes(row) ? null : ''
            removeCb(row, number, newTooltip)
        setLoading(false)
    }

    useEffect(() => {
        const colRef = collection(db, 'events', 'kvammalan2023', 'reservations')

        getDocs(colRef).then((snapshot) => {
            const temp = []

            [1,2,3,4,5,6,7,8].forEach((row) => {
                const tempRow = []
                let rowCount = 1
                if (row === 3 || row === 6) {
                    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].forEach((seat) => {
                        tempRow.push(null)
                    })
                } else {
                    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].forEach((seat) => {
                        if (seat < 10) {
                            if (snapshot.docs.includes(Number(rowCount + `0` + seat))) {
                                tempRow.push({
                                    id: rowCount + `0` + seat,
                                    number: rowCount + `0` + seat,
                                    isReserved: true
                                })
                            } else {
                                tempRow.push({
                                    id: rowCount + `0` + seat,
                                    number: rowCount + `0` + seat,
                                    isReserverd: false
                                })
                            }
                        } else {
                            if (snapshot.docs.includes(Number(rowCount + seat))) {
                                tempRow.push({
                                    id: rowCount + seat,
                                    number: rowCount + seat,
                                    isReserved: true
                                })
                            } else {
                                tempRow.push({
                                    id: rowCount + seat,
                                    number: rowCount + seat,
                                    isReserverd: false
                                })
                            }
                        }
                        rowCount += 1
                    })
                }
                temp.push(tempRow)
                console.log(temp)
            })
            setRows(temp)
        })
    }, [])
      
  return (
    <div>
        <SeatPicker
            addSeatCallback={addSeatCallback}
            removeSeatCallback={removeSeatCallback}
            rows={rows}
            maxReservableSeats={3}
            alpha
            visible
            selectedByDefault
            loading={loading}
            tooltipProps={{multiline: true}}
          />
    </div>
  )
}

export default Seatmap