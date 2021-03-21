import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./items.scss"
import IconPrinter from "src/images/icon-printer.svg"
import {
  Scroll,
  Zoom,
  FadeInDown,
  SlideInLeft,
} from "src/components/00-General/Animation"
const Circle = () => {
  return (
    <div className="segment">
      <div className="circle">
        <img src={IconPrinter} alt="" />
      </div>
    </div>
  )
}
const Items = () => {
  return (
    <section id="items">
      <Container>
        <Row>
          <Col md={12} className="text-container">
            <Scroll>
              <h2>Über 100+ Items.</h2>
            </Scroll>
            <Scroll>
              <p>
                Dem Leihen und Verleihen sind mit Borrow. keine Grenzen gesetzt.
              </p>
            </Scroll>
          </Col>
          <Col md={12}>
            <div className="circle-container">
              <div className="overlay" />
              <div className="item-container">
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
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Items
