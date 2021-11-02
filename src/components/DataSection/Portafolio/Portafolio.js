import React from "react"

import ItemListContainer from "./ItemListContainer"
import { NavbarData } from "../../Navbar"

const Portafolio = () => {
  return (
    <div className="block -mb-6 ">
      <div className="z-50 h-14 lg:bg-gray-dark">
        <NavbarData />
      </div>
      <div className="fixed top-0 bottom-0 w-full bg-black" />
      <div className="z-0 relative mx-auto top-6 bottom-0 ">
        <div className="flex items-center justify-start md:hidden">
          <h1 className="p-8 font-extralight text-gray-300 text-xl">
            PORTAFOLIO
          </h1>
          <hr className="my-2 w-full border-red-dark" />
        </div>
        <ItemListContainer />
      </div>
    </div>
  )
}

export default Portafolio
