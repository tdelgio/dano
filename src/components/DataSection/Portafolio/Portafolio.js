import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import ItemListContainer from "./ItemListContainer"
import { NavbarData } from "../../Navbar"

const Portafolio = () => {
  return (
    <div className="block -mb-6 ">
      <div className="z-50 h-14 bg-gray-dark">
        <NavbarData />
      </div>
      <div className="z-0 absolute top-14 bottom-0">
        <ItemListContainer />
      </div>
    </div>
  )
}

export default Portafolio
