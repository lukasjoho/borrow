import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./getstarted.scss"
import Stores from "../00-General/Stores/Stores"
const GetStarted = () => {
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
    <section id="getstarted">
      <Container>
        <Row>
          <Col md={6}>
            {/* <Img fluid={image.childImageSharp.fluid} alt="" /> */}
            <h2>Starte jetzt und werde ein Teil der Borrow.Community.</h2>
            <Stores />
          </Col>
          <Col md={6}></Col>
        </Row>
      </Container>
    </section>
  )
}

export default GetStarted
