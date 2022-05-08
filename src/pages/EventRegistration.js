import React from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap'
import QrReader from 'react-web-qr-reader';

function EventRegistration() {

    const checkIn = (result) => {

    }

    const checkOut = (result) => {

    }

  return (
    <Container fluid className="d-flex flex-column p-0 m-0">
        <h1 className="fw-bolder align-self-center mt-5">Registrering</h1>
        <p className="text-center align-self-center mt-3">
            Under kan du registrera folk eller sjekka dei ut.
        </p>
        <Tabs fill defaultActiveKey='checkin' className="mt-5">
            <Tab eventKey='checkin' title="Innsjekk">
                <Container fluid className='h-100 d-flex flex-column mt-5 align-items-center'>
                    <QrReader
                        style={{
                            height: 'auto',
                            width: '85%',
                        }}
                        onError={(error) => console.error(error)}
                        onScan={(result) => checkIn(result)}
                        facingMode='environment'
                        showViewFinder={true}
                    />
                </Container>
            </Tab>
            <Tab eventKey='checkout' title="Utsjekk">
                <Container fluid className='h-100 d-flex flex-column mt-5 align-items-center'>
                    <QrReader
                        style={{
                            height: 'auto',
                            width: '85%',
                        }}
                        onError={(error) => console.error(error)}
                        onScan={(result) => checkOut(result)}
                        facingMode='environment'
                        showViewFinder={true}
                    />
                </Container>
            </Tab>
        </Tabs>
    </Container>
  )
}

export default EventRegistration