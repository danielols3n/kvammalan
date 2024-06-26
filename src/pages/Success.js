import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { db } from '../Firebase'
import axios from 'axios'
import moment from 'moment'

function Success() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const [ticketId, setTicketId] = useState('')
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        const q = query(collection(db, 'events', 'kvammalan2023', 'registrations'), where('reservationId', '==', searchParams.get('reservationId')))

        getDocs(q).then((querySnapshot) => {
            const document = querySnapshot.docs[0]

            setTicketId(document.data().ticketId)

            axios.post('https://kvam-e-sport-or-api.olsendaniel04.repl.co/success-email', {
                reservationId: searchParams.get('reservationId'),
                name: document.data().name, 
                email: document.data().email,
                ticketId: document.data().ticketId
            }).then((res) => {
                if (moment().diff(new Date(document.data().birthdate), 'years', true) < 18) {
                    axios.post('https://kvam-e-sport-or-api.olsendaniel04.repl.co/parental-consent', {
                        reservationId: searchParams.get('reservationId'),
                        parent_email: document.data().parent1_email
                    }).then(() => {
                        setDisabled(false)
                    }).catch(error => console.error(error))
                } 
            }).catch(error => console.error(error))
        })
    }, [])
    
  return (
    <Container fluid className="d-flex flex-column m-0 p-0">
        <AiOutlineCheckCircle size='15rem' color='green' className="mx-auto mt-5" />
        {ticketId === 'Publikum' ? 
            <>
                <h2 className="fw-bolder mx-auto mt-3">
                    Dette gjekk jo strålande!
                </h2>
                <p className="w-50 text-center mx-auto mt-3">
                    Dette gjekk jo smuuuuuud! Du er no påmeldt til KvammaLAN 2023 som tilskodar. Du har no (eller får snart) ein e-post med ein QR-kode. 
                    Denne QR-koden er inngangsbilletten din og må visast når du kjem i døra.
                </p>
                <p className="w-50 text-center mx-auto mt-3">
                    Me ser fram til å ha deg med under årets versjon av KvammaLAN!
                </p>
                <Button className="mt-3 mb-5 w-50 mx-auto" variant='primary' disabled={disabled} onClick={() => navigate('/')}>GÅ TILBAKE TIL FRAMSIDA</Button>
            </>
            :
            <>
                <h2 className="fw-bolder mx-auto mt-3">
                    Dette gjekk jo strålande!
                </h2>
                <p className="w-50 text-center mx-auto mt-3">
                    Dette gjekk jo smuuuuuud! Du er no påmeldt til KvammaLAN 2023. Du har no (eller kjem til å få snart) ein e-post
                    til både deg og dine foresatte (dersom du har skrive inn nokon) om informasjon vidare. Her ligg det òg ein QR-kode, som du
                    må ha med deg under heile LANet. Dette er inngangsbilletten din og du må visa denne kvar gong du skal inn og ut av bygget. 
                    I tillegg står det ein del praktisk informasjon og ei lita pakkeliste!
                </p>
                <p className="w-50 text-center mx-auto mt-3">
                    Dersom du er under 18 år kjem det òg eit samtykkeskjema på e-post til foresatte som må signerast for at påmeldinga skal vera gyldig. 
                </p>
                <p className="w-50 text-center mx-auto mt-3">
                    Me ser fram til å ha deg med under årets versjon av KvammaLAN!
                </p>
                <Button className="mt-3 mb-5 w-50 mx-auto" variant='primary' disabled={disabled} onClick={() => navigate('/')}>GÅ TILBAKE TIL FRAMSIDA</Button>
            </>
        }
    </Container>
  )
}

export default Success