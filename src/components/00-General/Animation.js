import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

export const Scroll = ({ children, delay = 0 }) => {
  return (
    <ScrollAnimation
      animateIn="animate__fadeInUp"
      offset={0}
      animateOnce={true}
      delay={delay}
    >
      {children}
    </ScrollAnimation>
  )
}
export const Zoom = ({ children, delay = 0 }) => {
  return (
    <ScrollAnimation
      animateIn="animate__zoomIn"
      offset={0}
      animateOnce={true}
      delay={delay}
    >
      {children}
    </ScrollAnimation>
  )
}
export const Fade = ({ children, delay = 0 }) => {
  return (
    <ScrollAnimation
      animateIn="animate__fadeIn"
      offset={0}
      animateOnce={true}
      delay={delay}
    >
      {children}
    </ScrollAnimation>
  )
}
export const FadeInDown = ({ children, delay = 0 }) => {
  return (
    <ScrollAnimation
      animateIn="animate__fadeInDown"
      offset={0}
      animateOnce={true}
      delay={delay}
    >
      {children}
    </ScrollAnimation>
  )
}
export const SlideInLeft = ({ children, delay = 0 }) => {
  return (
    <ScrollAnimation
      animateIn="animate__slideInLeft"
      offset={0}
      animateOnce={true}
      delay={delay}
    >
      {children}
    </ScrollAnimation>
  )
}
