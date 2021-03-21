import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./getstarted.scss"
import Stores from "../00-General/Stores/Stores"
import IconPattern from "src/images/icon-pattern.svg"
import {
  Scroll,
  Zoom,
  FadeInDown,
  SlideInLeft,
} from "src/components/00-General/Animation"
const GetStarted = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "image-iphone-borrow.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section id="getstarted">
      <Container>
        <Row>
          <Col md={6} className="text-container">
            {/* <Img fluid={image.childImageSharp.fluid} alt="" /> */}
            <div className="no-overflow">
              <Scroll>
                <h2 className="section-title">
                  Starte jetzt und werde ein Teil der Borrow.Community.
                </h2>
              </Scroll>
            </div>
            <Stores />
          </Col>
          <Col md={6} className="image-container">
            <div className="image">
              <Img fluid={image.childImageSharp.fluid} />
            </div>
            <div className="shape">
              <img src={IconPattern} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default GetStarted
