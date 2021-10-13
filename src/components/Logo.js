import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Logo = () => {
  return (
    <StaticImage
      src="../images/logo.png"
      alt="logo"
      className="z-54 h-12 w-12 rounded-full shadow-md"
    />
  )
}

export default Logo
