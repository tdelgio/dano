import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import Footer from "../../Footer"

const Item = ({ image }) => (
  <>
    <div className="flex flex-col items-center justify-between my-4 mx-8 h-full lg:w-80 shadow-md rounded-md max-w-md w-full">
      <li className="h-full w-full mx-auto">
        <GatsbyImage
          src={image}
          placeholder="blurred "
          alt="item"
          height={400}
          className="w-full h-70 rounded-t-md"
        />
      </li>
    </div>
    <Footer />
  </>
)
export default Item
