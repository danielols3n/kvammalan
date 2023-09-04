import React, { useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import NavbarComponent from '../components/navbar/Navbar'
import '../css/TimeSchedule.css'

function Information() {
    const navigate = useNavigate()
    
  return (
    <Container fluid className="d-flex flex-column m-0 p-0 timeschedule" style={{ minHeight: '100vh' }}>
        <NavbarComponent data={{ background: 'transparent' }} />
        <Container fluid className="d-flex flex-column m-0 p-0 h-100">
            <h2 className="text-light m-auto fw-bolder">Informasjon kjem snart!</h2>
        </Container>
    </Container>
  )
}

export default Information