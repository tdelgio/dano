import React from "react"
import { Link } from "gatsby"

import Footer from "../../Footer"
import { InstagramIcon } from "../../Icons"
import { StaticImage } from "gatsby-plugin-image"

const ContactForm = () => {
  return (
    <div className="bg-black h-screen">
      return (
      <>
        <div className="lg:relative top-0 lg:top-12 bottom-0 lg:-mt-16 mt-16 flex flex-col items-center justify-center h-full min-h-screen tracking-widest leading-6 bg-black text-gray-200">
          <div className="flex items-center justify-center flex-col mx-1 py-5  sm:py-10 tracking-widest border-2 bg-gray-dark  border-gray-dark rounded-lg shadow-lg lg:p-8">
            <div className="flex flex-col items-center md:flex-row align-center justify-center bg-gray-dark text-center xl:text-left sm:px-2 md:px-5 max-w-2xl">
              <p className="mx-9 font-extralight text-lg tracking-widest leading-6">
                ENVIA TU CONSULTA{" "}
              </p>
            </div>
            <div className="w-full flex flex-col py-4  z-30  space-y-6 max-w-2xl ">
              <form className="w-full flex flex-col px-6 space-y-4 py-4 text-gray-dark">
                <label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Nombre:"
                  ></input>
                </label>
                <label>
                  <input
                    className="input "
                    type="email"
                    placeholder="E-mail:"
                  ></input>
                </label>
                <textarea
                  className="input"
                  rows="4"
                  cols="50"
                  placeholder="Mensaje: "
                />
              </form>
              <div className="w-full text-white text-center ">
                <button className="border border-gray-dark text-sm font-light py-2 px-4 rounded-md">
                  ENVIAR{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="lg:hidden mx-auto pt-12">
            <InstagramIcon />
          </div>
        </div>
        <div className="absolute top-0 h-screen w-screen flex items-center justify-center">
          <StaticImage
            height={1563}
            src="../../../images/logo.png"
            alt="image"
            placeholder="tracedSVG"
            layout="constrained"
            className="transform scale-75 z-0 opacity-20 mx-auto"
          />
        </div>
      </>
      <Footer />
    </div>
  )
}

export default ContactForm
