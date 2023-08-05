import React from 'react'
import { useState } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../Firebase' 
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate()

    const submit = (event) => {
        event.preventDefault()

        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            navigate('/kvammalan/admin')
        }).catch(error => console.error(error))
    }

  return (
   <Container fluid className="d-flex flex-column m-0 p-0">
    <h1 className="text-center fw-bolder mt-5">ADMIN - LOGIN</h1>
    <Container fluid className="d-flex flex-column mt-5">
        <Form className="w-75 m-auto mt-5" onSubmit={submit}>
            <Row className="w-100">
                <Form.Group as={Col} lg={12}>
                    <Form.FloatingLabel label='E-POSTADRESSE'>
                        <Form.Control value={email} onChange={e => setEmail(e.target.value)} type='email' />
                    </Form.FloatingLabel>
                </Form.Group>
            </Row>
            <Row className="w-100 mt-5">
                <Form.Group as={Col} lg={12}>
                    <Form.FloatingLabel label='PASSORD'>
                        <Form.Control value={password} onChange={e => setPassword(e.target.value)} type='password' />
                    </Form.FloatingLabel>
                </Form.Group>
            </Row>
            <Row className="w-100 mt-5">
                <Form.Group as={Col} lg={3} className="mx-auto">
                    <Button className="w-100" variant='primary' type='submit'>LOGIN</Button>
                </Form.Group>
            </Row>
        </Form>
    </Container>
   </Container>
  )
}

export default AdminLogin