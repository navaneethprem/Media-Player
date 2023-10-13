import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div><Navbar className="bg-secondary">
    <Container>
      <Navbar.Brand>
        <Link to={'/'} className='fs-4' style={{textDecoration:"none",color:"white"}}>
      <i className="fa-solid fa-upload fa-fade me-2"></i>
        Media Player
        </Link>
      </Navbar.Brand>
    </Container>
  </Navbar></div>
    
  )
}

export default Header