import React from "react"
import { Link } from "gatsby"

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

export const NavbarDesktop = () => {
  return (
    <>
      <div className="fixed right-0 top-1/2 bg-transparent flex-grow w-full pr-2 2xl:pr-8 -mt-36 z-50 ">
        <div className="h-full flex flex-col items-end mx-auto w-full py-3">
          <NavLink to="" text="BIO" />
          <NavLink to="/portafolio" text="PORTAFOLIO" />
          <NavLink to="" text="CONTACTO" />
        </div>
      </div>
    </>
  )
}

export const NavbarMobile = () => {
  return (
    <div className="xl:hidden flex-grow  bg-black h-full flex flex-col items-center justify-around mx-auto w-full py-3 my-auto">
      <NavLink to="" text="BIO" />
      <NavLink to="/portafolio" text="PORTAFOLIO" />
      <NavLink to="" text="CONTACTO" />
    </div>
  )
}
