import React from "react"

import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <StaticImage
        src="../images/hero.JPG"
        width={2304}
        height={1537}
        placeholder="tracedSVG"
        style={{ width: "100%" }}
      />
    </div>
  )
}

export default Hero
