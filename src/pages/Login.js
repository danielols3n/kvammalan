import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { signInUser } from '../firebase/functions'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
    <Container fluid className="d-flex flex-column">
        <h1 className="fw-bolder align-self-center mt-5">LOGG INN</h1>
        <Form className="w-75 align-self-center" onSubmit={signInUser(email, password)}>
            <Form.Group>
                <Form.Label>E-postadresse</Form.Label>
                <Form.Control type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='E-postadresse' />
            </Form.Group>
            <Form.Group>
                <Form.Label>Passord</Form.Label>
                <Form.Control type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='E-postadresse' />
            </Form.Group>
            <Button className="mt-3" type='submit' variant='primary'>
                Logg inn
            </Button>
        </Form>
    </Container>
  )
}

export default Login