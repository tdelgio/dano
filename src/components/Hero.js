import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { NavbarMobile } from "./Navbar"

const Hero = () => {
  return (
    <div className="flex flex-col justify-between  min-h-screen bg-gray-dark">
      <StaticImage
        src="../images/hero.JPG"
        placeholder="tracedSVG"
        alt="hero image"
        className="relative top-0 lg:top-20 border-b-2 border-red-dark flex-grow-0 w-full"
      />
      <NavbarMobile />
    </div>
  )
}

export default Hero
