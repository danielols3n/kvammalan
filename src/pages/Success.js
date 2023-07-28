import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { db } from '../Firebase'
import axios from 'axios'

function Success() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    useEffect(() => {
        axios.post('https://kvam-e-sport-or-api.olsendaniel04.repl.co/success-email')
    }, [])
  return (
    <Container fluid className="d-flex flex-column m-0 p-0">
        <AiOutlineCheckCircle size='15rem' color='green' className="mx-auto mt-5" />
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
            Me ser fram til å ha deg med under årets versjon av KvammaLAN!
        </p>
        <Button className="mt-3 w-50 mx-auto" variant='primary' onClick={() => navigate('/')}>GÅ TILBAKE TIL FRAMSIDA</Button>
    </Container>
  )
}

export default Success