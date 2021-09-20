import React from "react"
import { Link } from "gatsby"

const ContactForm = () => {
  return (
    <div className="bg-black h-screen">
      return (
      <>
        <div className="flex flex-col items-center justify-center h-full min-h-screen tracking-widest leading-6 bg-black text-gray-200">
          <div className="flex justify-center flex-col py-5 md:py-10 tracking-widest ">
            <div className="flex flex-col items-center md:flex-row align-center justify-center text-center xl:text-left sm:px-2 md:px-5 max-w-2xl">
              <p className="mx-9 pt-5 font-light text-lg tracking-widest leading-6">
                ENVIA TU CONSULTA{" "}
              </p>
            </div>
            <div className="w-full flex flex-col py-4 z-30  space-y-6 max-w-2xl ">
              <form className="w-screen sm:w-full flex flex-col px-6 space-y-8 py-4">
                <label>
                  <input
                    className="font-extralight w-full border-b-2 border-gray-400 py-1 px-2  "
                    type="text"
                    placeholder="Nombre:"
                  ></input>
                </label>
                <label>
                  <input
                    className="font-extralight w-full border-b-2 border-gray-400 py-1 px-2 "
                    type="email"
                    placeholder="E-mail:"
                  ></input>
                </label>
                <textarea
                  className="font-extralight pt-1 px-2 "
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
          <div className="my-2 text-center w-full bg-black">
            <Link className="text-white hover:text-yellowFont" to="/">
              Volver al Inicio
            </Link>{" "}
          </div>
        </div>
      </>
      ) } export default Contact
    </div>
  )
}

export default ContactForm
