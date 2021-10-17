import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Logo = ({ height, width, classCustom }) => {
  return (
    <StaticImage
      src="../images/logo.png"
      alt="logo"
      className={`z-54 ${height} ${width} ${classCustom} w-12 rounded-full shadow-md`}
    />
  )
}

export default Logo
