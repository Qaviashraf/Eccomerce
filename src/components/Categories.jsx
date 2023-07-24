import Clothes from "../assets/Clothes (2).png"
import Shoes from "../assets/Shoes (2).png"
import Watches from "../assets/Watches (2).png"
import Accessories from "../assets/Accessories (2).png"
import "./categories.css"
import { Link } from "react-router-dom"

export const Categories = () => {
    
    return (
        <>

        <h2 className='heading-1'>Categories</h2>
        <div className="categories">
        
        <Link to={`/Categorydetail/${1}`}>
            <div onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}>
            <img  className="item-1" src={Clothes} alt="" />
            <button className="Btn Btn1">Clothing</button>
            </div>
            </Link>  

            <Link to={`/Categorydetail/${2}`}>
            <div onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}>
            <img className="item-2" src={Shoes} alt="" />
            <button className="Btn Btn2">Shoes</button>
            </div>
            </Link> 
            <Link to={`/Categorydetail/${4}`}>
            <div onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}>
            <img className="item-3" src={Watches} alt="" />
            <button  className="Btn Btn3">Watches</button>
            </div>
            </Link> 
            <Link to={`/Categorydetail/${3}`}>
            <div onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}>
            <img className="item-4" src={Accessories} alt="" />
            <button className="Btn Btn4">Accessories</button>
            </div>
            </Link> 

    </div>
    </>
    )
 }