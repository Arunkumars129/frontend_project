import React from 'react'
import "./Background.css"
import video1 from "../../assets/video1.mp4"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"

const Background = ({ heroCount, playStatus }) => {
    if (playStatus) {
       return <video className='background-video fade-in' src={video1} autoPlay loop muted ></video>
    }
    else if (heroCount===0){
        return <img className='background fade-in' src={image1} alt="" />
    }
    else if (heroCount===1){
        return <img className='background fade-in' src={image2} alt="" />
    }
    else if (heroCount===2){
        return <img className='background fade-in' src={image3} alt="" />
    }
}

export default Background