import { onAuthStateChanged } from 'firebase/auth'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { auth, db } from '../Firebase'
import { useNavigate } from 'react-router-dom'
import AdminNavbar from '../components/admin-navbar/AdminNavbar'
import SeatPicker from 'react-seat-picker'
import moment from 'moment'

function TimeSchedule() {
    const navigate = useNavigate()
    


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const docRef = doc(db, 'users', user.uid)

                getDoc(docRef).then((document) => {
                    if (document.data().admin === true) {
                        console.log('Admin access granted')
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
            
        </Container>
    </Container>
  )
}

export default TimeSchedule