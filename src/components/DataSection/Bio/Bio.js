import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Logo from "../../Logo"
import useText from "../../../utils/useTexts"

const Bio = () => {
  const data = useText()
  const { textPrimary, title, textSecondary, textRich } = data[0]

  return (
    <div className="relative flex flex-col xl:block min-h-screen bg-black">
      <div className="flex flex-wrap w-full">
        <StaticImage
          alt="logo"
          height={1200}
          src="../../../images/12.jpg"
          className="fixed h-screen transform md:-translate-x-12 w-full mt-14"
        />
        <div className="absolute top-16 right-0 left-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:px-12  font-thin text-gray-200 w-full">
          <Logo heigth="h-96" width="w-96" classCustom="opacity-20" />
          <div className="max-w-sm backdrop-filter backdrop-blur-md p-4">
            <h2 className="text-xl text-gray-400">{title}</h2>
            <hr className="my-2 w-full border-red-dark" />
            <h3>{textPrimary}</h3>
            <p>{textSecondary}</p>
            <p>{textRich}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio
