import React from 'react'
import './Navbar.css'
import { Navbar } from 'react-bootstrap'
import logo from '../../img/logo.png'

function NavbarComponent() {
  return (
    <>
        <Navbar bg='dark'>
            <Navbar.Brand style={{ display: 'flex', justifyContent: 'flex-start', width: '25%', marginLeft: '2.5%', alignItems: 'center' }} href='/'>
                <img
                    src={logo}
                    alt='KvammaLAN'
                    style={{
                        objectFit: 'contain',
                        width: '50%',
                        height: 'auto',
                    }}
                />
                {/* <h1 className='fw-bold text-light' style={{ marginLeft: '2.5%' }}>KvammaLAN</h1> */}
            </Navbar.Brand>
        </Navbar>
    </>
  )
}

export default NavbarComponent