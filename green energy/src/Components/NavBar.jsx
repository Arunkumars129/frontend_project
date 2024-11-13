import React from 'react'
import "../Styles/Navbar.css"
import { useGSAP } from '@gsap/react';
import gsap from "gsap"

const NavBar = () => {
  var tl = gsap.timeline()
    useGSAP(()=>{
        tl.from("nav",{
            x:50,
            opacity:0,
            duration:1,
            delay:0.5,
            stagger:0.3
        })
    })


  return (
    <div className='container'>
        <nav className='d-flex align-items-center justify-content-between mt-3'>
          <h3>EnergyBro</h3>
          <ul className='d-flex align-items-center justify-content-center gap-5 list-unstyled'>
        <li className='list'>Home</li>
        <li className='list'>About</li>
        <li className='list'>Services</li>
        <li className='list'>Contact</li>
    </ul>
    <div>
    <button className='btn btn-success me-3'>Login</button>
    <button className='btn btn-success'>Get in touch</button>
   
    </div>
        </nav>
    </div>
  )
}

export default NavBar