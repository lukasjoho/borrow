import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./items.scss"
const Circle = () => {
  return <div className="circle"></div>
}
const Items = () => {
  return (
    <section id="items">
      <Container>
        <Row>
          <Col md={12}>
            <h2>Über 100+ Items.</h2>
            <p>
              Dem Leihen und Verleihen sind mit Borrow. keine Grenzen gesetzt.
            </p>
          </Col>
          <Col md={12}>
            <div className="circle-container">
              <div className="circle-row">
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
              </div>
              <div className="circle-row">
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
              </div>
              <div className="circle-row">
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Items
