import React from 'react';
import { Container, Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>

          <Navbar.Brand>My Favorite Books</Navbar.Brand>
          <Nav className="me-auto">
            <NavItem><Link to="/" style={{ color: "white" }} className="nav-link">Home</Link></NavItem>
            <NavItem><Link to="/About" style={{ color: "white" }} className="nav-link">About</Link></NavItem>
          </Nav>
          {/* PLACEHOLDER: render a navigation link to the about page */}

        </Container>
      </Navbar>
    )
  }
}

export default Header;
