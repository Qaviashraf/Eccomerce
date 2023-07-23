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
        
        {/* <Link className="item-1" to={`/Categorydetail/${1}`}> */}
            <img  className="item-1" src={Clothes} alt="" />
            <Link className="link Btn1"  to={`/Categorydetail/${1}`}>
            <button className="Btn Btn1" >Clothing</button>
            </Link>  

            {/* <Link className="item-2" to={`/Categorydetail/${2}`}> */}
            <img className="item-2" src={Shoes} alt="" />
            <Link className="link Btn2" to={`/Categorydetail/${2}`}>
            <button className="Btn Btn2">Shoes</button>
            </Link> 
            {/* <Link className="item-3" to={`/Categorydetail/${4}`}> */}
            <img className="item-3" src={Watches} alt="" />
            <Link className="link Btn3" to={`/Categorydetail/${4}`}>
            <button  className="Btn Btn3">Watches</button>
            </Link> 
            {/* <Link className="item-4" to={`/Categorydetail/${3}`}> */}
            <img  className="item-4" src={Accessories} alt="" />
            <Link className="link Btn4" to={`/Categorydetail/${3}`}>
            <button className="Btn Btn4">Accessories</button>
            </Link> 

    </div>
    </>
    )
 }