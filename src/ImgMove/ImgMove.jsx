import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { useEffect } from 'react'

const ImgMove = () => {
  const imageArray = [
    { url: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvc21ldGljfGVufDB8fDB8fHww", randomWord: "NEAUTHY" },
    { url: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNvc21ldGljfGVufDB8MXwwfHx8MA%3D%3D", randomWord: "ORDINARY" },
    { url: "https://images.unsplash.com/photo-1556227834-09f1de7a7d14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvc21ldGljfGVufDB8MXwwfHx8MA%3D%3D", randomWord: "CUROLOGY" },
    { url: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNvc21ldGljfGVufDB8MXwwfHx8MA%3D%3D", randomWord: "BIOG LOW" }
  ];

  let diff = 0;
  let pv = 0;

  let moving = (details) => {
    let vwValue = (window.innerWidth * 15) / 100;
    let dim = details.target.getBoundingClientRect();
    let imag = details.target.querySelector('img');
    imag.style.left = ((details.clientX - dim.left)-vwValue) + 'px';
    imag.style.top = ((details.clientY - dim.top) - vwValue ) + 'px';
    diff = details.clientX - pv;
    pv = details.clientX;

    let val = gsap.utils.clamp(-20, 20, diff);
    gsap.to(imag, {
      rotate: val,
      duration: 0.3,
      opacity: 1,
      ease: 'linear',
      onComplete: function () {
        gsap.to(imag, {
          rotate: 0,
        });
      }
    });
  };

  let leave = (details) => {
    let imag = details.target.querySelector('img'); 
    gsap.to(imag, { opacity: 0, duration: 0.3 });
  };

  useGSAP(()=>{
    let imgMove = document.querySelectorAll('.imgMove')
    imgMove.forEach((im)=>{
        gsap.from(im,{
            opacity:0,
            duration:0.6,
            scale:0.8,
            scrollTrigger:{
                trigger:im,
                scroller:'body',
                start:'top 50%',
            }
        })
    })
  })

  window.addEventListener("load", () => {
    ScrollTrigger.refresh(); // Refresh ScrollTrigger positions on load
  });
  

  return (
    <div className='w-full py-5 px-10 bg-[#C2C0B5]'>
      {imageArray.map((item, index) => {
        return (
          <div
            key={index}
            onMouseMove={moving}
            onMouseLeave={leave}
            style={{ borderBottom: index === imageArray.length - 1 && '2px solid black' }}
            className='imgMove w-full cursor-pointer border-t-2 flex justify-between items-center relative'
          >
            <h1 style={{ pointerEvents: 'none' }} className='text-[clamp(50px,10vw,150px)] font-[regFont] tracking-tighter leading-none py-10'>
              {item.randomWord}
            </h1>
            <p className='font-[Inter] font-semibold'>2025</p>
            <img
              style={{pointerEvents: 'none' }}
              className='w-[30vw] h-[30vw] object-cover absolute left-0 top-0 z-10 events-none rounded-lg opacity-0 transition-all duration-[0.03]'
              src={item.url}
              alt={item.randomWord} 
            />
          </div>
        )
      })}
    </div>
  )
}

export default ImgMove;
