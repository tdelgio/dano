import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

import useTattoo from "../../../utils/useImages"
import Footer from "../../Footer"

const ItemListContainer = () => {
  const tattoo = useTattoo()
  const imageTattoo = tattoo[0]
  console.log(imageTattoo)

  return (
    <div className="px-2 h-full flex flex-col ">
      <div className=" z-10 overflow-x-scroll overscroll-x-contain flex items-center py-12">
        {imageTattoo.map(
          i =>
            i.description === "black" && (
              <div>
                <GatsbyImage
                  key={i.id}
                  image={i.gatsbyImageData}
                  alt="tattoo image"
                  className="my-8 lg:m-8   w-64 transform lg:hover:scale-150 hover:z-20"
                />
              </div>
            )
        )}
      </div>
      <div className=" z-10 overflow-x-scroll overscroll-x-contain flex items-center py-12 ">
        {imageTattoo.map(
          i =>
            i.description === "white" && (
              <div>
                <GatsbyImage
                  key={i.id}
                  image={i.gatsbyImageData}
                  alt="tattoo image"
                  className="my-8 lg:m-8  w-64 transform lg:hover:scale-150 hover:z-20 max-h-96"
                />
              </div>
            )
        )}
      </div>
      <div className=" z-10 overflow-x-scroll overscroll-x-contain flex items-center py-12 ">
        {imageTattoo.map(
          i =>
            i.description === "color" && (
              <div>
                <GatsbyImage
                  key={i.id}
                  image={i.gatsbyImageData}
                  alt="tattoo image"
                  className="my-8 lg:m-8  w-64 transform lg:hover:scale-150 hover:z-20 max-h-96"
                />
              </div>
            )
        )}
      </div>
    </div>
  )
}
export default ItemListContainer
