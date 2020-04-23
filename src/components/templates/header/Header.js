import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../images/Logo";

const Header = () => {
  return (
    <>
      <Navbar id="primaryNav" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
