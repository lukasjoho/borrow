import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
const Member = ({ image, name, position }) => {
  return (
    <div>
      <Img fluid={image.childImageSharp.fluid} />
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
          fluid(quality: 70, maxWidth: 540) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageLina: file(relativePath: { eq: "image-lina.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 540) {
            ...GatsbyImageSharpFluid_noBase64
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
            <h2>Und wir fangen gerade erst an.</h2>
            <p>
              Im Rahmen des TechLabs Münster “Digital Shaper Program” haben wir
              uns als Team formatiert, um uns der Aufgabe zu stellen,eine eigene
              App im Sinne von “Tech4Good” zu gestalten. Mit der Borrow.App
              wollen wir es Münsteraner Studierenden, wie uns selbst,
              ermöglichen, in einer lokalen Community Nachhaltigkeit in den
              Alltag zu integrieren. Dabei steht die Leichtigkeit und
              User-Freundlichkeit immer im Fokus unseres Creation-Prozesses.
            </p>
          </Col>
          <Col md={3}>
            <Member image={imageAnika} name="Anika" position="UX Design" />
          </Col>
          <Col md={3}>
            <Member image={imageLina} name="Lina" position="UX Design" />
          </Col>
          <Col md={3}>
            <Member image={imageLina} name="Fabio" position="UX Design" />
          </Col>
          <Col md={3}>
            <Member image={imageLina} name="Amelie" position="UX Design" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Team
