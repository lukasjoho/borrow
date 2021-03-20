import React from "react"

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
  transform: translate3d(-50%, -50%, 0);
`
const Circles = () => {
  return (
    <Container>
      <Circle size={80} />
      <Circle size={100} />

      <Circle size={120} />
      <Circle size={140} />
    </Container>
  )
}

export default Circles
