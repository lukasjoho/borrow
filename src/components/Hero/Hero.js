import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./hero.scss"
import Stores from "../00-General/Stores/Stores"
import Circles from "./Circles"
import { Scroll, Zoom, FadeInDown } from "src/components/00-General/Animation"

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "image-iphone-map.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 255) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section id="hero">
      <Container>
        <Row>
          <Col md={6} className="text-container">
            <div className="no-overflow">
              <Scroll>
                <h1>Nie zuvor war leihen so einfach.</h1>
              </Scroll>
            </div>
            <div className="no-overflow">
              <Scroll delay={100}>
                <p>
                  Überzeuge dich selbst und regristiere dich kostenlos für die
                  Borrow.App
                </p>
              </Scroll>
            </div>
            <Stores />
          </Col>
          <Col md={6} className="visual-container">
            <div className="image">
              <Zoom>
                <Img fluid={image.childImageSharp.fluid} />
              </Zoom>
            </div>
            {/* <Circles /> */}
            <div className="circles-position">
              <Circles />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
