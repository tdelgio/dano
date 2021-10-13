import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import ItemListContainer from "./ItemListContainer"
import { NavbarData } from "../../Navbar"

const Portafolio = () => {
  return (
    <div className="block -mb-6 ">
      <div className="z-50 h-14 lg:bg-gray-dark">
        <NavbarData />
      </div>
      <div className="fixed top-0 bottom-0 w-full bg-gray-dark" />
      <div className="z-0 relative mx-auto top-6 bottom-0 ">
        <ItemListContainer />
      </div>
    </div>
  )
}

export default Portafolio
