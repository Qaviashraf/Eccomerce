import {Slider} from './Slider'
// import {data} from '../data'
import {Categories} from './Categories'
import "./categories.css"
import { Products } from './Products'
import {useEffect} from 'react';



export const Home = ({ handleClick }) => {
    // const {product} = data ;
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    
    return(

        <div>
            
        <Slider/> 
        <Categories/>
        <Products handleClick={handleClick}/>
        </div> 
    
    
    )
}