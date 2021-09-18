import React from "react"
import { StaticImage } from "gatsby-plugin-image"


import Footer from "../../Footer"

const Item = ({ image }) => (
  <div className="flex flex-col items-center justify-between my-4 mx-8 h-full lg:w-80 shadow-md rounded-md max-w-md w-full">
    <li className="h-full w-full">
      <StaticImage
        src="../../../images/6.jpg"
        placeholder="blurred "
        alt="item"
        height={400}
        className="w-full h-80"
      />
    </li>
    <Footer />
  </div>
)
export default Item
