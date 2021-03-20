import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./box.scss"
const Box = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "image-laughing-people.png" }) {
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
      <Container>
        <Row>
          <Col md={6}>
            {/* <Img fluid={image.childImageSharp.fluid} alt="" /> */}
          </Col>

          <Col md={6}>
            <h2>Von der Ideation bis zur Borrow.App</h2>
            <p>
              Erfahre mehr über die Story hinter Borrow. und folge uns auf
              unserem weiteren Weg.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Box
