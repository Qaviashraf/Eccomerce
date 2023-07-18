import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export const ProductItem = ({ product }) => {
  return (
    <Link to={`/Productdetail/${product.id}`}>
      <div className=" shadow-lg rounded-2xl bg-white cursor-pointer hover:shadow-xl transition duration-200">
        
        <img
          style={{
          width : "fit-contain",
            height : "280px"
            
          }}
          className="w-72"
          src={product.image}
          alt={product.name}
        />
        
        <h3 className="p-4 font-sans text-2xl w-72 truncate ">{product.name}</h3>
        <p className="p-4 font-sans text-2xl w-72">Price{product.price} </p>
      </div>
    </Link>
  )
}

ProductItem.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
}
