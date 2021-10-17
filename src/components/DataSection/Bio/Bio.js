import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Logo from "../../Logo"
import useText from "../../../utils/useTexts"

const Bio = () => {
  const data = useText()
  const { title, textPrimary, textSecondary } = data[0]

  return (
    <div className="relative flex flex-col xl:block min-h-screen bg-black ">
      <div className="flex flex-wrap w-full h-full">
        <div className="fixed top-10 w-full">
          <StaticImage
            alt="logo"
            height={1200}
            src="../../../images/12.jpg"
            className="h-screen transform md:-translate-x-12 w-full mt-14"
          />
        </div>

        <div className="absolute top-20 lg:top-0 right-0 left-0 lg:h-full w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:px-12  font-thin text-gray-200">
          <Logo
            heigth="h-96"
            width="w-80"
            classCustom="opacity-40 shadow-lg lg:transform xl:scale-150 xl:translate-x-8 2xl:translate-x-16"
          />
          <div className="max-w-sm backdrop-filter backdrop-blur-md space-y-2 p-4">
            <h2 className="text-xl text-gray-400">{title}</h2>
            <hr className="my-2 w-full border-red-dark" />
            <h3>{textPrimary}</h3>

            <p className="font-light ">
              Estudios donde tatuamos durante
              <br /> nuestro art{" "}
              <span className="text-red-block font-light">&</span> trip:
            </p>
            <p>{textSecondary}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio
