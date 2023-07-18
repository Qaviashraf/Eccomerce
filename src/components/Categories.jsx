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
        <div className="containner">
        
        <Link to={`/Categorydetail/${1}`}>
            <img  className="item-1" src={Clothes} alt="" />
            <button className="Btn Btn1">Clothing</button>
            </Link>  

            <Link to={`/Categorydetail/${2}`}>
            <img className="item-2" src={Shoes} alt="" />
            <button className="Btn Btn2">Shoes</button>
            </Link> 
            <Link to={`/Categorydetail/${4}`}>
            <img className="item-3" src={Watches} alt="" />
            <button  className="Btn Btn3">Watches</button>
            </Link> 
            <Link to={`/Categorydetail/${3}`}>
            <img className="item-4" src={Accessories} alt="" />
            <button className="Btn Btn4">Accessories</button>
            </Link> 

    </div>
    </>
    )
 }