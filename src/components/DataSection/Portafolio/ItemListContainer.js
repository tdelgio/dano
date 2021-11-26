import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

import useTattoo from "../../../utils/useImages"
import Footer from "../../Footer"

const ItemListContainer = () => {
  const tattoo = useTattoo()
  const imageTattoo = tattoo[0]
  // console.log(imageTattoo)

  return (
    <div className="z-0 pb-4 px-2 lg:mt-20 mx-auto w-full h-full">
      <ul className="flex flex-col items-center w-full h-full justify-center lg:px-4 lg:flex-row lg:flex-wrap">
        {imageTattoo.map(i => (
          <>
            <GatsbyImage
              key={i.id}
              className="m-4 my-16 lg:m-16 max-h-96"
              image={i.gatsbyImageData}
              alt="tattoo image"
            />
          </>
        ))}
      </ul>
    </div>
  )
}
export default ItemListContainer
