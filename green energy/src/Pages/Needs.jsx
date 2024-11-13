import React,{useRef} from 'react'
import "../Styles/Needs.css"
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

const Needs = () => {
    const container = useRef()
    useGSAP(()=>{
        gsap.from(".needtext",{
            y:100,
            opacity:0,
            duration:1,
            delay:0.5,
            scrollTrigger: {
                trigger: container.current,
                scroller: "body",
                start: "top 60%",
                end: "top",
                scrub: true,
                
            }
        })
    })
    useGSAP(()=>{
        gsap.from(".needimg",{
            y:100,
            opacity:0,
            scale:0.5,
            duration:1,
            delay:0.5,
            scrollTrigger: {
                trigger: container.current,
                scroller: "body",
                start: "top 60%",
                end: "top",
                scrub: true,
               
            }
        })
    })
    useGSAP(()=>{
        gsap.from(".needcard",{
            x:100,
            opacity:0,
            scaleY:1,
            duration:1.5,
            delay:1,
            scrollTrigger: {
                trigger: container.current,
                scroller: "body",
                start: "top 90%",
                end: "top",
                scrub: true,
            
            }
        })
    })
    return (
        <div ref={container} className='container mt-3 '>
            <div className="row mt-5">
                <div className="col-lg-6">
                    <h1 className='needtext'>Trusted service,   <span style={{ color: "lightgray" }}>for your various needs</span></h1>
                    <button className='btn btn-success mt-4 needtext'>Get in touch</button>
                    <div className="row mt-5 w-75 ">
                        <div className="col-lg-6">
                            <div className="card needcard">
                            <div className="card-body">
                                <h4 style={{ color: "lightgray" }}>01</h4>
                                <h4>Solar pannels for home</h4>
                                <a href="">View Details</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card needcard">
                            <div className="card-body">
                                <h4 style={{ color: "lightgray" }}>02</h4>
                                <h4>Solar pannels for industry</h4>
                                <a href="">View Details</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6 mt-3">
                            <div className="card needcard">
                            <div className="card-body">
                                <h4 style={{ color: "lightgray" }}>03</h4>
                                <h4>Solar pannels for chargers</h4>
                                <a href="">View Details</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6 mt-3">
                            <div className="card needcard">
                            <div className="card-body">
                                <h4 style={{ color: "lightgray" }}>04</h4>
                                <h4>Wind power generator</h4>
                                <a href="">View Details</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 text-center m-0">
<img src="src/assets/solarpanel.jpg" className='needimg' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Needs