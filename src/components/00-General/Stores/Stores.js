import React from "react"
import IconGooglePlay from "src/images/icon-googleplay.svg"
import IconAppstore from "src/images/icon-appstore.svg"
import "./stores.scss"
const Stores = () => {
  return (
    <div className="stores">
      <img src={IconGooglePlay} alt="" />
      <img src={IconAppstore} alt="" />
    </div>
  )
}

export default Stores
