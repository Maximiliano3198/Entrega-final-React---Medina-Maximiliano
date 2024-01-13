import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    const estiloContainer = {
        marginLeft: '0'
    }
    const estiloLogo = {
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        outline: 'none',
        width: '40px',
        height: '40px'
    }

  return (
    <>
    <Navbar bg="primary" variant="dark">
        <Container style={estiloContainer}>
            <Link to="" style={estiloLogo}>
                <img src="./pngwing.com.png" style={estiloLogo} alt="" />
            </Link>
            <Nav className='me-auto'>
                <Link to="/" className='nav-link' activeclassname="active">Tienda</Link>
                <Link to="/category/armas" className='nav-link' activeclassname="active">Armas</Link>
                <Link to="/category/armaduras" className='nav-link' activeclassname="active">Armaduras</Link>
                <Link to="/category/magia" className='nav-link' activeclassname="active">Magia</Link>
            </Nav>
        </Container>
        <Link to="/cart" className='nav-link' activeclassname="active"><CartWidget/></Link>
    </Navbar>
    
    </>
  )
}

export default NavBar