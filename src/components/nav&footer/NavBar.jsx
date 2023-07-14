import { NavLink } from "react-router-dom"
import React, { useState} from "react"
import "./NavBar.css"
import {HiMenu} from "react-icons/Hi"
import {BsCart3} from "react-icons/Bs"

export const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {setClick(!click);}
    return (
        <>
          <nav className="navbar">
           <div className="navcontainner">
          
           <ul className={click ? "nav-menu active" : "nav-menu"}>
           <NavLink
                exact
                to="/Cart"
                className="nav-cart"
              >
                Cart
              </NavLink>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Products"
                className="nav-links"
              >
                Products
              </NavLink>
            </li>
      
            </ul>
            <NavLink exact to="/" className="nav-logo">
                Claue
            </NavLink>
          <div className="cart-icon">
            <BsCart3/>
          </div>
          <div className="nav-icon" onClick={handleClick}>
          <HiMenu />
          </div>
           </div>
          </nav>
        </>
    )
}