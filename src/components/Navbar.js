import React, { useState } from "react"
import { Link } from "gatsby"
import Logo from "./Logo"

import NavItemsMobile from "./NavItemsMobile"
import { MenuIcon } from "./Icons"

const NavLink = ({ to, text }) => (
  <>
    <Link
      to={to}
      className=" text-gray-200 transform scale-105 text-xl xl:text-6xl text-transparent cursor-pointer tracking-widest"
    >
      {text}
    </Link>
  </>
)

export const NavbarMobile = () => {
  return (
    <div className="font-thin tracking-widest xl:hidden flex-grow bg-black h-full flex flex-col items-center justify-around mx-auto w-full py-3 my-auto">
      <NavLink to="/bio" text="BIO" />
      <NavLink to="/portafolio" text="PORTAFOLIO" />
      <NavLink to="/contact" text="CONTACTO" />
    </div>
  )
}

export const NavbarData = () => {
  const [display, setDisplay] = useState("hidden")

  return (
    //Desktop

    <div className="fixed h-14  block top-0 w-full shadow-2xl z-50 bg-gradient lg:bg-gradient-to-b from-black via-black to-transparent">
      <div className="relative flex items-center px-4 py-1">
        <Link onClick={() => setDisplay("hidden")} to="/">
          <Logo />
        </Link>
        <div className="w-full flex items-center ml-4 lg:ml-8 space-x-4">
          <div className="pr-3 text-xl font-thin tracking-widest hidden xl:block space-x-24 mx-auto text-gray-100">
            <Link to="/bio" activeClassName="text-red-400">
              BIO
            </Link>
            <Link to="/portafolio" activeClassName="text-red-400">
              PORTAFOLIO
            </Link>
            <Link to="/contact" activeClassName="text-red-400">
              CONTACTO
            </Link>
          </div>
          <div className="z-50 absolute right-4 xl:hidden">
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
