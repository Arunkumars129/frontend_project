import React from 'react'
import "../Styles/Home.css"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Home = () => {
useGSAP(()=>{
  gsap.from(".heading",{
    y:90,
    opacity:0,
    duration:3,
    delay:1
  })
})
useGSAP(()=>{
  gsap.from(".value",{
    y:90,
    opacity:0,
    duration:3,
    delay:1
  })
})
 
  return (
    <div className='Home container p-3'>
      <div className='home container'>
        <div  className="heading">
        <h6>#1 Energy provider in the world</h6>
        <h1 className='energy'>New Energy For The Future</h1>
        <button className='btn btn-success'>Get in touch</button>
        <button className='btn btn-success m-2'>Services</button>
        </div>
       <span className='radius'></span>
      </div>
      
      <div className=' value'>
        <div className="row text-center ">
          <div className="col-4">
            <div className="card homecard">
              <div className="card-body">
                <h1>6mil</h1>
                <p>The company's annual net income</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card homecard">
              <div className="card-body">
                <h1>315</h1>
                <p>Projects completed worldwide</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card homecard">
              <div className="card-body">
                <h1>120K</h1>
                <p>Empolyees work in all parts of the world</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home