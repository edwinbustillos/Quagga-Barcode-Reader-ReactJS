import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

const Footer = () => (
  <Navbar expand='lg' className='d-flex flex-column p-2'>
    <Nav navbarScroll>
      <div className='text-dark'>
        All Rights Reserved &copy; <b>2021</b>
      </div>
    </Nav>
  </Navbar>
)

export default Footer
