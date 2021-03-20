import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./steps.scss"
const Step = ({ number, text }) => {
  return (
    <div className="step">
      <div className="box"></div>
      <div className="number">{number}</div>
      <div>{text}</div>
    </div>
  )
}
const Steps = () => {
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
    <section id="steps">
      <Container>
        <Row>
          <Col md={12}>
            {/* <Img fluid={image.childImageSharp.fluid} alt="" /> */}
            <h2>In 3 Schritten zu deinem Item</h2>
          </Col>
        </Row>
        <Row className="staircase">
          <Col md={4}>
            <Step number="01" text="Erstelle deinen kostenfreien Account" />
          </Col>
          <Col md={4}>
            <Step number="02" text="Finde dein erstes Item" />
          </Col>

          <Col md={4}>
            <Step number="03" text="Borrow.It" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Steps
