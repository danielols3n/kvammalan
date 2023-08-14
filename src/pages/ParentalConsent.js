import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import React, { useState } from 'react'
import { Button, Container, Form, Row, Col, Modal } from 'react-bootstrap'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { db } from '../Firebase'
import moment from 'moment'

function ParentalConsent() {
    document.title = 'Samtykkeskjema | KvammaLAN'

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [parent_name, setParentName] = useState('')
    const [parent_phone, setParentPhone] = useState('')
    const [consent, setConsent] = useState(false)

    const [searchParams] = useSearchParams()
    const [consentError, setConsentError] = useState(false)

    const submit = (event) => {
        event.preventDefault()

        const q = query(collection(db, 'events', 'kvammalan2023', 'registrations'), where('reservationId', '==', searchParams.get('reservationId')))

        if (consent === true && name !== '' && parent_name !== '' && parent_phone !== '') {
            getDocs(q).then((querySnapshot) => {
                const document = querySnapshot.docs[0]
                const docRef = doc(db, 'events', 'kvammalan2023', 'registrations', document.id)
    
                    updateDoc(docRef, {
                        participant_name: name, 
                        parent_name: parent_name,
                        parent_phone: parent_phone,
                        consent: consent,
                        timeOfConsent: moment().unix()
                    }).then(() => {
                        navigate('/')
                    }).catch(error => {
                        console.error(error)
                        setConsentError(true)
                    })
                
            })
        } else {
            setConsentError(true)
        }
    }

  return (
    <Container fluid className="d-flex flex-column">
        <Row className="w-100 d-flex justify-content-end">
            <Button className="w-25 mt-3" variant='primary' onClick={() => navigate('/')}>GÅ TIL FRAMSIDA</Button>
        </Row>
        <Row className="w-100">
            <Container fluid className="d-flex flex-column">
                <h1 className="fw-bolder mx-auto mt-5">SAMTYKKE FRÅ FØRESATTE</h1>
                <p className="text-center mt-3">
                    På eit LAN spelar ein mange forskjellige spel. Me har ingen kontroll over kva spel kvar einskild deltakar speler. Me 
                    klarer heller ikkje å halda styr på om dei som er under den anbefalte PEGI-aldersgrensa på kvart spel, ikkje ser på ein anna 
                    deltakar spela det spelet. Difor har me lagd til eit samtykkeskjema som kvar forelder til ein deltakar under 16 år må senda inn, 
                    der ein samtykkjer til at deltakaren kan delta på arrangementet sjølv om det er ein fare for at han kan sjå på spel som 
                    har ei høgare anbefalt aldersgrense enn alderen til deltakaren. 
                </p>
                <p className="text-center">
                    Under finn du eit avkrysningsskjema. Dette må du kryssa av og deretter trykkja bekreft. Viss dette ikkje er gjort innan 
                    deltakaren kjem i døra, vil han/ho ikkje kunne koma inn på arrangementet. 
                </p>
                <Container fluid className="d-flex flex-column">
                    <Form onSubmit={submit} className="mt-5">
                        <Row className="w-100 d-flex">
                            <Form.Group as={Col} lg={8} className="mx-auto">
                                <Form.FloatingLabel label='NAMN PÅ DELTAKAR'>
                                    <Form.Control value={name} onChange={e => setName(e.target.value)} type='text' placeholder='NAMN PÅ DELTAKAR' />
                                </Form.FloatingLabel>
                            </Form.Group>
                        </Row>
                        <Row className="w-100 mt-3">
                            <Form.Group as={Col} lg={6}>
                                <Form.FloatingLabel label='NAMN PÅ FØRESATT'>
                                    <Form.Control value={parent_name} onChange={e => setParentName(e.target.value)} type='text' placeholder='NAMN PÅ DELTAKAR' />
                                </Form.FloatingLabel>
                            </Form.Group>
                            <Form.Group className="my-2" as={Col} lg={6}>
                                <Form.FloatingLabel label='TELEFONNUMMER PÅ DELTAKAR'>
                                    <Form.Control value={parent_phone} onChange={e => setParentPhone(e.target.value)} type='tel' placeholder='TELEFONNUMMER PÅ DELTAKAR' />
                                </Form.FloatingLabel>
                            </Form.Group>
                        </Row>
                        <Row className="w-100 mt-5">
                            <Form.Group as={Col} className="d-flex" lg={12}>
                                <Form.Check
                                    value={consent}
                                    onChange={e => setConsent(!consent)}
                                    type='checkbox'
                                    name='consent'
                                    className="mx-2"
                                />
                                <Form.Label htmlFor='name' className="fw-bolder">Eg samtykkjer herved at deltakaren som er namngjeven over kan delta på arrangementet KvammaLAN 2023 10. - 13. oktober 2023 i Øystese idrettshall. Eg aksepterer òg med dette at samtykket som forklart ovanfor er sendt inn.</Form.Label>
                            </Form.Group>
                        </Row>
                        <Row className="w-100 mt-3">
                            <Form.Group as={Col} lg={3}>
                                <Button type='submit' variant='primary'>SEND INN SAMTYKKE</Button>
                            </Form.Group>
                            <Form.Group as={Col} lg={9}>
                                
                            </Form.Group>
                        </Row>
                    </Form>
                </Container>
            </Container>
        </Row>
        <Modal centered show={consentError} onHide={() => setConsentError(false)}>
            <Modal.Header closeButton>
                <h2 className="fw-bolder text-center">NOKRE FELT ER IKKJE FYLTE UT</h2>
            </Modal.Header>
            <Modal.Body>
                <p className="text-center w-75 mx-auto">
                    Sjekk at alle felt er fylt ut og at du har kryssa av nedst i skjemaet før du prøver på nytt. Sjekk òg at infoen stemmer overens med det de oppgav under påmeldinga. Dersom 
                    problemet vedvarer, ta kontakt med Daniel Olsen direkte på SMS 98663863 eller e-post <a href="mailto:daniel@kvam-esport.no">daniel@kvam-esport.no</a>.
                </p>
            </Modal.Body>
        </Modal>
    </Container>
  )
}

export default ParentalConsent