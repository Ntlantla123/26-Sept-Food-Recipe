import React, { useRef } from "react";
import './TopNav.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const  TopNav = () => {
 const navRef = useRef();

  return (

    /* Navbar Section */
    <Navbar collapseOnSelect expand="lg" className="bg-body-green" style={{position:"relative",width:"125%",}}>
    <Container>
      <Navbar.Brand href="/home"><h1 style={{fontSize:"5 0px",}}>Shesha</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/> 
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto" style={{position:"relative",left:"-12%",}}>
         {/*<Nav.Link href="/Home" style={{color:"black",fontSize:"17px",fontWeight:"600",position:"relative",left:"20%",}}>HOME</Nav.Link>*/}
          <Nav.Link href="/Lessons"style={{color:" rgb(56, 54, 54)",fontSize:"17px",fontWeight:"600",position:"relative",left:"20%",}}>LESSONS</Nav.Link>
          <Nav.Link href="/Recipes"style={{color:" rgb(56, 54, 54)",fontSize:"17px",fontWeight:"600",position:"relative",left:"20%",}}>RECIPES</Nav.Link>
          <Nav.Link href="/Articles"style={{color:" rgb(56, 54, 54)",fontSize:"17px",fontWeight:"600",position:"relative",left:"20%",}}>ARTICLES</Nav.Link>
          <Nav.Link href="/"style={{color:" rgb(56, 54, 54)",fontSize:"17px",fontWeight:"600",position:"relative",left:"20%",}}>KIDDIES MENU</Nav.Link>

          <Nav.Link href="/Contact"style={{color:" rgb(56, 54, 54)",fontSize:"17px",fontWeight:"600",position:"relative",left:"20%",}}>CONTACT</Nav.Link>

          <NavDropdown title="ABOUT US"  id="collasible-nav-dropdown"style={{fontSize:"17px",fontWeight:"600",color:"white",position:"relative",left:"20%",}}>
            <NavDropdown.Item href="/About">About Shehsha</NavDropdown.Item>
            <NavDropdown.Item href="/FoodService">
              About Food Service
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
         {/*} <Nav.Link eventKey={2} href="#memes" style={{color:" rgb(56, 54, 54)",fontSize:"1.4rem",fontWeight:"600",}}>
            Contact Us
  </Nav.Link>*/}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
