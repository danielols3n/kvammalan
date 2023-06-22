import React from 'react'
import './Seatmap.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../../Firebase'

function Seatmap() {
    const [occupied, setOccupied] = useState([])
    let rowCount = 0

    const checkout = () => {
        console.log('Checkout')
    }

    useEffect(() => {
        const colRef = collection(db, 'events', 'kvammalan2023', 'reservations')

        getDocs(colRef).then((snapshot) => {
            const temp = []
            snapshot.forEach(doc => {
                temp.push(doc.data.seat)
            })
            setOccupied(temp)
        })
    }, [occupied])

    const MapComponent = (seat, row) => {
        if (seat < 10) {
            let seatNumber = row + `0` + seat
            
            if (occupied.includes(Number(seatNumber))) {
                return (
                    <div className={'p-3 seat-taken'} style={{ width: '4rem', backgroundColor: 'red' }}>
                        <span className='text-light'>{rowCount}0{seat}</span>
                    </div>
                )
            } else {
                <div onClick={checkout} className={'p-3 seat-avail'} style={{ width: '4rem', cursor: 'pointer' }}>
                    <span className='text-light'>{rowCount}0{seat}</span>
                </div>
            }
        } else {

        }
    }

    return (
        <table>
            <tbody>
                {[1,2,3,4,5,6,7,8].map((row) => {
                    if (row === 3 || row === 6) {
                        
                    } else {
                        rowCount += 1
                    }
                    return(
                        <tr className="d-flex row">
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
                                    <MapComponent seat={seat} row={row} />
                                })
                            }
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Seatmap