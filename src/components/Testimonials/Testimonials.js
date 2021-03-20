import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./testimonials.scss"
const Entry = ({ text, person, image }) => {
  return (
    <div className="entry">
      <p>{text}</p>
      <Img fluid={image.childImageSharp.fluid} />
      <p>{person}</p>
    </div>
  )
}
const Testimonials = () => {
  const { image1 } = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "image-testimonial-1.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 540) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <section id="testimonials">
      <Container>
        <Row>
          <Col md={4}>
            <Entry
              text="Ich hatte neulich einen Freund zu Besuch und brauchte ein Fahhrad, um ihm die Gegend zu zeigen. Dank Borrow. konnte ich mir mit wenigen Klicks noch am selben Tag ein paar Straßen weiter eins abholen und habe dies am nächsten Tag wieder zurückgebracht. Super easy und unkompliziert!"
              person="Tim, 25"
              image={image1}
            />
          </Col>
          <Col md={4}>
            <Entry
              text="Zu lange Lieferzeiten, Sonntage oder zu hohe Preise haben oft verhindert, dass ich rechtzeitig an Spiele für unsere WG- Abende besorgen konnte. Mittlerweile können wir durch Borrow jedes Wochenende neue Spiele ausprobieren, spontan, umsonst und super schnell."
              person="Tim, 25"
              image={image1}
            />
          </Col>
          <Col md={4}>
            <Entry
              text="Als ich zum Studium nach Münster gekommen bin, fiel mir auf der Fahrt auf, dass ich die Farbrolle zuhause vergessen hatte. Da es ein Sonntag war, hatte ich das Streichen gedanklich schon auf einen anderen Tag verschoben. Mein WG-Mitbewohner erzählte mir von der Borrow.-App, und glücklicherweise fand ich das passende Item im anliegenden Stadtviertel. Da es mir so super geholfen hat, werde ich in Zukunft auch selbst Artikel verleihen!"
              person="Tim, 25"
              image={image1}
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonials
