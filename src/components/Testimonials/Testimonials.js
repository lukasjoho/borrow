import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./testimonials.scss"
import IconQuotemarks from "src/images/icon-quotemarks.svg"
import IconArrow from "src/images/icon-arrow-right.svg"
import IconArrowMobile from "src/images/icon-arrow-mobile.svg"
import IconArrowBubble from "src/images/icon-arrow-bubble.svg"
import { Fade } from "src/components/00-General/Animation"

const Entry = ({ text, person, image }) => {
  return (
    <div className="entry">
      <div className="text">
        <p>{text}</p>

        <img className="arrow" src={IconArrowBubble} alt="" />
      </div>

      <div className="person">
        <p>{person}</p>
        <div className="image">
          <Img fluid={image.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  )
}
const Testimonials = () => {
  const { image1, image2, image3 } = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "image-testimonial-1.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "image-testimonial-2.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "image-testimonial-3.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section id="testimonials">
      <Fade>
        <Container>
          <Row className="position-relative">
            <div className="label">
              Das sagt die Borrow.Community über unsere App
              <img className="d-none d-md-inline" src={IconArrow} alt="" />
              <img className="d-md-none" src={IconArrowMobile} alt="" />
            </div>
            <div className="quotemarks">
              <img src={IconQuotemarks} alt="" />
            </div>
            <Col lg={4}>
              <Entry
                text="Ich hatte neulich einen Freund zu Besuch und brauchte ein Fahhrad, um ihm die Gegend zu zeigen. Dank Borrow. konnte ich mir mit wenigen Klicks noch am selben Tag ein paar Straßen weiter eins abholen und habe dies am nächsten Tag wieder zurückgebracht. Super easy und unkompliziert!"
                person="Tim, 25"
                image={image1}
              />
            </Col>
            <Col lg={4}>
              <Entry
                text="Zu lange Lieferzeiten, Sonntage oder zu hohe Preise haben oft verhindert, dass ich rechtzeitig an Spiele für unsere WG- Abende besorgen konnte. Mittlerweile können wir durch Borrow jedes Wochenende neue Spiele ausprobieren, spontan, umsonst und super schnell."
                person="Johanna, 21"
                image={image2}
              />
            </Col>
            <Col lg={4}>
              <Entry
                text="Bei meinem Umzug fiel mir auf der Fahrt auf, dass ich die Farbrolle zuhause vergessen hatte. Da es ein Sonntag war, hatte ich das Streichen gedanklich schon auf einen anderen Tag verschoben. Meine neue WG-Mitbewohnerin erzählte mir von der Borrow.App, und glücklicherweise fand ich das passende Item im anliegenden Stadtviertel!"
                person="Lisa, 19"
                image={image3}
              />
            </Col>
          </Row>
        </Container>
      </Fade>
    </section>
  )
}

export default Testimonials
