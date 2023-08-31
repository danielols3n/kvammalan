import { doc, getDoc, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Modal } from 'react-bootstrap'
import { db, storage } from '../../Firebase'
import { useSearchParams } from 'react-router-dom'
import noimage from '../../img/noimage.jpg'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'

function AdminViewCompetition() {
    const [competition, setCompetition] = useState(null)
    const [searchParams] = useSearchParams()
    const [addImageModal, setAddImageModal] = useState(false)
    const [coverImage, setCoverImage] = useState(null)
 
    useEffect(() => {
        const docRef = doc(db, 'events', 'kvammalan2023', 'competitions', searchParams.get('eventId'))

        getDoc(docRef).then((document) => {
            setCompetition(document)
            console.log(document.data())
        }).catch(error => console.error(error))
    }, [])

    const addImage = (event) => {
        event.preventDefault()

        const ref = ref(storage, 'competitions', v4())

        uploadBytes(ref, coverImage).then(() => {
            getDownloadURL(ref).then((url) => {
                const docRef = doc(db, 'events', 'kvammalan2023', 'competitions', searchParams.get('eventId'))

                updateDoc(docRef, {
                    img: url
                }).then(() => {
                    alert('Biletet er lasta opp!')
                }).catch(error => console.error(error))
            }).catch(error => console.error(error))
        }).catch(error => console.error(error))
    }

  return (
    <Container fluid className="d-flex flex-column p-0 m-0">
        {(competition !== null) && (competition.data().img === null || competition.data().img === undefined) ? 
            <>
                <Container fluid className="d-flex m-0 p-0 position-relative" style={{ height: '40vh', backgroundColor: '#c4c4c4' }}>
                    <img src={noimage} alt='' title='Event cover' style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    <Button style={{ background: 'transparent', fontSize: '3rem', border: 'none', height: '3rem', position: 'absolute', bottom: '7.5%', left: '95%' }} onClick={() => setAddImageModal(true)}>+</Button>
                </Container>
            </>
            : null
        }
        {competition !== null ? 
            <>

            </>
            : null
        }
        <Modal show={addImageModal} onHide={() => setAddImageModal(false)} size='lg' centered>
            <Modal.Header closeButton>
                <h2 className="fw-bolder text-center w-100">LEGG TIL FRAMSIDEBILETE</h2>
            </Modal.Header>
            <Modal.Body>
                <Container fluid className="d-flex flex-column m-0 p-0">
                    <Form onSubmit={addImage} className="w-75 m-auto">
                        <Form.Label htmlFor='image'>BILETE</Form.Label>
                        <Form.Control name='image' type='file' onChange={e => setCoverImage(e.target.files[0])} />
                        <Button variant='primary' className="w-25 mt-3" type='submit'>LAGRE</Button>
                    </Form>
                </Container>
            </Modal.Body>
        </Modal>
    </Container>
  )
}

export default AdminViewCompetition