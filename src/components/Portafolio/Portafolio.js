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
      <div className="w-full flex flex-col h-1/5 xl:flex-row items-center justify-around bg-transparent shadow-lg text-black">
        <StyledLink to="/" text="Inicio" />
        <h1 className="text-3xl cursor-pointer">Portafolio</h1>
        <StyledLink to="/portafolio" text="Contact" />
      </div>

      <ItemListContainer />
    </div>
  )
}

export default Portafolio
