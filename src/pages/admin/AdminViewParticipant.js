import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { db } from '../../Firebase'
import { query, getDocs, collection, where } from 'firebase/firestore'
import { useSearchParams } from 'react-router-dom'
import AdminNavbar from '../../components/admin-navbar/AdminNavbar'

function AdminViewParticipant() {
  const [participant, setParticipant] = useState(null)
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const q = query(collection(db, 'events', 'kvammalan2023', 'registrations'), where('reservationId', '==', searchParams.get('reservationId')))

    getDocs(q).then(querySnapshot => {
      const participantDocument = querySnapshot.docs[0]

      setParticipant({
        ...participantDocument.data(),
        id: participantDocument.id
      })

    }).catch(error => console.error(error))
  }, [])
  return (
    <Container fluid className="d-flex flex-column m-0 p-0">
      <AdminNavbar />
      {participant !== null ? 
        <>
          <h1 className="w-25 text-end mt-4 fw-bolder">{participant.name.toUpperCase()}</h1>
        </>
        : null
      }
    </Container>
  )
}

export default AdminViewParticipant