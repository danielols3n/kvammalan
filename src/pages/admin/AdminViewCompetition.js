import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { db } from '../../Firebase'
import { useSearchParams } from 'react-router-dom'

function AdminViewCompetition() {
    const [competition, setCompetition] = useState(null)
    const [searchParams] = useSearchParams()

    useEffect(() => {
        const docRef = doc(db, 'events', 'kvammalan2023', 'competitions', searchParams.get('eventId'))

        getDoc(docRef).then((document) => {
            setCompetition(document)
        }).catch(error => console.error(error))
    }, [])
  return (
    <Container fluid className="d-flex flex-column">
        {competition !== null ? 
            <>
                <h1 className="fw-bolder mx-auto mt-3 w-50 text-center">{competition.data().name}</h1>
            </>
            : null
        }
    </Container>
  )
}

export default AdminViewCompetition