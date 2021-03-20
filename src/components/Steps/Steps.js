import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
const Step = ({ number, text }) => {
  return (
    <div>
      <div>{number}</div>
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
          <Col md={6}>
            <Step number="1" text="Erstelle deinen kostenfreien Account" />
            <Step number="2" text="Finde dein erstes Item" />
            <Step number="3" text="Borrow.It" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Steps
