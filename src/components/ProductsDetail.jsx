import { useParams, useNavigate } from "react-router-dom"
import { categoriesList } from "./data.jsx"
import { useState } from "react"
import { ProductItem } from "./ProductItem.jsx"

export const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const item = categoriesList[id - 1]
  
  const moreitems = categoriesList.filter((e)=>e.id!==id )

  return (
    <div>
      <div className="flex justify-between items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            navigate(-1)
          }}
        >
          Back
        </button>
        <h1 className="text-4xl mt-8 mb-8">{item.products.name}</h1>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img
            style={{
              objectFit: "contain"
            }}
            src={item.products.image}
            alt={item.products.name}
          />
        </div>

        <div>
          <h1 className="text-4xl mt-8 mb-8">{item.products.name}</h1>
          <p className="detailtext"> RS {item.products.price}</p>
          <p className="detailtext"> RS {item.products.detail}</p>
        </div>
      </div>

      <div>
      <h1 className="text-4xl mt-8 mb-8">More Related</h1>
      <div className="grid grid-rows-1 grid-cols-3 gap-4">
        {moreitems.map((item, index) => (
          <ProductItem key={index} product={item} />
        ))}
      </div>
    </div>
    </div>
  )
}
