import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import ItemListContainer from "./ItemListContainer"
import { NavbarData } from "../../Navbar"

const Portafolio = () => {
  return (
    <div className="block -mb-6 bg-black">
      <div className="z-50">
        <NavbarData />
      </div>
      <StaticImage
        src="../../../images/5.jpg"
        className="hidden lg:block bg-opacity-10 w-full"
      />
      <StaticImage
        src="../../../images/5.jpg"
        className="hidden lg:block bg-opacity-10 w-full"
      />
      <div className="z-0 absolute top-14 bottom-0">
        <ItemListContainer />
      </div>
    </div>
  )
}

export default Portafolio
