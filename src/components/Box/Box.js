import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./box.scss"
import Button from "../00-General/Button/Button"
import {
  Scroll,
  Zoom,
  FadeInDown,
  SlideInLeft,
} from "src/components/00-General/Animation"
import IconArrowBlack from "src/images/icon-arrow-black.svg"
const Box = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "image-macbook.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 450) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section id="box">
      <Zoom>
        <Container>
          <div className="box-container">
            <Row>
              <Col lg={6}>
                <div className="image">
                  <Img fluid={image.childImageSharp.fluid} alt="" />
                </div>
              </Col>

              <Col lg={6} className="text-container">
                <h2>Von der Ideation bis zur Borrow.App</h2>
                <p>
                  Erfahre mehr über die Story hinter Borrow. und folge uns auf
                  unserem weiteren Weg.
                </p>
                <Button text="Über das Projekt" />
              </Col>
            </Row>
            <div className="label">
              <img src={IconArrowBlack} alt="" />
              <span>Hier geht’s zu unserem Blogpost</span>
            </div>
          </div>
        </Container>
      </Zoom>
    </section>
  )
}

export default Box
