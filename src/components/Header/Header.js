import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import Button from "../00-General/Button/Button"
import Logo from "../00-General/Logo/Logo"
import "./header.scss"
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="#home">
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {/* <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav> */}
        <Nav className="ml-auto">
          <Nav.Link href="/">
            <Button text="Registrieren" />
          </Nav.Link>
          <Nav.Link eventKey={2} href="/">
            Erfahre Mehr
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
