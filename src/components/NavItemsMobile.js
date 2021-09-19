import React from "react"
import { Link } from "gatsby"

const StyledLink = ({ setDisplay, to, text }) => {
  return (
    <Link
      onClick={() => setDisplay("hidden")}
      to={to}
      activeClassName="font-light"
      className="ml-2 text-lg font-thin text-black"
    >
      {text}
    </Link>
  )
}

const NavItemsMobile = ({ display, setDisplay }) => {
  return (
    <div>
      <div className={display}>
        <div className="z-0 absolute left-0 top-0 pt-20 right-0  w-full flex flex-col rounded-sm shadow-md space-y-6 bg-gray-50 p-4 tracking-tight backdrop-filter backdrop-blur">
          <StyledLink setDisplay={setDisplay} to="/bio" text="BIO" />
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
