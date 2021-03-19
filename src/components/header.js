import React, { useState } from "react"
import { Nav, Navbar } from "react-bootstrap"
import Lottie from "lottie-react-web"

import NavbarToggle from "./navbar-toggle.json"

import "./header.scss"

const Header = ({ activePage, subpages }) => {
  const [menuToggled, setMenuToggled] = useState(false)

  const handleMenuToggle = () => {
    setMenuToggled(prevState => !prevState)
  }

  return (
    <Navbar expand="md" onToggle={handleMenuToggle}>
      <Navbar.Brand as="button">
        <div className="logo">Logo</div>
      </Navbar.Brand>
      <Navbar.Toggle className="lottie-container">
        <Lottie
          tabIndex="-1"
          isPaused={false}
          direction={menuToggled ? 1 : -1}
          speed={3}
          options={{
            animationData: NavbarToggle,
            loop: false,
          }}
        />
      </Navbar.Toggle>
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Nav.Link>Unser Konzept</Nav.Link>
          <Nav.Link>Bewerbung</Nav.Link>
          <Nav.Link>Kontakt</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Header
