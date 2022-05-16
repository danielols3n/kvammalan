import React, { useState } from 'react'
import { Container, Modal, Tab, Tabs } from 'react-bootstrap'
import QrReader from 'react-web-qr-reader';
import { collectionGroup, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { TailSpin } from 'react-loader-spinner';
import { BiErrorCircle } from 'react-icons/bi'

function EventRegistration() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [errorData, setErrorData] = useState(null)

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
            }).catch(error => {
              setError(true)
              setErrorData(error)
            })
          })
        }).catch(error => {
          setError(true)
          setErrorData(error)
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
            }).catch(error => {
              setError(true)
              setErrorData(error)
            })
          })
        }).catch(error => {
          setError(true)
          setErrorData(error)
        })
    }

    document.title = 'Innsjekk | KvammaLAN'

  return (
    <Container fluid style={loading === true ? { alignItems: 'center', justifyContent: 'center', height: '100vh' }: {}} className="d-flex flex-column p-0 m-0">
      <Modal show={error} onHide={() => setError(false)}>
        <Modal.Header closeButton>
          <BiErrorCircle color='red' size="15rem" />
        </Modal.Header>
        <Modal.Body>
          <p>
            Off då! Ein feil dukka opp! Last inn sida på nytt og prøv igjen. 
          </p>
          <p className="mt-3">
            Viss feilen vedvarer, ta kontakt med Daniel Olsen.
          </p>
          {errorData !== null ?
            <p className="mt-3 d-flex">
              Feilkode:&nbsp;<p className="fw-bold">{errorData.code}</p>
            </p>
            : null
          }
        </Modal.Body>
      </Modal>
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
            <Tabs fill className="mt-5">
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