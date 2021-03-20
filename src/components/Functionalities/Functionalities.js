import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Item = ({ title, text }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}
const Functionalities = () => {
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
    <section id="functionalities">
      <Container>
        <Row>
          <Col md={6}>
            <Img fluid={image.childImageSharp.fluid} alt="" />
          </Col>
          <Col md={6}>
            <Item
              title="Borrow.Points"
              text="Sammle  mit jedem Deal Punkte und steige im Community Ranking auf"
            />
            <Item
              title="Borrow.Coffee"
              text="Verleihe deine eigenen Gegenstände an die Community und verdiene dir damit deinen nächsten kostenlosen Kaffee 
"
            />
            <Item
              title="Borrow.Impact"
              text="Leihe statt selbst zu kaufen und reduziere easy deinen Konsum, denn Sharing is Caring
"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Functionalities
