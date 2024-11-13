import React,{useRef} from 'react'
import "../Styles/Service.css"
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
    const container = useRef()

    useGSAP(() => {
        gsap.from(".servicetext ", {
            x: 100,
            opacity: 0,
            duration: 1.5,
            delay: 1,
            scrollTrigger: {
                trigger: container.current,
                scroller: "body",
                start: "top 50%",
                end: "top",
                scrub: true,
               
            }
        })
    })

    useGSAP(() => {
        gsap.from(".card-1", {
            y: -100,
            opacity: 0,
            duration: 1.3,
            delay: 1,
            scale:0.5,
            ease:"elastic",
            scrollTrigger: {
                trigger: container.current,
                scroller: "body",
                start: "top 50%",
                end: "top",
                scrub: true
            }
        })
    })
    useGSAP(() => {
        gsap.from(".card-2", {
            y: 100,
            opacity: 0,
            duration: 1.3,
            delay: 1,
            scrollTrigger: {
                trigger: container.current,
                scroller: "body",
                start: "top 60%",
                end: "top",
                scrub: true
            }
        })
    })

    return (
        <div ref={container} className='container p-5 w-100 h-100' style={{ backgroundColor: "whitesmoke" }}>
            <h3 className=' servicetext text-center'>We offer quality,<span style={{ color: "lightgray" }}>with the best materials and services</span></h3>
            <div className="row m-5">
                <div className="col-lg-4 p-0">
                    <div className="card card-1 servicecard">
                        <div className="card-body">
                            <i className='bi bi-stack bg-success text-light rounded p-1'></i>
                            <h5 className='mt-4'>Layered security</h5>
                            <p>With layered security, we ensures the safety of every unit we provide</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 p-0">
                    <div className="card card-1 servicecard">
                        <div className="card-body">
                            <i className='bi bi-check-square bg-success text-light rounded p-1'></i>
                            <h5 className='mt-4'>Quality control of each part</h5>
                            <p>Every unit you send is checked carefully for every detail</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 p-0">
                    <div className="card card-1 servicecard">
                        <div className="card-body">
                            <i className='bi bi-journal-text bg-success text-light rounded p-1'></i>
                            <h5 className='mt-4'>Maintenance manual book</h5>
                            <p>We provide a guidebook  that can be used to ensure maximum care</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 p-0">
                    <div className="card card-2 servicecard ">
                        <div className="card-body">
                            <i className='bi bi-box2 bg-success text-light rounded p-1'></i>
                            <h5 className='mt-4'>Deliveredsafely</h5>
                            <p>Every unit we send arrives safely and quickly,without any obstacles or dramas</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 p-0">
                    <div className="card card-2 servicecard">
                        <div className="card-body">
                            <i className='bi bi-chat-dots bg-success text-light rounded p-1'></i>
                            <h5 className='mt-4'>Reliable customer service</h5>
                            <p>Our customer service is available 24 hours a week with qualifed people</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 p-0">
                    <div className="card card-2 servicecard">
                        <div className="card-body">
                            <i className='bi bi-wifi bg-success text-light rounded p-1'></i>
                            <h5 className='mt-4'>Based on artificial intelligence</h5>
                            <p>You can controland view each unit from yur phone it's very easy to use</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Service