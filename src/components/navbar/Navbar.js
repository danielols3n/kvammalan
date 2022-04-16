import React from 'react'
import './Navbar.css'
import { Nav, Navbar } from 'react-bootstrap'
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
            <Nav>
                <Nav.Link className='text-light' href='/'>Heim</Nav.Link>
                <Nav.Link className='text-light'>Link 2</Nav.Link>
                <Nav.Link className='text-light'>Link 3</Nav.Link>
            </Nav>
        </Navbar>
    </>
  )
}

export default NavbarComponent