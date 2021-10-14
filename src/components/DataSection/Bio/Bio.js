import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  return (
    <div className="relative flex flex-col xl:block min-h-screen bg-black">
      <div className="flex flex-wrap w-full">
        <StaticImage
          alt="logo"
          height={1200}
          src="../../../images/12.jpg"
          className="h-screen transform -translate-x-4 md:-translate-x-12 w-full mt-14"
        />
        <div className="absolute top-0 bottom-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:px-12  font-thin text-gray-200 w-full">
          <p className="max-w-md">{`@danobiss·Danobis Sandoval - Tattooer From Colombia, working in Pereria (Colombia) // instagram @danobissandoval // facebook/danobissandoval // 3212644724 @danobiss·Danobis Sandoval - Tattooer From Colombia, working in Pereria (Colombia) // instagram @danobissandoval // facebook/danobissandoval // 3212644724`}</p>
          <p className="max-w-md">{`@danobiss·Danobis Sandoval - Tattooer From Colombia, working in Pereria (Colombia) // instagram @danobissandoval // facebook/danobissandoval // 3212644724 @danobiss·Danobis Sandoval - Tattooer From Colombia, working in Pereria (Colombia) // instagram @danobissandoval // facebook/danobissandoval // 3212644724`}</p>
        </div>
      </div>
    </div>
  )
}

export default Bio
