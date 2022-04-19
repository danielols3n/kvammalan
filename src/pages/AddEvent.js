import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../css/AddEvent.css'
import { auth } from '../firebase/config'

function AddEvent() {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                navigate('/logg-inn', { replace: true })
            }
        })
    }, [])

  return (
    <Container fluid className="d-flex flex-column p-0 m-0">

    </Container>
  )
}

export default AddEvent