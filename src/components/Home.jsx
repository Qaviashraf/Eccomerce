import {Slider} from './Slider'
// import {data} from '../data'
import {Categories} from './Categories'
import "./categories.css"
import { Products } from './Products'


export const Home = ({ handleClick }) => {
    // const {product} = data ;
    
    return(

        <div>
            
        <Slider/> 
        <Categories/>
        <Products handleClick={handleClick}/>
        </div> 
    
    
    )
}