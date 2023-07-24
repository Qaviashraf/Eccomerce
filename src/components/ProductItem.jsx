import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const ProductItem = ({ product }) => {
  return (
    <Link to={`/Productdetail/${product.id}`}>
      <div onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}
      className=" shadow-lg rounded-2xl bg-white cursor-pointer hover:shadow-xl transition duration-200">
        <img
          style={{
            width: "fit-contain",
            height: "320px",
          }}
          className="w-72"
          src={product.image}
          alt={product.name}
        />

        <h3 className="p-4 font-sans text-2xl w-72 truncate ">
          {product.name}
        </h3>
        <p className="p-4 font-sans text-2xl w-72">
          RS <span className="text-cyan-500">{product.price}</span>{" "}
        </p>
      </div>
    </Link>
  );
}
ProductItem.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
};
