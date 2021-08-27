import React from "react"
import { Link } from "gatsby"

const NavLink = ({ url, text }) => (
  <>
    <Link to={url} className="py-2 shadow-lg text-gray-400 text-xl">
      {text}
    </Link>
  </>
)

export const NavbarDesktop = () => {
  return (
    <>
      <div className="flex-grow bg-gradient-to-t from-black to-gray-900 w-full lg:px-20 xl:text-2xl shadow-xl">
        <div className="h-full flex flex-col lg:flex-row  items-center justify-around mx-auto w-full max-w-5xl py-3">
          <NavLink to="" text="BIO" />
          <NavLink to="" text="PORTAFOLIO" />
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
      <NavLink to="" text="PORTAFOLIO" />
      <NavLink to="" text="CONTACTO" />
    </div>
  )
}
