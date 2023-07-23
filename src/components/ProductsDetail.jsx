import { useParams, useNavigate } from "react-router-dom"
import "./item.css"
import { ProductItem } from "./ProductItem.jsx"
import { useContext } from "react"
import { ProductContext } from "./context/Productcontext.jsx"

export const ProductDetails = ({handleClick}) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { items } = useContext(ProductContext)
  const { setitems } = useContext(ProductContext)
console.log({items})
  const item = items[id - 1];
  
 const moreitems=(items.filter((e)=>e.id!==item.id ))
console.log({moreitems})
  return (
    <div>
      <div className=" grid grid-cols-4 gap-4 justify-items-start bg-black mb-24 p-5 font-bold">
        <div onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded  "
          onClick={() => {
            navigate(-1)
          }}
        >
          Back
        </button>
        </div>
        
        <h2 className="text-4xl  text-white col-span-3  "  >{item.name}</h2>
      
      </div>
<div className="">
      <div className="grid grid-cols-2 mx-12  mb-24 gap-1">
        <div>
          <img
            style={{
              width : "80%",
            height : "400px"
            }}
            src={item.image}
            alt={item.name}
          />
        </div>

        <div className="font-bold mr-4">
          <h1 className="text-4xl mt-8 mb-8">{item.name}</h1>
          <p className="text-3xl my-8 mb-8 "> RS  <span className="text-cyan-500">{item.price}</span></p>
          <p className="mb-8">  {item.detail}</p>
          <button className= "bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded  " onClick={() => handleClick(item)}>
            ADD TO CART
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center ">
      <h1 className="text-2xl text-blue-600 mt-8 mb-8  cursor-pointer hover:bg-blue-700 ">More Related</h1>
      <div className="grid grid-rows-1 grid-cols-3 gap-4">
        {moreitems.map((item, index) => (
          <ProductItem key={index} product={item} />
        ))}
      </div>
    </div>
    </div>
    </div>
    
  )
}
