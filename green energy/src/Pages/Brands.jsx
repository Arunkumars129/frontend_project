import { useGSAP } from '@gsap/react'
import React,{useRef} from 'react'
import gsap from "gsap"
import {ScrollTrigger} from "gsap/dist/ScrollTrigger"
import "../Styles/Brands.css"
gsap.registerPlugin(ScrollTrigger);

const Brands = () => {
 const container = useRef()   
useGSAP(()=>{
    var tl = gsap.timeline({ scrollTrigger:{
        trigger:container.current, scroller:"body",start:"top 95%",end:"top",scrub:true,
        
    }})
    tl.from(".content",{
        y:50,
        opacity:0,
        duration:1,
        delay:1,
        stagger:0.8,
       
         })
})

useGSAP(()=>{
    var tl = gsap.timeline({ scrollTrigger:{
        trigger:container.current,start:"top 95%",end:"top",scrub:true,
        
    }})
    tl.from(".circle",{
        x:-200,
        opacity:0,
        duration:0.8,
        delay:1,
        rotate:360,
        stagger:0.4,
        
    })


})


  return (
    <div className='container' ref={container}>
<div className=' p-5 d-flex align-items-center justify-content-between'>
    <h3 className='m-4 content'>Focusing on quality, <span style={{color:"lightgray"}}>we maintain customer trust</span></h3>
    <p className='m-4 content'>We ensure that every installation we build has strict quality checks.Sustainable solutions for an environmentally friendly and renewable future</p>
</div>
<div className='d-flex align-items-center justify-content-between text-center m-5'>
    <div className='circle' ><img src="src/assets/trends.png" alt="" /></div>
    <div className='circle'><img src="src/assets/telia.png" alt="" /></div>
    <div className='circle'><img src="src/assets/head.png" alt="" /></div>
    <div className='circle'><img src="src/assets/metronic.png" alt="" /></div>
    <div className='circle'><img src="src/assets/tata.png" alt="" /></div>
</div>

    </div>
  )
}

export default Brands