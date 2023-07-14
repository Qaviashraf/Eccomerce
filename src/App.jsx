// import './App.css'
import {Home} from './components/Home'
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import {NavBar} from './components/nav&footer/NavBar'
import { Products } from './components/Products';
import { Cart } from './components/Cart';
function App() {

  return (
    <div>
    {/* // <div className='App'> */}
      {/* <Home/> */}
      {/* <NavBar /> */}
      

      <Router>
        <NavBar />
      <div>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/Cart" Component={Cart} />
        <Route exact path="/Products" Component={Products} />
        </Routes>
    </div>
    </Router>
    </div>
  );
}

export default App
