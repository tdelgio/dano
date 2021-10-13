import React, { useEffect, useState } from "react"
import Item from "./Item"

import { getTattoos } from "../../../utils/promises"
import { useStaticQuery } from "gatsby"

const ItemList = ({ tattoos }) => (
  <>
    {tattoos.map(i => (
      <Item
        key={i.id}
        image={i.url}
        description={i.description}
        title={i.title}
      />
    ))}
  </>
)

const ItemListContainer = () => {
  const [tattoos, setTattoos] = useState([])
  // console.log(tattooQuery)

  useEffect(() => {
    getTattoos.then(response => {
      setTattoos(response)
      // setLoading(false)
      // console.log(tattoos)
    })
  })

  return (
    <div className="z-0 py-4 px-2 mx-auto w-full">
      <ul className="flex flex-col items-center w-full justify-center lg:px-4 lg:flex-row lg:flex-wrap">
        <ItemList tattoos={tattoos} />
      </ul>
    </div>
  )
}
export default ItemListContainer
