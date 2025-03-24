import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const HorizontalScroll = () => {

    useGSAP(()=>{
        gsap.to('.hs h1',{
            translateX:'-240%',
            scrollTrigger:{
                trigger:'.hs h1',
                start:'top 20%',
                end:'top -150%',
                scrub:2,
                pin:true,
            }
        })
    })

    window.addEventListener("load", () => {
      ScrollTrigger.refresh(); // Refresh ScrollTrigger positions on load
    });

    
  return (
    <div className='w-full h-fit hs bg-[#C2C0B5]'>
        <h1 style={{whiteSpace:'nowrap'}} className='font-[lightFont] text-[40vw] uppercase leading-none'>Timeless Elegance</h1>
    </div>
  )
}

export default HorizontalScroll