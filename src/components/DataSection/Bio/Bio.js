import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  return (
    <div className="relative flex flex-col xl:block min-h-screen bg-black">
      <StaticImage
        alt="logo"
        height={1200}
        src="../../../images/1.jpg"
        className="max-h-screen transform -translate-x-24 max-w-full"
      />
      <p className="font-thin z-50 block text-gray-200 max-w-2xl absolute left-1/3 xl:left-1/2 xl:top-1/3 top-24 ">{`@danobiss·Danobis Sandoval - Tattooer From Colombia, working in Pereria (Colombia) // instagram @danobissandoval // facebook/danobissandoval // 3212644724 @danobiss·Danobis Sandoval - Tattooer From Colombia, working in Pereria (Colombia) // instagram @danobissandoval // facebook/danobissandoval // 3212644724`}</p>
    </div>
  )
}

export default Bio
