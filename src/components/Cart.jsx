import { useState , useEffect} from "react"
import {Item} from './Item'
import { Products } from "./Products"
import "./cart.css"
export const Cart = ({cart, setCart, handleChange}) => {

    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
      const arr = cart.filter((item) => item.id !== id);
      setCart(arr);
      handlePrice();
    };
  
    const handlePrice = () => {
      let ans = 0;
      cart.map((item) => (ans += (item.amount * item.price)));
      setPrice(ans);
      // console.log(ans)
    };
  
    useEffect(() => {
      handlePrice();
    });
    
    return(
      
        <div className="cart-containner">
          <h1 className="heading-1">Cart</h1>
        {cart.map((item) => (
          <div className="cart-box" key={item.id}>
            <div className="cart-img">
              <img src={item.image} alt="" />
              <p>{item.name}</p>
            </div>
            <div>
              <button className="qty-Btn" onClick={() => handleChange(item.id,item.amount, 1)}>+</button>
              <button className="qty-Btn" >{item.amount}</button>
              <button className="qty-Btn" onClick={() => handleChange(item.id,item.amount, -1)}>-</button>
            </div>
            <div>
              <span className="price">{item.price}</span>
              <button  className="remove-Btn" onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="total">
          <span className="heading-2">Total Amount : </span>
          <span className="amount">Rs - {price}</span>
          <button className="payment-Btn">Payment</button>
        </div>
        {/* <button className="payment-Btn">Payment</button> */}
      </div>
    )
}



