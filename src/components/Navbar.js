import React, { useState } from "react"
import { Link } from "gatsby"
import Logo from "./Logo"

import NavItemsMobile from "./NavItemsMobile"
import { MenuIcon } from "./Icons"

const NavLink = ({ to, text }) => (
  <>
    <Link
      to={to}
      className="transform scale-105 py-4  text-4xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-300 cursor-pointer tracking-widest"
    >
      {text}
    </Link>
  </>
)



export const NavbarMobile = () => {
  return (

    <div className="font-custom xl:hidden flex-grow bg-black h-full flex flex-col items-center justify-around mx-auto w-full py-3 my-auto">
      <NavLink to="/bio" text="BIO" />
      <NavLink to="/portafolio" text="PORTAFOLIO" />
      <NavLink to="/contact" text="CONTACTO" />
    </div>

  )
}

export const NavbarData = () => {

  const [display, setDisplay] = useState("hidden");

  return (
    //Desktop

    <div className="fixed  block top-0 w-full shadow-md z-50 bg-gray-50">
      <div className="relative flex items-center px-4 py-1">
        <Link onClick={() => setDisplay("hidden")} to="/">
          <Logo />
        </Link>
        {/* <p className="px-2 xl:hidden font-bold text-lg">Portafolio</p> */}
        <div className="w-full flex items-center ml-4 lg:ml-8 space-x-4 text-md tracking-normal font-normal">
          <div className="hidden xl:block space-x-12 mx-auto">
            <Link
              to="/bio"
              activeClassName="border-b-2 border-gray-400 font-bold"
            >
              Bio
            </Link>
            <Link
              to="/portafolio"
              activeClassName="border-b-2 border-gray-400 font-bold"
            >
              Portafolio
            </Link>
            <Link
              to="/contact"
              activeClassName="border-b-2 border-gray-400 font-bold"
            >
              Contacto
            </Link>
          </div>
          <div className="absolute right-4 xl:hidden">
            <div
              onClick={() =>
                display === "hidden"
                  ? setDisplay("block")
                  : setDisplay("hidden")
              }
            >
              <MenuIcon display={display} />
            </div>
          </div>
          <NavItemsMobile display={display} setDisplay={setDisplay} />
        </div>
      </div>
    </div>
  )
}
