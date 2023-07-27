import React, { useState, useEffect } from 'react'
import NavbarComponent from '../components/navbar/Navbar'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { db } from '../Firebase'
import { query, collection, where, getDocs } from 'firebase/firestore'
import '../css/Confirmation.css'
import axios from 'axios'

function Confirmation() {
    const [participant, setParticipant] = useState(null)
    const [searchParams] = useSearchParams()

    const navigate = useNavigate()

    const games = ['Fortnite', 'Counter-Strike: Global Offensive', 'Valorant', 'Forza Horizon 5', 'Minecraft', 'Rocket League', 'League of Legends']

    useEffect(() => {
        const q = query(collection(db, 'events', 'kvammalan2023', 'registrations'), where('reservationId', '==', searchParams.get('reservationId')))

        getDocs(q).then((querySnapshot) => {
            const document = querySnapshot.docs[0]

            setParticipant(document.data())
        }).catch(error => console.error(error))
    }, [])

    const payment = () => {
        console.log('Payment')
        axios.post('https://kvam-e-sport-or-api.olsendaniel04.repl.co/', {
            ticketId: searchParams.get('ticketId')
        }).then((res)=> {
            console.log(res)
            window.location.href = res.url
        }).catch(error => console.error(error))
    }

  return (
    <Container fluid className="confirmation d-flex flex-column m-0 p-0">
        <NavbarComponent data={{ background: 'transparent' }} />
        {participant !== null ? 
            <Container fluid className="d-flex flex-column align-items-center p-0 m-0">
            <h2 className="text-light fw-bolder mt-3">BEKREFTELSE AV DETALJAR</h2>
            <p className="text-light text-center mt-2">
                Sjekk under at alle detaljar stemmer. Dersom noko ikkje stemmer, trykk avbryt og gå gjennom bestillinga på nytt.
            </p>
            <Form className="checkout-form mt-5">
                <Row className="w-100 my-3">
                    <Form.Group controlId='formName' as={Col} lg={6}>
                    <Form.FloatingLabel label='NAMN'>
                        <Form.Control placeholder='NAMN' defaultValue={participant.name} readOnly type='text' disabled />
                    </Form.FloatingLabel>
                    </Form.Group>
                    <Form.Group controlId='formPhone' as={Col} lg={6}>
                    <Form.FloatingLabel label='TELEFONNUMMER'>
                        <Form.Control placeholder='TELEFONNUMMER' defaultValue={participant.phone} readOnly type='tel' disabled />
                    </Form.FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="w-100 my-3">
                    <Form.Group controlId='formEmail' as={Col} lg={12}>
                    <Form.FloatingLabel label='E-POSTADRESSE'>
                        <Form.Control placeholder='E-POSTADRESSE' defaultValue={participant.email} readOnly type='email' disabled />
                    </Form.FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="w-100">
                    &nbsp;
                </Row>
                <Row className="w-100 my-3 mt-5">
                    <Form.Group controlId="formAddress" as={Col} lg={12}>
                    <Form.FloatingLabel label='ADRESSE'>
                        <Form.Control placeholder='ADRESSE' defaultValue={participant.address} readOnly type='text' disabled  />
                    </Form.FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="w-100 my-3">
                    <Form.Group controlId='formZip' as={Col} lg={3}>
                    <Form.FloatingLabel label='POSTNUMMER'>
                        <Form.Control placeholder='POSTNUMMER' defaultValue={participant.zipcode} readOnly type='text' disabled />
                    </Form.FloatingLabel>
                    </Form.Group>
                    <Form.Group controlId='formCity' as={Col} lg={9}>
                    <Form.FloatingLabel label='POSTSTAD'>
                        <Form.Control placeholder='POSTSTAD' defaultValue={participant.city} readOnly type='text' disabled />
                    </Form.FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="w-100 my-3">
                    <Form.Group controlId='formCountry' as={Col} lg={12}>
                    <Form.FloatingLabel label='LAND'>
                        <Form.Control placeholder='LAND' defaultValue={participant.country} readOnly type='text' disabled />
                    </Form.FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="w-100">
                    &nbsp;
                </Row>
                <Row className="w-100 my-3 mt-5">
                    <Form.Group controlId='formBirthdate' as={Col} lg={6}>
                    <Form.FloatingLabel label='FØDSELSDATO'>
                        <Form.Control defaultValue={participant.birthdate} readOnly type='date' disabled />
                    </Form.FloatingLabel>
                    </Form.Group>
                    <Form.Group controlId='formGender' as={Col} lg={6}>
                        <Form.FloatingLabel label='KJØNN'>
                            <Form.Control placeholder='KJØNN' defaultValue={participant.gender} readOnly type='text' disabled />
                        </Form.FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="w-100">
                    &nbsp;
                </Row>
                <Row>
                    <h2 className="fw-bolder text-light mt-3">FORESATTE - KONTAKTINFORMASJON</h2>
                </Row>
                <Row className="w-100 my-3 mt-3">
                    <h3 className="fw-bolder text-light mx-4">Foresatt 1</h3>
                    <Form.Group controlId='formName2' as={Col} lg={6}>
                    <Form.FloatingLabel label='NAMN'>
                        <Form.Control placeholder='NAMN' defaultValue={participant.parent1_name} readOnly type='text' disabled />
                    </Form.FloatingLabel>
                    </Form.Group>
                    <Form.Group controlId='formPhone2' as={Col} lg={6}>
                    <Form.FloatingLabel label='TELEFONNUMMER'>
                        <Form.Control placeholder='TELEFONNUMMER' defaultValue={participant.parent1_phone} readOnly type='tel' disabled />
                    </Form.FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="w-100 my-3">
                    <Form.Group controlId='formEmail2' as={Col} lg={12}>
                    <Form.FloatingLabel label='E-POSTADRESSE'>
                        <Form.Control placeholder='E-POSTADRESSE' defaultValue={participant.parent1_email} readOnly type='email' disabled />
                    </Form.FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="w-100 my-3 mt-5">
                    <h3 className="fw-bolder text-light mx-4">Foresatt 2</h3>
                    <Form.Group as={Col} lg={6}>
                    <Form.FloatingLabel label='NAMN'>
                        <Form.Control placeholder='NAMN' defaultValue={participant.parent2_name} readOnly type='text' disabled />
                    </Form.FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} lg={6}>
                    <Form.FloatingLabel label='TELEFONNUMMER'>
                        <Form.Control placeholder='TELEFONNUMMER' defaultValue={participant.parent2_phone} readOnly type='tel' disabled />
                    </Form.FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="w-100 my-3">
                    <Form.Group as={Col} lg={12}>
                    <Form.FloatingLabel label='E-POSTADRESSE'>
                        <Form.Control placeholder='E-POSTADRESSE' defaultValue={participant.parent2_email} readOnly type='email' disabled />
                    </Form.FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="w-100">
                    &nbsp;
                </Row>
                <Row className="w-100 mt-3 d-flex flex-column">
                    <h2 className="fw-bolder text-light">SPELINFORMASJON</h2>
                    <p className="text-light mt-2">
                    Her kan du velja konkurransane du ynskjer å delta i under LANet. Du kan endra meining seinare.
                    </p>
                </Row>
                <Row className="w-100 my-2">
                    <Form.Group col={6}>
                    <Form.FloatingLabel label='Brukarnamn - Fortnite'>
                        <Form.Control placeholder='Brukarnamn - Fortnite' type='text' defaultValue={participant.fortnite} readOnly disabled />
                    </Form.FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="w-100 my-2">
                    <Form.Group col={6}>
                    <Form.FloatingLabel label='Brukarnamn - Counter-Strike: Global Offensive'>
                        <Form.Control placeholder='Brukarnamn - Counter-Strike: Global Offensive' type='text' defaultValue={participant.csgo} readOnly disabled />
                    </Form.FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="w-100 my-2">
                    <Form.Group col={6}>
                    <Form.FloatingLabel label='Brukarnamn - Valorant'>
                        <Form.Control placeholder='Brukarnamn - Valorant' type='text' defaultValue={participant.valorant} readOnly disabled />
                    </Form.FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="w-100 my-2">
                    <Form.Group col={6}>
                    <Form.FloatingLabel label='Brukarnamn - Forza Horizon 5'>
                        <Form.Control placeholder='Brukarnamn - Forza Horizon 5' type='text' defaultValue={participant.fh5} readOnly disabled />
                    </Form.FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="w-100 my-2">
                    <Form.Group col={6}>
                    <Form.FloatingLabel label='Brukarnamn - Minecraft'>
                        <Form.Control placeholder='Brukarnamn - Minecraft' type='text' defaultValue={participant.mc} readOnly disabled />
                    </Form.FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="w-100 my-2">
                    <Form.Group col={6}>
                    <Form.FloatingLabel label='Brukarnamn - Rocket League'>
                        <Form.Control placeholder='Brukarnamn - Rocket League' type='text' defaultValue={participant.rl} readOnly disabled />
                    </Form.FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="w-100 my-2 mb-5">
                    <Form.Group col={6}>
                    <Form.FloatingLabel label='Brukarnamn - League of Legends'>
                        <Form.Control placeholder='Brukarnamn - League of Legends' type='text' defaultValue={participant.lol} readOnly disabled />
                    </Form.FloatingLabel>
                    </Form.Group>
                </Row>
                </Form>
                <Row className="w-50 d-flex m-auto mt-3">
                    <h3 className="fw-bolder text-light m-auto text-center">HAR DU SJEKKA GJENNOM ALT?</h3>
                </Row>
                <Row className="w-50 m-auto d-flex mt-3 mb-5">
                    <Button className="my-2 p-1" variant="secondary" onClick={() => navigate('/kvammalan')}>AVBRYT</Button>
                    <Button className="my-2 p-1" variant="primary" onClick={payment}>GÅ TIL BETALING</Button>
                </Row>    
            </Container>
            : null
        }
    </Container>
  )
}

export default Confirmation