import React, { useState } from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap'
import QrReader from 'react-web-qr-reader';
import { collectionGroup, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { TailSpin } from 'react-loader-spinner';

function EventRegistration() {
    const [loading, setLoading] = useState(false)

    const checkIn = (result) => {
        setLoading(true)
    
        const q = query(collectionGroup(db, 'registreringar'), where('id', '==', result.data))
    
        getDocs(q).then(querySnapshot => {
          querySnapshot.docs.forEach((document) => {
            const docRef = doc(db, 'hendingar', document.data().eventId, 'registreringar', document.id)
    
            updateDoc(docRef, {
              checkedIn: true
            }).then(() => {
              setLoading(false)
              alert(`${document.data().name} er no sjekka inn.`)
            })
          })
        })
    }

    const checkOut = (result) => {
        setLoading(true)
    
        const q = query(collectionGroup(db, 'registreringar'), where('id', '==', result.data))
    
        getDocs(q).then(querySnapshot => {
          querySnapshot.docs.forEach((document) => {
            const docRef = doc(db, 'hendingar', document.data().eventId, 'registreringar', document.id)
    
            updateDoc(docRef, {
              checkedIn: false
            }).then(() => {
              setLoading(false)
              alert(`${document.data().name} er no sjekka ut.`)
            })
          })
        })
    }

  return (
    <Container fluid className="d-flex flex-column p-0 m-0">
        {loading === true ? 
            <>
                <TailSpin
                    color="#00BFFF"
                    height={100}
                    width={100}
                />    
                <span>Lastar inn...</span>
            </>
        : 
        <>
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
                            showViewFinder={true}
                        />
                    </Container>
                </Tab>
            </Tabs>
        </>
        }
    </Container>
  )
}

export default EventRegistration