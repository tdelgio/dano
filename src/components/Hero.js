import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import { NavbarDesktop, NavbarMobile } from "./Navbar"

const NavLink = ({ url, text }) => (
  <Link to={url} className="py-2 shadow-lg text-gray-400">
    {text}
  </Link>
)

const Hero = () => {
  return (
    <div className="flex flex-col lg:block min-h-screen bg-black">
      <div className="hidden xl:block">
        <NavbarDesktop />
      </div>

      <StaticImage
        src="../images/hero.JPG"
        placeholder="tracedSVG"
        layout="fullWidth"
        className=" border-b-2 border-red-400 h-1/2 flex-grow-0"
      />

      <NavbarMobile />
    </div>
  )
}

export default Hero
