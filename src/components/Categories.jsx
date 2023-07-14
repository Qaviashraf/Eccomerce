import Clothes from "../assets/Clothes (2).png"
import Shoes from "../assets/Shoes (2).png"
import Watches from "../assets/Watches (2).png"
import Accessories from "../assets/Accessories (2).png"
import "./categories.css"

export const Categories = () => {
    return (
        <>
        {/* <hr /> */}
        <h2 className='heading-1'>Categories</h2>
        <div className="containner">
        {/* <div className="item-1"> */}
            
            <img className="item-1" src={Clothes} alt="" />
            <button className="Btn Btn1">Clothing</button>
        {/* </div> */}
        {/* <div className="item-2"> */}
            <img className="item-2" src={Shoes} alt="" />
            <button className="Btn Btn2">Shoes</button>
        {/* </div> */}
        {/* <div className="item-3"> */}
            <img className="item-3" src={Watches} alt="" />
            <button  className="Btn Btn3">Watches</button>
        {/* </div>  */}
         {/* <div className="item-4">  */}
            <img className="item-4" src={Accessories} alt="" />
            <button className="Btn Btn4">Accessories</button>
          {/* </div>  */}

    </div>
    </>
    )
 }