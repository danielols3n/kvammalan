import { onAuthStateChanged } from 'firebase/auth'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { auth, db } from '../../Firebase'
import { useNavigate } from 'react-router-dom'
import AdminNavbar from '../../components/admin-navbar/AdminNavbar'
import SeatPicker from 'react-seat-picker'

function AdminLanding() {
    const navigate = useNavigate()
    const [registrations, setRegistrations] = useState([])
    const [chartData, setChartData] = useState(null)
    const [loading, setLoading] = useState(true)

    const [rows, setRows] = useState([])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const docRef = doc(db, 'users', user.uid)

                getDoc(docRef).then((document) => {
                    if (document.data().admin === true) {
                        console.log('Admin access granted')

                            setLoading(true)
                            const colRef = collection(db, 'events', 'kvammalan2023', 'registrations')

                            const temp = []
                            let rowCount = 1

                            getDocs(colRef).then((snapshot) => {
                                console.log(registrations)
                                setRegistrations(snapshot.docs)

                                [1,2,3,4,5,6,7,8].forEach((row) => {
                                    const tempRow = []
                                    if (row === 3 || row === 6) {
                                        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].forEach(() => {
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
                        }).catch(error => console.error(error))
                    } else {
                        navigate('/kvammalan/admin/login')
                    }
                }).catch(error => console.error(error))
            } else {
                navigate('/kvammalan/admin/login')
            }
        })
    }, [])
  return (
    <Container fluid className="d-flex flex-column m-0 p-0">
        <AdminNavbar />
        <Container fluid className="d-flex flex-column m-0 p-0">
            <Row className="w-100 d-flex m-0 p-0">
                <Col lg={8} className="d-flex flex-column m-0 p-0">
                    
                </Col>
                <Col className="m-0 p-0" style={{ borderTop: '1px solid lightgray', borderLeft: '1px solid lightgray', borderBottom: '1px solid lightgray' }} lg={4}>
                    <Row className="w-100 m-0 p-0 d-flex flex-column mt-5">
                        <h2 className="fw-bolder text-center mx-auto">KvammaLAN 2023</h2>
                        <span className="text-center mx-auto mt-2">10. - 13. oktober</span>
                        <span className="text-center mx-auto mt-2">Stad: Øystese idrettshall</span>
                    </Row>
                    <Row className="w-100 m-0 p-0 d-flex mt-5">
                        <img src={require('../../img/logo.png')} className="m-auto" style={{ width: '75%', height: 'auto', objectFit: 'contain' }} alt='Kvam E-sport logo' />
                    </Row>
                    <Row className="w-100 m-0 p-0 mt-3">
                        <span className="mx-auto text-center mt-4">Antal deltakarar påmeldt: <b>{registrations.length}</b></span>
                        <span className="mx-auto text-center mt-4">Antal LAN-deltakarar påmeldt: <b>{registrations.filter(item => item.data().ticketId === 'Medlem').length + registrations.filter(item => item.data().ticketId === 'Ikkje-medlem').length}</b></span>
                        <span className="mx-auto text-center mt-4 mb-4">Antal publikum påmeldt: <b>{registrations.filter(item => item.data().ticketId === 'Publikum').length}</b></span>
                    </Row>
                </Col>
            </Row>
            <Row className="w-100 d-flex m-0 p-0">
                {rows.length !== 0 && <SeatPicker
                    addSeatCallback={() => console.log('addSeat')}
                    removeSeatCallback={() => console.log('removeSeat')}
                    rows={rows}
                    maxReservableSeats={1}
                    alpha
                    visible
                    selectedByDefault
                    loading={loading}
                />}
            </Row>
        </Container>
    </Container>
  )
}

export default AdminLanding