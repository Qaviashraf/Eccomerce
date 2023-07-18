import { useParams, useNavigate } from "react-router-dom"
import { categoriesList } from "./data.jsx" 
import { useState } from "react"
import { ProductItem } from "./ProductItem.jsx"



export const CategoriesDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const category = categoriesList[id-1]
  
  

  return (
    
    // <button>
      
    // </button>

    <div >
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            navigate(-1)
          }}>
           Back

      </button>
      <div className="flex flex-col judtify-center items-center">
      <h1 className="text-4xl mt-8 mb-8">Products</h1>
      <div className="grid grid-rows-2 grid-cols-2 gap-12 ">
        {category.products.map((product, index) => (
          <ProductItem key={index} product={product}/>
        ))}

      </div>
      <p className="text-2xl text-blue-600 mt-8 mb-8  cursor-pointer hover:bg-sky-700 ">More</p>
    </div>
    </div>
  )
} 