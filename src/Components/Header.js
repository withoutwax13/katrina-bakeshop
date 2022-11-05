import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Header extends Component{
    handleMouseEnter(event){
        const element = event.target
        element.style.textDecoration = 'underline'
    }
    handleMouseLeave(event){
        const element = event.target
        element.style.textDecoration = 'none'
    }
    render(){
        return (
            <Navbar 
                fixed='top' 
                style={{
                    height: '64px', 
                    backgroundColor: '#CFCFC4'
                }} 
                expand='lg'>
                <Container>
                    <Navbar.Brand 
                        href='/katrina-bakeshop'>
                            {/* <img src={require('../assets/images/kb_logo.png')} alt="katrina-bakeshop-logo" className="img-responsive brand-img" style={{width: '50px', height:"50px"}}/> */}
                            <span 
                                id="brand-logo-label" 
                                style={{fontWeight: '600'}}>
                                    Katrina's Bakeshop
                            </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link 
                                className="nav-link nav-item-hover" 
                                style={{
                                    color:'black', 
                                    fontWeight: '600'
                                }} 
                                to={`/katrina-bakeshop/order`}
                                onMouseEnter={e=>this.handleMouseEnter(e)}
                                onMouseLeave={e=>this.handleMouseLeave(e)}>
                                    
                                    <img src={require('../assets/logos/cart.png')} style={{width: '25px', height: '25px', marginTop: '0'}}></img>
                            </Link>
                            <Link 
                                className="nav-link nav-item-hover mt-1" 
                                style={{
                                    color:'black', 
                                    fontWeight: '600'
                                }} 
                                to={`/katrina-bakeshop/order`}
                                onMouseEnter={e=>this.handleMouseEnter(e)}
                                onMouseLeave={e=>this.handleMouseLeave(e)}>
                                    ORDER
                            </Link>
                            <Link 
                                className="nav-link nav-item-hover mt-1" 
                                style={{
                                    color:'black', 
                                    fontWeight: '600'
                                }} 
                                to={`/katrina-bakeshop/contact`}
                                onMouseEnter={e=>this.handleMouseEnter(e)}
                                onMouseLeave={e=>this.handleMouseLeave(e)}>
                                    CONTACT
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Header