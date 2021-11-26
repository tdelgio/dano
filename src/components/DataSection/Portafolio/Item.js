import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import Footer from "../../Footer"

const Item = ({ image }) => (
  <>
    <div className="flex flex-col items-center justify-between my-4 mx-8 h-full border-2 shadow-md   focus-within:w-full">
      <GatsbyImage src={image} placeholder="blurred " alt="item" />
    </div>
    <Footer />
  </>
)
export default Item
