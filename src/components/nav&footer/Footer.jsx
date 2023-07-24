import "./footer.css"
import { NavLink } from "react-router-dom"
import {TfiLocationPin} from "react-icons/Tfi"
import {TfiEmail} from "react-icons/Tfi"
import {BsTelephone} from "react-icons/Bs"
import {LiaFacebookF} from "react-icons/Lia"
import {GrTwitter} from "react-icons/Gr"
import {LiaInstagram} from "react-icons/Lia"
import {AiOutlineCopyrightCircle} from "react-icons/Ai"
import {BsArrowUpSquareFill} from "react-icons/Bs"


export const Footer = () => {
    return(
        <footer className="footer">
            <div className="row">        
                    <div className="col-1" >
                        <NavLink exact to="/" className="company">
                        Claue
                        </NavLink>
                        <div className="address">
                        <TfiLocationPin className="abouticons"/>
                        <p >184 Main Rd E, St Albans VIC 3021, Australia </p>
                        </div>
                        <div className="email">
                        <TfiEmail className="abouticons"/>
                        <p>contact@company.com</p></div>
                        <div className="num">
                        <BsTelephone className="abouticons"/> <p> +001 2233 456</p></div>
                        <div className="social-links">
                        <LiaFacebookF className="social-link"/> <GrTwitter className="social-link"/> <LiaInstagram className="social-link"/>
                        </div>
                    </div>
                    
                    <div className="col-2 ">
                         <h2>Categories</h2>
                         <div>
                         <a href=""><h3>Men</h3></a>
                         <a href=""><h3>Women</h3></a>
                         <a href=""><h3>Shoes</h3></a>
                         <a href=""><h3>Dress</h3></a>
                        </div>
                    </div>
                    <div className="col-2">
                         <h2>Information</h2>
                         <div >
                         <a href=""><h3>About Us</h3></a>
                         <a href=""><h3>Contact Us</h3></a>
                         <a href=""><h3>Returns & Exchanges</h3></a>
                         <a href=""><h3>Shipping & Delivery</h3></a>
                        </div>
                    </div> 
                    <div className="col">
                    <h3>Subscribe to our newsletter and get <br/>10% off your first purchase</h3>
                    <div className="col-input">
                    <input type="text" placeholder="  Enter your email address"  className="text-black"/>
                    <button className="sub text-black">Subscribe</button>
                    </div>
                    <BsArrowUpSquareFill className="scroll" onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}/>
                    </div>
            </div>
            <div className="copyrights">
                <div className="copyrights-1">
                <AiOutlineCopyrightCircle className="copy-icon"/>
                <h3>2023 Copyright By Mern Genius</h3>
                </div>
                <div className="copyrights-2">
                    <h3>Blogs</h3>
                    <h3>Shop</h3>
                    <h3>Contact</h3>
                    <h3>About Us</h3>
                </div>
            </div>
          </footer>
    )
}