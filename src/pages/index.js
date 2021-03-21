import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Box from "../components/Box/Box"
import Footer from "../components/Footer/Footer"
import Functionalities from "../components/Functionalities/Functionalities"
import GetStarted from "../components/GetStarted/GetStarted"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Items from "../components/Items/Items"
import Team from "../components/Team/Team"
import Testimonials from "../components/Testimonials/Testimonials"
import SEO from "src/components/Seo"
import "../styles.scss"
import Steps from "../components/Steps/Steps"
import "@fontsource/just-me-again-down-here/400.css"
import "animate.css/animate.min.css"
import {
  Scroll,
  Zoom,
  Fade,
  SlideInLeft,
} from "src/components/00-General/Animation"
const IndexPage = () => {
  const { imageSeo } = useStaticQuery(graphql`
    query {
      imageSeo: file(relativePath: { eq: "image-seo.jpg" }) {
        childImageSharp {
          fixed(width: 1200, quality: 90) {
            src
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO
        title="Nie zuvor war leihen so einfach."
        description="Überzeuge dich selbst und regristiere dich kostenlos für die Borrow App"
        image={imageSeo.childImageSharp.fixed.src}
        url="getborrow.netlify.app"
      />
      <Fade>
        <Header />
        <Hero />
        <Functionalities />
        <Steps />
        <Testimonials />
        <Items />
        <Box />
        <Team />
        <GetStarted />
        <Footer />
      </Fade>
    </>
  )
}

export default IndexPage
