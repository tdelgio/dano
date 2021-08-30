import React from "react"
import Item from "./Item"

const products = [
  {
    id: 1,
    image: `"../../images/1.jpg"`,
    stock: 4,
  },
  {
    id: 2,
    image: `"../../images/2.jpg"`,
    stock: 3,
  },
  {
    id: 3,
    image: `"../../images/3.jpg"`,
    stock: 10,
  },
  {
    id: 4,
    image: `"../../images/4.jpg"`,
    stock: 10,
  },
]

// const items = [
//   fetch("https://cruce-app.herokuapp.com/products").then((data) =>
//     data
//       .json()
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   ),
// ];

const ItemList = () => (
  <>
    {products.map(i => (
      <Item key={i.id} stock={i.stock} srcImg={i.image} />
    ))}
  </>
)

// let loadItem = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("resultado");
//   }, 3000);
// });

const ItemListContainer = () => {
  return (
    <div className="py-4 px-2 h-full border-b border-gray-300 mx-auto">
      <ul className="flex flex-col items-center min-w-md justify-center lg:px-4 lg:flex-row lg:flex-wrap w-full">
        <ItemList />
      </ul>
    </div>
  )
}

export default ItemListContainer
