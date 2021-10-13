import React from "react"
import { Link } from "gatsby"

import Footer from "../../Footer"
import { InstagramIcon } from "../../Icons"

const ContactForm = () => {
  return (
    <div className="bg-black h-screen">
      return (
      <>
        <div className="-mt-16 flex flex-col items-center justify-center h-full min-h-screen tracking-widest leading-6 bg-black text-gray-200">
          <div className="flex justify-center flex-col mx-1 mt-1 py-5 md:py-10 tracking-widest border-2 border-gray-dark rounded-lg shadow-lg lg:p-8">
            <div className="flex flex-col items-center md:flex-row align-center justify-center text-center xl:text-left sm:px-2 md:px-5 max-w-2xl">
              <p className="mx-9 pt-5 font-extralight text-lg tracking-widest leading-6">
                ENVIA TU CONSULTA{" "}
              </p>
            </div>
            <div className="w-full flex flex-col py-4 z-30  space-y-6 max-w-2xl ">
              <form className="w-full flex flex-col px-6 space-y-8 py-4 text-gray-dark">
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
      </>
      <Footer />
    </div>
  )
}

export default ContactForm
