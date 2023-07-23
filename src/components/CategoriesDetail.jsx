import { useParams, useNavigate } from "react-router-dom"
import { categoriesList } from "./data.jsx" 
import { useState } from "react"
import { ProductItem } from "./ProductItem.jsx"
import { useContext } from "react"
import { ProductContext } from "./context/Productcontext.jsx"


export const CategoriesDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { setitems } = useContext(ProductContext)


  const category = categoriesList[id-1]
  // const routeToProductDetail = () => {
    setitems(category.products)
  //   navigate("/Productdetail/:id")
  // }
  
// const top =  () => {
//   ( window.scrollTo({top: 0, left: 0, behavior: 'smooth'}));
// }


  return (
    

    <div  >
      
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
      <p className="text-2xl text-blue-600 mt-8 mb-8  cursor-pointer hover:bg-blue-700 ">More</p>
    </div>
    </div>
  )
} 