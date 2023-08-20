import React from 'react'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'
import logo from '../logo.png'

function AdminNavbar() {
  return (
    <>
        <Navbar expand='md' collapseOnSelect bg='dark' variant='dark'>
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
                    <Nav.Link className="mx-4" href='/kvammalan/admin'>HEIM</Nav.Link>
                    <Nav.Link className="mx-4" href='/kvammalan/admin/participants'>DELTAKARAR</Nav.Link>
                    <Nav.Link className="mx-4" href='/kvammalan/admin/check-in'>INNSJEKK</Nav.Link>
                    <NavDropdown className="mx-4" title='INFORMASJON' menuVariant='dark'>
                        <NavDropdown.Item href='/kvammalan/admin/timeschedule'>PROGRAM</NavDropdown.Item>
                        <NavDropdown.Item href='/kvammalan/admin/competitions'>KONKURRANSAR</NavDropdown.Item>
                        <NavDropdown.Item href='/kvammalan/admin/news'>NYHENDE</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand className='my-auto' style={{ display: 'flex', justifyContent: 'flex-end', width: '25%', marginRight: '10%', alignItems: 'center' }}>
                <h3 className="fw-bolder">ADMIN</h3>
            </Navbar.Brand>
        </Navbar>
    </>
  )
}

export default AdminNavbar