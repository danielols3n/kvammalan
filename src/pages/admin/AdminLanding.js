import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { auth, db } from '../../Firebase'
import { useNavigate } from 'react-router-dom'

function AdminLanding() {
    const navigate = useNavigate()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const docRef = doc(db, 'users', user.uid)

                getDoc(docRef).then((document) => {
                    if (document.data().admin === true) {
                        console.log('Admin access granted')
                    } else {
                        navigate('/kvammalan/admin/login')
                    }
                }).catch(error => console.error(error))
            } else {
                navigate('/kvammalan/admin/login')
            }
        })
    }, [])
  return (
    <Container fluid className="d-flex flex-column m-0 p-0">
        
    </Container>
  )
}

export default AdminLanding