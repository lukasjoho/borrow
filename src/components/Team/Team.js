import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./team.scss"
import {
  Scroll,
  Zoom,
  FadeInDown,
  SlideInLeft,
} from "src/components/00-General/Animation"
const Member = ({ image, name, position, index }) => {
  return (
    <div className="member">
      <Zoom delay={index * 100}>
        <div className="image">
          <Img fluid={image.childImageSharp.fluid} />
        </div>
      </Zoom>
      <h3>{name}</h3>
      <p>{position}</p>
    </div>
  )
}
const Team = () => {
  const { imageAnika, imageLina } = useStaticQuery(graphql`
    query {
      imageAnika: file(relativePath: { eq: "image-anika.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageLina: file(relativePath: { eq: "image-lina.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section id="team">
      <Container>
        <Row>
          <Col md={12}>
            {/* <Img fluid={image.childImageSharp.fluid} alt="" /> */}
            <div className="text-container">
              <Scroll>
                <h2 className="section-title">
                  Und wir fangen gerade erst an.
                </h2>
              </Scroll>
              <Scroll>
                <p>
                  Im Rahmen des TechLabs Münster “Digital Shaper Program” haben
                  wir uns als Team formatiert, um uns der Aufgabe zu
                  stellen,eine eigene App im Sinne von “Tech4Good” zu gestalten.
                  Mit der Borrow.App wollen wir es Münsteraner Studierenden, wie
                  uns selbst, ermöglichen, in einer lokalen Community
                  Nachhaltigkeit in den Alltag zu integrieren. Dabei steht die
                  Leichtigkeit und User-Freundlichkeit immer im Fokus unseres
                  Creation-Prozesses.
                </p>
              </Scroll>
            </div>
          </Col>
          <Col md={3}>
            <Member
              image={imageAnika}
              name="Anika"
              position="UX Design"
              index={1}
            />
          </Col>
          <Col md={3}>
            <Member
              image={imageLina}
              name="Lina"
              position="UX Design"
              index={2}
            />
          </Col>
          <Col md={3}>
            <Member
              image={imageLina}
              name="Fabio"
              position="UX Design"
              index={3}
            />
          </Col>
          <Col md={3}>
            <Member
              image={imageLina}
              name="Amelie"
              position="UX Design"
              index={4}
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Team
