import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import AdminNavbar from '../../components/admin-navbar/AdminNavbar'
import { db } from '../../Firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

function AdminNews() {
  const [news, setNews] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const colRef = collection(db, 'events', 'kvammalan2023', 'news')

    getDocs(colRef).then((snapshot) => {
      const temp = []
      
      snapshot.docs.forEach((item) => {
        temp.push({
          title: item.data().title, 
          description: item.data().description,
          postedAt: item.data().postedAt, 
          postedBy: item.data().postedBy, 
          imageURL: item.data().imageURL,
        })
      })
      setNews(temp)
    }).catch(error => console.error(error))

  }, [])
  return (
    <Container fluid className="d-flex flex-column p-0 m-0">
      <AdminNavbar />
      <Container fluid className="d-flex flex-column m-0 p-0">
        <Row className="w-100">
          <Col lg={10}>
            <h2 fluid className="fw-bolder text-center mx-auto mt-3">NYHENDE</h2>
          </Col>
          <Col className="d-flex flex-column" lg={2}>
            <Button onClick={() => navigate('/kvammalan/admin/news/new-article')} variant="primary fw-bolder px-3 mt-3 w-25 mx-auto" style={{ fontSize: '1.5rem' }}>+</Button>
          </Col>
        </Row>
        <Container fluid className="d-flex flex-column p-0 m-0">
          
        </Container>
      </Container>
    </Container>
  )
}

export default AdminNews