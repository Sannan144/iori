import { useState } from 'react'
import RespMenu from "./RespMenu"
import gsap from "gsap"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  let links = ["home", 'about', 'menu', 'contact', 'blog']

  let openClose = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setIsOpen(!isOpen)
    
    if (!isOpen) {
      gsap.to('.rp', {
        height: '500px',
        opacity: 1,
        duration: 0.5,
        ease: 'expo.inOut',
        onComplete: () => setIsAnimating(false)
      })
      gsap.to('.rp li', {
        transform: 'rotateX(0)',
        stagger: 0.3,
        opacity: 1,
        delay: 0.6,
      })
    } else {
      gsap.to('.rp', {
        height: '80px',
        duration: 0.5,
        ease: 'expo.inOut',
        onComplete: () => setIsAnimating(false)
      })
      gsap.to('.rp li', {
        transform: 'rotateX(80deg)',
        opacity: 0,
      })
    }
  }

  return (
    <>
      <div className="nav bg-[#222] w-[calc(100%-8px)] h-20 md:h-18 px-[5vw] rounded-t-lg text-white flex justify-between items-center fixed z-60 top-0 opacity-0">
        <h1 className="text-3xl font-[Inter] font-semibold opacity-0">IORI</h1>

        <div>
          <ul className="gap-5 hidden md:flex opacity-0">
            {
              links.map((link, index) => {
                return (
                  <li key={index}>
                    <button
                      className="cursor-pointer group uppercase font-[Inter] font-light text-sm"
                    >
                      <div className="relative overflow-hidden">
                        <p
                          className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                        >
                          {link}
                        </p>
                        <p
                          className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                        >
                          {link}
                        </p>
                      </div>
                    </button>
                  </li>
                )
              })
            }
          </ul>
        </div>

        <div onClick={openClose} className="space-y-2 block cursor-pointer md:hidden">
          <div className="w-8 h-[2px] bg-white"></div>
          <div className="w-8 h-[2px] bg-white"></div>
          <div className="w-8 h-[2px] bg-white"></div>
        </div>

      </div>

      <RespMenu isOpen={isOpen} />
    </>
  )
}

export default Nav
