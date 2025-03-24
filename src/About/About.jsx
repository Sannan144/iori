import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)
import { useRef } from "react"
import img1 from '../assets/aboutImg1.png'
import img2 from '../assets/aboutImg2.png'
import { useEffect } from 'react'

const About = () => {
const smImg = useRef()

const wrapInSpan = (text) => {
  return text.split('').map((letter, index) => (
    <span
      key={index}
      className={letter === ' ' ? 'space' : `text`}
    >
      {letter}
    </span>
  ));
};

    useGSAP(()=>{
        gsap.from(smImg.current,{
            bottom:'-20%',
            scrollTrigger:{
                trigger:smImg.current,
                start:'top 100%',
                end:'top 0%',
                scrub:true,
            }
        })
        gsap.to('.AboutContent h1 span',{
          rotateY:0,
          opacity:1,
          stagger:0.05,
          scrollTrigger:{
            trigger:'.AboutContent h1',
            start:'top 50%',
          }
        })
        gsap.to('.AboutContent p , .AboutContent button',{
          opacity:1,
          scrollTrigger:{
            trigger:'.AboutContent p',
            start:'top 50%'
          }
        })
    })

    window.addEventListener("load", () => {
      ScrollTrigger.refresh(); // Refresh ScrollTrigger positions on load
    });
    

  return (
    <div className="w-full h-auto bg-[#C2C0B5] px-10 flex flex-col lg:flex-row pt-20 gap-20 lg:gap-0">

      <div className="w-full lg:w-[35%] flex justify-center">
        <div className="w-[320px] h-[420px] sm:w-[350px] sm:h-[450px] relative z-10">
          <img className="w-full h-full object-cover rounded-xl" src={img1} />
          <img className="w-32 h-48 object-cover rounded-xl absolute right-[-64px] bottom-10" src={img2} ref={smImg}/>
        </div>
      </div>

      <div className="AboutContent w-full lg:w-[65%]">
        <h1 className="leading-none mb-1 text-[clamp(60px,8vw,100px)] font-semibold font-[lightFont] text-center sm:text-left lg:text-center">
          {wrapInSpan('IORI COSMETIC')}
        </h1>
        <h1 className="leading-none mb-1 text-[clamp(60px,8vw,100px)] font-semibold font-[lightFont] text-center sm:text-left lg:text-center">
          {wrapInSpan('BRAND')}
        </h1>
        <p className="w-full lg:w-[80%] mx-auto font-[Inter] mt-5 mb-3 text-sm md:text-lg opacity-0">Welcome to IORI, where beauty meets luxury. Discover premium skincare and makeup products designed to enhance your natural glow. Experience elegance, quality, and innovation with IORI’s exclusive cosmetic collection.</p>
        <button class="cursor-pointer font-semibold overflow-hidden relative z-100 border group px-8 py-2 ml-20 opacity-0">
          <span class="relative z-10 text-black group-hover:text-white text-xl duration-500">Read More</span>
          <span class="absolute w-full h-full bg-black -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
          <span class="absolute w-full h-full bg-black -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
        </button>
      </div>

    </div>
  )
}

export default About

{/* <img src="https://bryhel.com/wp-content/uploads/2023/09/WEB-NEW-PICS-Phone-Wallpaper-600x1067.png" />
<img src="https://bryhel.com/wp-content/uploads/2023/09/WEB-NEW-PICS-Phone-Wallpaper-1-460x818.png" /> */}