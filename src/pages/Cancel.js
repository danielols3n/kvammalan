import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import { GiCancel } from 'react-icons/gi'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { db } from '../Firebase'

function Cancel() {
    document.title = 'Cancel | KvammaLAN'

    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    useEffect(() => {
        const q = query(collection(db, 'events', 'kvammalan2023', 'registrations'), where('reservationId', '==', searchParams.get('reservationId')))

        getDocs(q).then((querySnapshot) => {
            const document = querySnapshot.docs[0]

            deleteDoc(doc(db, 'events', 'kvammalan2023', 'registrations', document.id)).then(() => {
                console.log('Document deleted!')
            }).catch(error => console.error(error))
        }).catch(error => console.error(error))      
    }, [])
  return (
    <Container fluid className="d-flex flex-column m-0 p-0">
        <GiCancel size='15rem' color='red' className="mx-auto mt-5" />
        <h2 className="fw-bolder mx-auto mt-3">
            Her gjekk noko gale!
        </h2>
        <p className="w-50 text-center mx-auto mt-3">
            Det har skjedd noko feil under påmeldinga. Enten har du avbrutt påmeldinga manuelt, eller så har det skjedd ein feil 
            på vår side. Dersom det har skjedd ein feil på vår side, ber me deg om å prøva på nytt igjen. Dersom problemet vedvarer, 
            ta kontakt med oss på <a href="mailto:kvammalan@kvam-esport.no">kvammalan@kvam-esport.no</a>
        </p>
        <Button className="mt-3 mb-5 w-50 mx-auto" variant='primary' onClick={() => navigate('/')}>GÅ TILBAKE TIL FRAMSIDA</Button>
    </Container>
  )
}

export default Cancel