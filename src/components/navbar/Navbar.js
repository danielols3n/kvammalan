import React from 'react'
import './Navbar.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from '../logo.png'

function NavbarComponent(props) {
  return (
    <>
        <Navbar expand='md' collapseOnSelect bg={props.data.background} variant='dark'>
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
            </Navbar.Brand>
            <Navbar.Toggle style={{ marginRight: '2.5%' }} aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav>
                    <Nav.Link className="mx-4" href='/'>HEIM</Nav.Link>
                    <Nav.Link className="mx-4" href='/om-oss'>OM OSS</Nav.Link>
                    <Nav.Link className="mx-4" href='/kvammalan'>KVAMMALAN 2023</Nav.Link>
                    <NavDropdown className="mx-4" title='INFORMASJON' menuVariant='dark'>
                        <NavDropdown.Item href='/program'>PROGRAM</NavDropdown.Item>
                        <NavDropdown.Item href='/praktisk-info'>PRAKTISK INFORMASJON</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className="mx-4" title='HJELP' menuVariant='dark'>
                        <NavDropdown.Item href='/faq'>OFTE STILTE SPØRSMÅL</NavDropdown.Item>
                        <NavDropdown.Item href='/kontakt-oss'>KONTAKT OSS</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
  )
}

export default NavbarComponent