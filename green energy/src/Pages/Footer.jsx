import { useGSAP } from '@gsap/react'
import React,{useRef} from 'react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const container = useRef()
    useGSAP(()=>{
        gsap.from(".footertext",{
            y:150,
            opacity:0,
            duration:1,
            delay:1,
            scrollTrigger: {
                trigger: container.current,
                scroller: "body",
                start: "top 100%",
                end: "top",
                scrub: true,
               
            }
        })
    })
    var tl = gsap.timeline()
    useGSAP(()=>{
        tl.from(".list",{
            x:150,
            opacity:0,
            scale:1,
            duration:1,
            delay:0.2,
            stagger:0.5,
           
        })
    })
  return (
    <div ref={container} className='container bg-dark text-light p-5'>
<div className='container d-flex align-items-center justify-content-between'>
    <div className='footertext p-3'>
        <h1>Its time to support zero pollution, <span>with renewable resources</span></h1>
        <p>Experienced for more than 10years    Support for the latest technology</p>
    </div>
    <div className='footertext p-3'>
        <p>By increasing the effectiveness and effiency of electricity use, the use of renewable resources is very profitable for all industrial services</p>

        <button className='btn btn-success'>Get in touch</button>
    </div>
</div>
<div className='container text-center'>
    <ul className='d-flex align-items-center justify-content-center gap-5 list-unstyled mt-5'>
        <li className='list'>Home</li>
        <li className='list'>About</li>
        <li className='list'>Services</li>
        <li className='list'>Contact</li>
    </ul>
</div>
<footer className=' footertext d-flex align-items-center justify-content-between mt-5'>
    <p>@2024,All rights are reserved</p>
    <p>Term of service   Privacy policy</p>
</footer>
    </div>
  )
}

export default Footer