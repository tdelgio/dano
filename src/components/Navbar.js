import React, { useState } from "react"
import { Link } from "gatsby"
import Logo from "./Logo"

import NavItemsMobile from "./NavItemsMobile"
import { MenuIcon, InstagramIcon } from "./Icons"

const NavLink = ({ to, text }) => (
  <>
    <Link
      to={to}
      className="py-5 w-full rounded-lg text-center text-gray-200 text-xl xl:text-6xl text-transparent cursor-pointer tracking-wider bg-gray-dark shadow-2xl max-w-md"
    >
      {text}
    </Link>
  </>
)

export const NavbarMobile = () => {
  return (
    <div className="font-thin tracking-wider xl:hidden  flex flex-col items-center justify-center space-y-8 flex-grow  mx-auto w-full py-3 px-4 ">
      <Link
        className="py-5 w-full rounded-xl text-center text-gray-200 text-xl xl:text-6xl text-transparent cursor-pointer bg-gray-dark shadow-2xl whitespace-nowrap max-w-md"
        to="/bio"
      >
        ART <span className="inline text-red-block font-light">& </span>
        TRIP
      </Link>
      <NavLink to="/portafolio" text="PORTAFOLIO" />
      <NavLink to="/contact" text="CONTACTO" />
    </div>
  )
}

export const NavbarData = () => {
  const [display, setDisplay] = useState("hidden")

  return (
    //Desktop

    <div className="fixed block top-0 w-full shadow-2xl z-50 bg-black">
      <div className="relative h-20 flex items-center px-4 py-1 border-b-2 border-gray-dark">
        <div className="hidden lg:block">
          <InstagramIcon />
        </div>

        <Link className="md:hidden" to="/">
          <Logo height="h-12 w-12" />
        </Link>
        <Link
          className="md:hidden block ml-4 tracking-wider border-2  border-gray-dark bg-gblack text-red-block hover:text-red-block hover:scale-105 text-sm font-light py-1 px-3 rounded-md shadow-card"
          to="/contact"
        >
          CONTACTO
        </Link>

        <div className="w-full flex items-center ml-4 lg:ml-8 space-x-4">
          <div className="pr-3 hidden md:flex md:items-center space-x-24 mx-auto text-gray-100">
            <Link onClick={() => setDisplay("hidden")} to="/">
              <Logo height="h-12 w-12" />
            </Link>
            <Link
              className="navLink inline whitespace-nowrap"
              to="/bio"
              activeClassName=" text-red-block"
            >
              ART <span className="text-red-dark font-normal inline ">&</span>{" "}
              TRIP
            </Link>
            <Link
              className="navLink"
              to="/portafolio"
              activeClassName=" text-red-block"
            >
              PORTAFOLIO
            </Link>
            <Link
              className="navLink"
              to="/contact"
              activeClassName="text-red-block"
            >
              CONTACTO
            </Link>
          </div>
          <div className="z-50 absolute right-4 md:hidden">
            <button
              aria-label="button menu"
              onClick={() =>
                display === "hidden"
                  ? setDisplay("block")
                  : setDisplay("hidden")
              }
            >
              <MenuIcon display={display} />
            </button>
          </div>
          <NavItemsMobile display={display} setDisplay={setDisplay} />
        </div>
      </div>
    </div>
  )
}
