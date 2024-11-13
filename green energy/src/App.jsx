import React from 'react'
import "./App.css"
import "./index.css"
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Brands from "./Pages/Brands"
import Service from "./Pages/Service"
import Needs from "./Pages/Needs"
import "../node_modules/bootstrap/dist/js/bootstrap"
import Footer from './Pages/Footer'
import { animateScroll as scroll } from 'react-scroll';

const App = () => {
  scroll.scrollTo(-5, {
    duration:2000, // Adjust duration as needed
    smooth: true,
});
 
  return (
    <div>
      <NavBar />
      <Home />
      <Brands/>
      <Service/>
      <Needs/>
      <Footer/>

    </div>
  )
}

export default App