import React from "react"
import { Link } from "gatsby"

import ItemListContainer from "./ItemListContainer"

const StyledLink = ({ text, to }) => (
  <Link to={to} className="transform hover:scale-125 text-base">
    {text}
  </Link>
)

const Portafolio = () => {
  return (
    <div className="min-h-screen -mb-6">
      <div className="flex items-center">
        <Link to="/" className="px-2">
          Logo
        </Link>
        <div className="w-full flex flex-col h-1/5 xl:flex-row items-center justify-around bg-transparent shadow-lg text-black">
          <StyledLink to="/" text="Bio" />
          <h1 className="text-3xl cursor-pointer">Portafolio</h1>
          <StyledLink to="/" text="Contact" />
        </div>
      </div>

      <ItemListContainer />
    </div>
  )
}

export default Portafolio
