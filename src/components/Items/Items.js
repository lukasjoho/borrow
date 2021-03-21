import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./items.scss"
import IconPrinter from "src/images/icon-printer.svg"
import IconFitness from "src/images/icon-fitness.svg"
import IconSchool from "src/images/icon-school.svg"
import IconLaundry from "src/images/icon-laundry.svg"
import IconBusiness from "src/images/icon-business.svg"
import IconExtension from "src/images/icon-extension.svg"
import IconDining from "src/images/icon-dining.svg"
import IconCamera from "src/images/icon-camera.svg"
import IconLinkedCamera from "src/images/icon-linked-camera.svg"
import IconFile from "src/images/icon-file.svg"
import IconCasino from "src/images/icon-casino.svg"
import IconTool from "src/images/icon-tool.svg"
import IconBike from "src/images/icon-bike.svg"
import IconShipping from "src/images/icon-shipping.svg"
import IconMusic from "src/images/icon-music.svg"
import IconRadio from "src/images/icon-radio.svg"
import IconHorse from "src/images/icon-horse.svg"
import IconFilter from "src/images/icon-filter.svg"
import {
  Scroll,
  Zoom,
  FadeInDown,
  SlideInLeft,
} from "src/components/00-General/Animation"
const Circle = ({ icon }) => {
  return (
    <div className="segment">
      <div className="circle">
        <img src={icon} alt="" />
      </div>
    </div>
  )
}
const Items = () => {
  return (
    <section id="items">
      <Container>
        <Row>
          <Col md={12} className="text-container">
            <Scroll>
              <h2 className="section-title">Über 100+ Items.</h2>
            </Scroll>
            <Scroll>
              <p>
                Dem Leihen und Verleihen sind mit Borrow. keine Grenzen gesetzt.
              </p>
            </Scroll>
          </Col>
          <Col md={12}>
            <div className="circle-container">
              {/* <div className="overlay" /> */}
              <div className="item-container">
                <div className="circle-row">
                  <Circle icon={IconPrinter} />
                  <Circle icon={IconTool} />
                  <Circle icon={IconCasino} />
                  <Circle icon={IconFile} />
                  <Circle icon={IconFitness} />
                  <Circle icon={IconSchool} />
                  <Circle icon={IconLaundry} />
                </div>
                <div className="circle-row">
                  <Circle icon={IconCamera} />
                  <Circle icon={IconDining} />
                  <Circle icon={IconBusiness} />
                  <Circle icon={IconExtension} />
                  <Circle icon={IconBike} />
                  <Circle icon={IconShipping} />
                </div>
                <div className="circle-row">
                  <Circle icon={IconMusic} />
                  <Circle icon={IconHorse} />
                  <Circle icon={IconRadio} />
                  <Circle icon={IconLinkedCamera} />
                  <Circle icon={IconFilter} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Items
