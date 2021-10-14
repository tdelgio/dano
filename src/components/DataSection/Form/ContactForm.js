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
        <div className="lg:relative top-0 lg:top-10 bottom-0 lg:-mt-16 mt-16 flex flex-col items-center justify-center h-full min-h-screen tracking-widest leading-6 bg-black text-gray-200">
          <div className="z-40 opacity-90 flex items-center justify-center flex-col mx-1 py-5  sm:py-10 tracking-widest border-2 border-gray-dark backdrop-filter backdrop-blur-md rounded-sm shadow-lg lg:p-8 max-w-md ">
            <div className="flex flex-col items-center md:flex-row align-center justify-center text-center xl:text-left sm:px-2 md:px-5 max-w-2xl">
              <p className="mx-9 font-light text-lg tracking-widest leading-6">
                ENVIA TU CONSULTA{" "}
              </p>
            </div>
            <div className="w-full flex flex-col py-4  z-30  space-y-6 max-w-2xl ">
              <form className=" w-full flex flex-col px-6 space-y-4 py-4 text-gray-300">
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
                <button className="tracking-widest border border-gray-dark bg-gray-dark text-gray-300 hover:text-red-block hover:scale-105 text-sm font-light py-2 px-4 rounded-md shadow-md">
                  ENVIAR{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="lg:hidden mx-auto pt-12">
            <InstagramIcon />
          </div>
        </div>
        <div className="absolute top-0 h-screen w-screen flex items-center mr-auto">
          <StaticImage
            height={1563}
            src="../../../images/logo.png"
            alt="image"
            placeholder="tracedSVG"
            layout="constrained"
            className="transform scale-75 z-0 mx-auto opacity-20 "
          />
        </div>
      </>
      <Footer />
    </div>
  )
}

export default ContactForm
