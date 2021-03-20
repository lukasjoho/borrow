import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./box.scss"
import Button from "../00-General/Button/Button"
const Box = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "image-macbook.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 540) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <section id="box">
      <Container className="box-container">
        <Row>
          <Col md={6}>
            <Img fluid={image.childImageSharp.fluid} alt="" />
          </Col>

          <Col md={6} className="text-container">
            <h2>Von der Ideation bis zur Borrow.App</h2>
            <p>
              Erfahre mehr über die Story hinter Borrow. und folge uns auf
              unserem weiteren Weg.
            </p>
            <Button text="Über das Projekt" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Box
