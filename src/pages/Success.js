import React, { useEffect, useState } from 'react'
import { Button, Container, NavLink } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { BsCheckCircle } from 'react-icons/bs'
import { TailSpin } from 'react-loader-spinner'
import axios from 'axios'
import { addDoc, collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { v4 } from 'uuid'

function Success() {
    const nextEventId = 'BX4GwZjW1hTBn2G8NFwz'
    const [searchParams] = useSearchParams()
    const [loading, setLoading] = useState(true)
    const [submitted, setSubmitted] = useState(false)
    const [event, setEvent] = useState({})

    const submit = () => {
        axios.post('https://Kvam-E-sport-API.olsendaniel04.repl.co/session/get', {
            sessionId: searchParams.get('sessionId')
        }).then((response) => {
            const docRef = collection(db, 'hendingar', nextEventId, 'registreringar')

            addDoc(docRef, {
                name: response.data.session.metadata.name,  
                email: response.data.session.metadata.email,
                birthdate: response.data.session.metadata.birth,
                minor: response.data.session.metadata.minor,
                phone: response.data.session.metadata.phone,
                parentemail: response.data.session.metadata.parentemail,
                parentname: response.data.session.metadata.parentname,
                parentphone: response.data.session.metadata.parentphone,
                paid: true,
                id: v4(),
                eventId: nextEventId,
                checkedIn: false,
            }).then((document) => {
                console.log(document)
                setLoading(false)
                setSubmitted(true)
                const eventRef = doc(db, 'hendingar', nextEventId)

                getDoc(eventRef).then(async (doc1) => {
                    const docRef2 = doc(db, 'hendingar', nextEventId, 'registreringar', document.id)

                    getDoc(docRef2).then((doc2) => {
                        axios.post('https://Kvam-E-sport-API.olsendaniel04.repl.co/send-confirmationemail', {
                            name: response.data.session.metadata.name,  
                            email: response.data.session.metadata.email,
                            birthdate: response.data.session.metadata.birth,
                            minor: response.data.session.metadata.minor,
                            phone: response.data.session.metadata.phone,
                            parentemail: response.data.session.metadata.parentemail,
                            parentname: response.data.session.metadata.parentname,
                            parentphone: response.data.session.metadata.parentphone,
                            event: {
                                title: doc1.data().title,
                                start: doc1.data().start,
                                end: doc1.data().end
                            },
                            reg_id: doc2.data().id
                        }).then(() => {
                            
                        })
                    })
                })
            }).catch((error) => {
                console.error(error)
            })
        }).catch((error) => {
            console.error(error)
        })
    }

    useEffect(() => {
        if (submitted !== true) {
            submit()
        }
    }, [])

  return (
    <Container style={{ minHeight: '80vh' }} fluid className="d-flex flex-column align-items-center justify-content-center">
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
                <Container fluid className="d-flex flex-column align-items-center justify-content-center">
                    <BsCheckCircle size='15rem' color='green' />
                    <h3 className="fw-bolder mt-5">Påmeldinga var vellukka</h3>
                    <p className="text-center w-75 mt-3">
                        Du skal ha fått ein e-post med meir utfyllande informasjon. Om du har nokre spørsmål, ikkje vèr redd for å ta kontakt
                        med oss på <a href="mailto:kvammalan@kvam-esport.no">kvammalan@kvam-esport.no</a>.
                    </p>
                    <NavLink as={Button} href='/' type='variant' className="w-50 text-light">
                        Tilbake til framsida
                    </NavLink>
                </Container>
            </>
        }
    </Container>
  )
}

export default Success