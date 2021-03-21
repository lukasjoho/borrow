import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./functionalities.scss"
import IconFlower from "src/images/icon-flower.svg"
import IconCoffee from "src/images/icon-coffee.svg"
import IconThumbsUp from "src/images/icon-thumbs-up.svg"
import { Scroll, Zoom, FadeInDown } from "src/components/00-General/Animation"

const Item = ({ title, text }) => {
  return (
    <div className="item">
      <Scroll>
        <h2>{title}</h2>
        <p>{text}</p>
      </Scroll>
    </div>
  )
}
const Icon = ({ icon, position }) => {
  return (
    <div className={`icon ${position}`}>
      <img src={icon} alt="" />
    </div>
  )
}
const Functionalities = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "image-laughing-people.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 510) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section id="functionalities">
      <Container>
        <Row>
          <Col lg={6} className="image-container">
            <Icon icon={IconCoffee} position="first" />
            <Icon icon={IconCoffee} position="second" />
            <Icon icon={IconCoffee} position="third" />
            <div className="image">
              <Img fluid={image.childImageSharp.fluid} alt="" />
            </div>
          </Col>
          <Col lg={6} className="text-container">
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
