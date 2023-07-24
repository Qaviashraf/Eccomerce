// import './App.css'
import { useState , useEffect} from "react"
import {Home} from './components/Home'
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import {NavBar} from './components/nav&footer/NavBar'
import { Products } from './components/Products';
import { Cart } from './components/Cart';
import {Item} from '../src/components/Item'
// <<<<<<< main
import { CategoriesDetail } from "./components/CategoriesDetail";
import { ProductDetails } from "./components/ProductsDetail";
import { ProductProvider } from "./components/context/Productcontext";
// =======
import { Footer } from "./components/nav&footer/Footer";

// >>>>>>> main
// import {useEffect} from 'react';

function App() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  // const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  // const handleChange = (item,) => {
    // const ind = cart.indexOf(item);
    // const arr = [...cart];
    // arr[ind].amount += d;

    // if (arr[ind].amount === 0) arr[ind].amount = 1;
    // setCart([...arr]);
    
    const handleChange = (a,b, d) => {
      
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === a) {
          // If the IDs match, update the amount
          // cartItem.amount
          let newAmount =parseInt(b)+d;
          // let newamount = cartItem.amount;
          // let a=1;

          console.log(cartItem.amount)
          console.log(cartItem.id)
          // const newAmount = "cartItem.amount + 1";
          return {
            ...cartItem,
            amount: newAmount < 0 ? 0 : newAmount, // Ensure amount is non-negative
          };
        }
        return cartItem;
      });
    
      setCart(updatedCart);
    };
    
// console.log(items)

  return (
    
    <div>
      <ProductProvider>
      <div>
      <Router>
      
        <NavBar size={cart.length}/>
        {/* <Products  handleClick={handleClick}/> */}
        {/* <Cart cart={cart} setCart={setCart} handleChange={handleChange}/> */}
      <div>
      <Routes>
      
        <Route exact path="/"  element={<Home handleClick={handleClick}/>} />
        <Route exact path="/Cart" element={<Cart  cart={cart} setCart={setCart} handleChange={handleChange}/>} />
        <Route exact path="/Products" element={<Products handleClick={handleClick} />} />
        <Route exact path="/Item" element={<Item />} />
        <Route exact path="/Productdetail/:id" element={<ProductDetails handleClick={handleClick} />} /> 
        <Route exact path="/Categorydetail/:id" element={<CategoriesDetail/>} /> 
        
        </Routes>
        </div>
        <Footer/>
        
    </Router>  
    </div>
    </ProductProvider>
    </div>
  );
};

export default App
