import React, { useEffect, useState } from 'react'
import "./App.css"
import Background from './Components/Background/Background';
import Nav from "./Components/Nav bar/Nav"
import Hero from "./Components/Hero/Hero"




const App = () => {
  let heroData = [
    { text1: "Performance and Efficiency", text2: "EVs deliver maximum torque from the moment you press the accelerator, providing a smooth and powerful driving experience" },
    { text1: "Environmental Benefits", text2: "EVs emit no harmful pollutants into the air, contributing to cleaner air quality and reduced greenhouse gas emissions" },
    { text1: "Technology and Connectivity", text2: "Many EVs come equipped with large touchscreens, voice control, and smartphone integration for navigation, music, and more" },
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{return count===2? 0:count+1})
    }, 5000);
    
  },[])
  return (
    <div>
      <Background heroCount={heroCount} playStatus={playStatus} />
      <Nav/>
      <Hero 
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      setPlayStatus={setPlayStatus}
      />
    </div>
  )
}

export default App