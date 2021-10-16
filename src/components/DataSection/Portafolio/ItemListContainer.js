import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

import useTattoo from "../../../utils/useImages"

const ItemListContainer = () => {
  const tattoo = useTattoo()
  const imageTattoo = tattoo[0]
  console.log(imageTattoo)

  return (
    <div className="z-0 py-4 px-2 mx-auto w-full">
      <ul className="flex flex-col items-center w-full justify-center lg:px-4 lg:flex-row lg:flex-wrap">
        {imageTattoo.map(i => (
          <GatsbyImage
            key={i.title}
            className="m-4 rounded-md shadow-card"
            image={i.gatsbyImageData}
            alt="tattoo image"
          />
        ))}
      </ul>
    </div>
  )
}
export default ItemListContainer
