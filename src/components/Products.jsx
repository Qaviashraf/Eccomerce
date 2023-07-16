import list from "../data";
import {Item} from './Item'
import "./item.css"
import {Cart} from './Cart'

export const  Products = ({ handleClick }) => {
   
  
    return(
        <div className='block col-2'>
            <h1 className='heading-1'>Products</h1>
        <div className="row">
        {list.map((item) => (
        <Item  key={item.id} item={item} handleClick={handleClick}/>
        ))}
        </div>
        </div>
    )
}


