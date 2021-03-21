import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Scroll, Zoom, Fade } from "src/components/00-General/Animation"

import styled from "styled-components"
const Container = styled.div`
  width: 90%;
  padding-top: 90%;
  /* background: red; */
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
`
const Circle = styled.div`
  width: ${props => `calc(${props.size}%)`};
  height: ${props => `calc(${props.size}%)`};
  /* width: 100%;
  height: 100%; */
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 100%;
  border: 1px solid #ce93d8;
  /* transform: translate3d(-50%, -50%, 0) rotate(30deg);*/
  transform: translate3d(-50%, -50%, 0)
    ${props => `rotate(${props.rotation}deg)`};
  opacity: ${props => props.opacity};
  .person {
    position: absolute;
    top: 50%;
    left: 0;
    width: 5rem;
    height: 5rem;
    border-radius: 100%;

    background: linear-gradient(
      180deg,
      #6e9fe9 0%,
      #6fcf97 33.25%,
      #ce93d8 71.99%,
      #f24e1e 100%
    );
    padding: 0.5rem;
    transform: translate3d(-50%, -50%, 0)
      ${props => `rotate(-${props.rotation}deg)`};
    @media (min-width: 768px) {
      width: 8rem;
      height: 8rem;
    }
  }
`
const Circles = () => {
  const { image1, image2, image3, image4, image5 } = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "image-person-1.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "image-person-2.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "image-person-3.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image4: file(relativePath: { eq: "image-person-4.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image5: file(relativePath: { eq: "image-person-5.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Container>
      <Circle size={50} opacity={1} rotation={0} />

      <Circle size={70} opacity={0.9} rotation={0}>
        <div className="person">
          <Img fluid={image1.childImageSharp.fluid} />
        </div>
      </Circle>
      <Circle size={90} opacity={0.8} rotation={150}>
        <div className="person">
          <Img fluid={image2.childImageSharp.fluid} />
        </div>
      </Circle>
      <Circle size={110} opacity={0.7} rotation={30} />
      <Circle size={130} opacity={0.6} rotation={230}>
        <div className="person">
          <Img fluid={image3.childImageSharp.fluid} />
        </div>
      </Circle>
      <Circle size={150} opacity={0.5} rotation={320}>
        <div className="person">
          <Img fluid={image4.childImageSharp.fluid} />
        </div>
      </Circle>
      <Circle size={170} opacity={0.4} rotation={30}>
        <div className="person">
          <Img fluid={image5.childImageSharp.fluid} />
        </div>
      </Circle>
    </Container>
  )
}

export default Circles
