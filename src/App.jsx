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

const App = () => {
  const circle = useRef()

  let moving = (details) => {
    gsap.to(circle.current, {
      x: details.clientX - 10,
      y: details.clientY - 10,
      duration: 0.5, 
      ease: 'power3.out', 
    })
  }

  return (
    <>
    <div onMouseMove={moving} className='w-full min-h-screen p-1 relative z-10'>
      <div ref={circle} style={{pointerEvents:'none'}} className='w-3 h-3 bg-black rounded-full fixed z-20'>
      </div>
      <Landing />
      <Nav />
      <Home/>
      <ImgMove/>
      <About/>
      <HorizontalScroll/>
      <div className='w-full h-screen bg-[transparent]'></div>
    </div>
    <Footer/>
  </>
  )
}

export default App
