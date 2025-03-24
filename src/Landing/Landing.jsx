import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const Landing = () => {
const landingPage = useRef()
const webName = useRef()
const bsFirst = useRef()
const bsSecond = useRef()
  
useGSAP(()=>{
  let tl = gsap.timeline()
  tl.from(webName.current,{
    opacity:0,
    duration:0.8,
  })
  .to(bsFirst.current,{
    height:'100%',
    duration:1.5,
    ease:'expo.inOut'
  })
  .to(webName.current,{
    color:'white',
    delay:-.8,
  })
  .to('.nav',{
    opacity:1,
  })
  .to(bsFirst.current,{
    display:'none'
  })
  .set(landingPage.current,{
    backgroundColor:'transparent',
    duration:0,
  })
  .to(bsSecond.current,{
    display:'block',
    duration:0,
  })
  .to(bsSecond.current,{
    height:'0%',
    duration:1.5,
    ease:'expo.inOut'
  })
  .to(webName.current,{
    opacity:0,
    delay:-.5
  })
  .to('.nav h1,.nav ul',{
    opacity:1,
    delay:-.5,
  })
  .to('.nav',{
    borderRadius:'8px',
    delay:-.5,
  })
  .to(landingPage.current,{
    display:'none'
  })
  .to('.HomeText .textone',{
    opacity:1,
    stagger:0.05,
    rotateY:0,
  })
  .to('.HomeText .texttwo',{
    opacity:1,
    stagger:0.05,
    rotateY:0,
    delay:-1
  })
  .to('.HomeText .textthree',{
    opacity:1,
    stagger:0.05,
    rotateY:0,
    delay:-1,
  })
  .to('.HomeText .textfour',{
    opacity:1,
    stagger:0.05,
    rotateY:0,
    delay:-1,
  })
  .to('#clr',{
    backgroundColor:'black',
    color:'white'
  })
  .to('.HomeImg',{
    opacity:1,
  })
})

  return (
    <div ref={landingPage} className="w-[calc(100%-8px)] bg-[#C2C0B5] bg-white h-screen fixed top-0 left-1/2 -translate-x-1/2 z-30 flex justify-center items-center">
       <h1 ref={webName} className="text-5xl aboslute z-50 font-semibold">IORI</h1>
       <div ref={bsFirst} className="black-screen rounded-lg absolute z-40 left-0 bottom-0 w-full h-[0] bg-[#222]"></div>
       <div ref={bsSecond} className="black-screen absolute z-40 left-0 top-[5vw] w-full h-screen bg-[#222] hidden rounded-b-lg"></div>
    </div>
  )
}

export default Landing