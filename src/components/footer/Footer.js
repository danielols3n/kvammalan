import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Footer.css'
import { BsFacebook, BsInstagram } from 'react-icons/bs'

function Footer() {
  return (
    <div className='footer'>
      <Row className="w-100 p-0 m-0">
        <Col className="w-25 float-left d-flex align-items-center justify-content-center">
            <img
              src={require('../../img/logo.png')}
              alt='Logo Kvam E-sport'
              title='Kvam E-sport'
              style={{
                width: '25%', 
                height: 'auto',
                objectFit: 'contain',
                margin: 'auto',
                alignSelf: 'center'
              }}
            />
        </Col>
        <Col className="w-25 float-right d-flex align-items-center justify-content-center">
            <a title='Facebook' href='https://www.facebook.com/kvamesport'>
              <BsFacebook size='1.5rem' className="mx-4" />
            </a>
            <a title='Instagram' href='https://www.instagram.com/kvam_esport/'>
              <BsInstagram size='1.5rem' className="mx-4" />
            </a>
        </Col>
      </Row>
      <Row className="w-100 p-0 m-0">
        <Col className="w-100 float-left d-flex align-items-center justify-content-center mt-4">
            <p className="text-light">Copyright © 2022 - <a style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }} href='https://kvam-esport.no'>Kvam E-sport</a></p>
        </Col>
      </Row>
    </div>
  )
}

export default Footer