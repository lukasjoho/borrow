import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./steps.scss"
import IconUser from "src/images/icon-user-plus.svg"
import IconCheck from "src/images/icon-check.svg"
import IconHandshake from "src/images/icon-handshake.svg"
import IconLine1 from "src/images/icon-line-1.svg"
import IconLine1Mobile from "src/images/icon-line-1-mobile.svg"
import IconLine2 from "src/images/icon-line-2.svg"
import {
  Scroll,
  Zoom,
  FadeInDown,
  SlideInLeft,
} from "src/components/00-General/Animation"

const Step = ({ icon, number, text, color, line }) => {
  return (
    <div className="step">
      <div className="content">
        <div className="top">
          <div className={`box ${color}`}>
            <img src={icon} alt="" />
          </div>
          <div className="line-desktop">
            {line && <img className="d-none d-md-block" src={line} alt="" />}
          </div>
        </div>
        <div className="bottom">
          <div className="number">{number}</div>
          <div>
            <p>{text}</p>
          </div>
        </div>
      </div>
      {line && (
        <div className="line-mobile d-flex d-md-none">
          <img src={IconLine1Mobile} alt="" />
        </div>
      )}
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
            <Scroll>
              <h2>
                In <span>3</span> Schritten zu deinem Item
              </h2>
            </Scroll>
          </Col>
        </Row>
        <div className="staircase">
          <Step
            number="01"
            text={
              <>
                Erstelle deinen <strong>kostenfreien Account</strong>
              </>
            }
            icon={IconUser}
            color="blue"
            line={IconLine1}
          />
          <Step
            number="02"
            text={
              <>
                Finde dein <strong>erstes Item</strong>
              </>
            }
            icon={IconCheck}
            color="violet"
            line={IconLine2}
          />

          <Step
            number="03"
            text={
              <>
                <strong>Borrow </strong> it
              </>
            }
            icon={IconHandshake}
            color="green"
          />
        </div>
      </Container>
    </section>
  )
}

export default Steps
