import { NavLink } from "react-router-dom"
import React, { useState} from "react"
import "./NavBar.css"
import {HiMenu} from "react-icons/Hi"
import {BsCart3} from "react-icons/Bs"

export const NavBar = ({size}) => {
  const [click, setClick] = useState(false);

  const handleClick = () => {setClick(!click);  }
  
    return (
        <>
          <nav className="navbar">
           <div className="navcontainner">
          
           <ul className={click ? "nav-menu active" : "nav-menu"}>
           <NavLink
                exact
                to="/Cart"
                className="nav-cart"
                onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}
              >
                Cart
              </NavLink>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links"
                onClick={() => {
                  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Products"
                className="nav-links"
                onClick={() => {
                  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                }}
              >
                Products
              </NavLink>
            </li>
      
            </ul>
            <NavLink exact to="/" className="nav-logo" onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}>
                Claue
            </NavLink>
            <NavLink 
            exact to ="/Cart"
            className="cart-icon">
          
            <BsCart3  onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}/>
            <span className="cart-no">{size}</span>
          
          </NavLink>
          <div className="nav-icon" onClick={handleClick } >
          <HiMenu />
          </div>
           </div>
          </nav>
        </>
    )
}