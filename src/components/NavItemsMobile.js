import React from "react"
import { Link } from "gatsby"

const StyledLink = ({ setDisplay, to, text }) => {
  return (
    <Link
      onClick={() => setDisplay("hidden")}
      to={to}
      activeClassName="font-light text-red-block"
      className="ml-2 text-lg font-thin text-gray-300 tracking-wider"
    >
      {text}
    </Link>
  )
}

const NavItemsMobile = ({ display, setDisplay }) => {
  return (
    <div className="h-screen">
      <div className={display}>
        <div className="z-0 absolute left-0 top-0 mt-20 right-0  w-full flex flex-col rounded-b-md shadow-2xl space-y-6 bg-gray-dark p-4 ">
          <Link
            setDisplay={setDisplay}
            className="ml-2 text-lg font-thin text-gray-300 tracking-wider"
            activeClassName="font-light text-red-block"
            to="/bio"
          >
            ART <span className="inline text-red-block font-light">& </span>
            TRIP
          </Link>

          <StyledLink
            setDisplay={setDisplay}
            to="/portafolio"
            text="PORTAFOLIO"
          />
          <StyledLink setDisplay={setDisplay} to="/contact" text="CONTACTO" />
        </div>
      </div>
    </div>
  )
}

export default NavItemsMobile
