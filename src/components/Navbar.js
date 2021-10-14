import React, { useState } from "react"
import { Link } from "gatsby"
import Logo from "./Logo"

import NavItemsMobile from "./NavItemsMobile"
import { MenuIcon, InstagramIcon } from "./Icons"

const NavLink = ({ to, text }) => (
  <>
    <Link
      to={to}
      className="py-8 w-full rounded-lg text-center text-gray-200 text-xl xl:text-6xl text-transparent cursor-pointer tracking-widest bg-gray-dark shadow-2xl"
    >
      {text}
    </Link>
  </>
)

export const NavbarMobile = () => {
  return (
    <div className=" font-thin tracking-widest lg:hidden  flex flex-col items-center justify-around flex-grow mx-auto w-full py-3 px-4 ">
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

    <div className="fixed block top-0 w-full shadow-2xl z-50 bg-black">
      <div className="relative h-20 flex items-center px-4 py-1 border-b-2 border-gray-dark">
        <div className="hidden lg:block">
          <InstagramIcon />
        </div>

        <Link className="md:hidden" to="/">
          <Logo />
        </Link>
        <div className="w-full flex items-center ml-4 lg:ml-8 space-x-4">
          <div className="pr-3 hidden md:flex md:items-center space-x-24 mx-auto text-gray-100">
            <Link onClick={() => setDisplay("hidden")} to="/">
              <Logo />
            </Link>
            <Link
              className="navLink"
              to="/bio"
              activeClassName="font-light  text-red-block"
            >
              BIO
            </Link>
            <Link
              className="navLink"
              to="/portafolio"
              activeClassName=" font-light text-red-block"
            >
              PORTAFOLIO
            </Link>
            <Link
              className="navLink"
              to="/contact"
              activeClassName="font-light text-red-block"
            >
              CONTACTO
            </Link>
          </div>
          <div className="z-50 absolute right-4 md:hidden">
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
