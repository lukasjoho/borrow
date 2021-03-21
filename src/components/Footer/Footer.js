import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./footer.scss"
import Logo from "../00-General/Logo/Logo"

const Footer = () => {
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
    <section id="footer">
      <Container>
        <Row className="top">
          <Col md={6} className="brand">
            {/* <Img fluid={image.childImageSharp.fluid} alt="" /> */}
            <div className="logo">
              <Logo />
            </div>
            <h2>
              Dont just buy. <br />
              Borrow. <br />
              The App.
            </h2>
          </Col>
          <Col md={3}>
            <ul>
              <li>Pages</li>
              <li>GitHub</li>
              <li>Blogpost</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col md={3}>
            <ul>
              <li>Support</li>
              <li>TechLabs</li>
              <li>Lukas Hoppe</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="copyright">
            <p>All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Footer
