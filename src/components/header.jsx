import React from 'react'
import { Button, Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './header.css'
import Logo from '../resource/logo.svg'

const Header = () => (
  <Navbar bg='primary' expand='lg' className='shadow p-0 mb-3 text-white' variant='dark'>
    <Navbar.Brand className='p-3 bg-black'>
      <img alt="Logo" width="100px" src={Logo} />
    </Navbar.Brand>
    <Nav className='mr-auto my-2' navbarScroll>
      <span className='text-black pr-3'>
        <b>Welcome</b>
      </span>
    </Nav>

    <Button href='/Page1' className='shadow m-1' variant='dark'>
      Home
    </Button>
  </Navbar>
)
export default Header
