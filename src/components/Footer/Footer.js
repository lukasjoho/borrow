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
              <li>Ressources</li>

              <li>
                <a href="https://github.com/lukasjoho/borrow" target="_blank">
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://inside-techlabs.medium.com/the-borrow-app-d938d9d2da72"
                  target="_blank"
                >
                  Blogpost
                </a>
              </li>

              <li>
                <a href="https://www.techlabs.org/" target="_blank">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <ul>
              <li>Support</li>

              <li>
                <a href="https://www.techlabs.org/" target="_blank">
                  TechLabs
                </a>
              </li>

              <li>Nina Engbert</li>
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
