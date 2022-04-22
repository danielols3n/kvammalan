import React from 'react'
import './Navbar.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from '../../img/logo.png'

function NavbarComponent(props) {
  return (
    <>
        <Navbar bg={props.data.background} variant='dark'>
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
                <Nav.Link className="mx-4" href='/'>HEIM</Nav.Link>
                <Nav.Link className="mx-4" href='/om-oss'>OM OSS</Nav.Link>
                <Nav.Link className="mx-4" href='/kvammalan'>KVAMMALAN 2022</Nav.Link>
                <NavDropdown className="mx-4" title='HJELP' menuVariant='dark'>
                    <NavDropdown.Item href='/faq'>OFTE STILTE SPØRSMÅL</NavDropdown.Item>
                    <NavDropdown.Item href='/kontakt'>KONTAKT OSS</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    </>
  )
}

export default NavbarComponent