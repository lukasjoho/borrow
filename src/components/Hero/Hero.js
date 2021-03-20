import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import IconGooglePlay from "src/images/icon-googleplay.svg"
import IconAppstore from "src/images/icon-appstore.svg"
import "./hero.scss"
import Stores from "../00-General/Stores/Stores"
const Hero = () => {
  return (
    <section id="hero">
      <Container>
        <Row>
          <Col md={6}>
            <h1>Nie zuvor war leihen so einfach.</h1>
            <p>
              Überzeuge dich selbst und regristiere dich kostenlos für die
              Borrow.App
            </p>
            <Stores />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
