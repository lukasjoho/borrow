import React from "react"
import "./button.scss"
const Button = ({ text, handleShow }) => {
  return handleShow ? (
    <button className="premiumbutton" onClick={handleShow}>
      {text}
    </button>
  ) : (
    <button className="premiumbutton">{text}</button>
  )
}

export default Button
