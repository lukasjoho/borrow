import React, { useState } from "react"
import { Navbar, Nav } from "react-bootstrap"
import Button from "../00-General/Button/Button"
import Logo from "../00-General/Logo/Logo"
import Modal from "react-bootstrap/Modal"
import "./header.scss"
import IconModalClose from "src/images/icon-modal-close.svg"
const Header = () => {
  const [show, setShow] = useState(false)
  const [status, setStatus] = useState(false)
  const [state, setState] = useState("")
  const [error, setError] = useState(false)
  const handleStatus = e => {
    if (state == "") {
      setError(true)
    } else {
      setStatus(true)
    }
  }
  const handleChange = e => {
    setError(false)
    setState(e.target.value)
  }
  const handleClose = () => {
    setError(false)
    setState("")
    setStatus(false)

    setShow(false)
  }
  const handleShow = () => setShow(true)
  // const handleShow = () => setShow(true)

  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <Nav.Link className="d-lg-none">
          <Button text="Registrieren" handleShow={handleShow} />
        </Nav.Link>

        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav> */}
          <Nav className="ml-auto">
            <Button text="Registrieren" handleShow={handleShow} />

            {/* <Nav.Link eventKey={2} href="/">
            Erfahre Mehr
          </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Modal className="borrow-modal" show={show} onHide={handleClose} centered>
        <Modal.Body>
          <img
            src={IconModalClose}
            alt=""
            className="modal-close"
            onClick={handleClose}
          />
          <h1>Trage dich hier kostenlos in die Warteliste ein.</h1>
          <div className="form">
            <input
              type="text"
              placeholder="Email"
              required
              onChange={handleChange}
              value={state}
            />
            {error && <p className="error">Bitte trage deine Email rein.</p>}
            {status ? (
              <button
                className="submitbutton success"
                value="Du bist in der Warteliste!"
              >
                Du bist in der Warteliste!
              </button>
            ) : (
              <button
                value="Senden"
                className="submitbutton"
                onClick={handleStatus}
              >
                Senden
              </button>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Header
