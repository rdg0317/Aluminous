import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar(){
  return(
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">AlumniConnect</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">News/Events</Nav.Link>
          <Nav.Link href="#link">Opportunities</Nav.Link>
          <Nav.Link href="#link">Contact Us</Nav.Link>
          <Nav.Link href="#link">Login</Nav.Link>
          <NavDropdown title="Meet Alumni" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Batch 2023</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
             Batch 2022
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Batch 2021</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Batch 2020</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">Previous Years</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.6">
             Register
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar;