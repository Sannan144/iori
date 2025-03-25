import './App.css'
import Landing from './Landing/Landing'
import Nav from './Nav/Nav'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import ImgMove from './ImgMove/ImgMove'
import About from './About/About'
import HorizontalScroll from './HorizontalScroll/HorizontalScroll'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const circle = useRef()

  window.addEventListener("scroll", () => {
    ScrollTrigger.refresh(); 
  });

  let moving = (details) => {
    gsap.to(circle.current, {
      x: details.clientX - 10,
      y: details.clientY - 10,
      duration: 0.5, 
      ease: 'power3.out', 
    })
  }
console.log(window.innerWidth)
  return (
    <>
    <div onMouseMove={moving} className='w-full max-w-[1600px] mx-auto min-h-screen p-1 relative z-10 '>
      <div ref={circle} style={{pointerEvents:'none'}} className='w-3 h-3 bg-black rounded-full fixed z-20'>
      </div>
      <Landing />
      <Nav />
      <Home/>
      <ImgMove/>
      <About/>
      <HorizontalScroll/>
      <div style={{pointerEvents:'none'}} className='w-full h-screen bg-[transparent] events-none'></div>
    </div>
    <Footer/>
  </>
  )
}

export default App
