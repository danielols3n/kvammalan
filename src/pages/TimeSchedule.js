import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import NavbarComponent from '../components/navbar/Navbar'
import '../css/TimeSchedule.css'

function TimeSchedule() {
    const navigate = useNavigate()
    
  return (
    <Container fluid className="d-flex flex-column m-0 p-0 timeschedule" style={{ minHeight: '100vh' }}>
        <NavbarComponent data={{ background: 'transparent' }} />
        <Container fluid className="d-flex flex-column m-0 p-0 h-100">
            <h2 className="text-light m-auto fw-bolder">Program kjem snart!</h2>
        </Container>
    </Container>
  )
}

export default TimeSchedule