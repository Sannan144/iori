import React from 'react'

const Footer = () => {
  return (
    <div className='w-[calc(100%-8px)] max-w-[1600px] mx-auto h-full bg-[#d1d0c7] ml-1 fixed top-0 left-0 lg:left-1/2 lg:-translate-x-1/2 z-0 py-20 flex flex-col gap-10'>

        <div className='flex md:justify-between px-10 items-start md:items-center flex-col md:flex-row gap-5 md:gap-0'>
          <div>
            <h1 className='text-[clamp(70px,8vw,100px)] leading-none font-[lightFont]'>Get in Touch</h1>
            <button class="cursor-pointer font-semibold overflow-hidden relative z-100 border group px-8 py-2 my-5">
            <span class="relative z-10 text-black group-hover:text-white text-xl duration-500">Read More</span>
            <span class="absolute w-full h-full bg-black -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
            <span class="absolute w-full h-full bg-black -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
          </button>
            <div className='flex gap-5'>
              <span className='font-[Inter]'>ENGLISH</span>
              <span className='font-[Inter]'>URDU</span>
            </div>
          </div>

          <div className='flex flex-col gap-5'>
            <div>
              <p className='font-[Inter]'>EMAIL</p>
              <h2 className='text-[clamp(40px,6vw,80px)] leading-none font-[lightFont]'>iori@gamil.com</h2>
            </div>
            <div>
              <p className='font-[Inter]'>GITHUB</p>
              <h2 className='text-[clamp(40px,6vw,80px)] leading-none font-[lightFont]'>IORI GITHUB</h2>
            </div>
            <div>
              <p className='font-[Inter]'>LINKEDIN</p>
              <h2 className='text-[clamp(40px,6vw,80px)] leading-none font-[lightFont]'>IORI LINKEDIN</h2>
            </div>
          </div>
        </div>

        <div className='w-full font-[Inter] flex justify-between items-start sm:items-center px-10 flex-col sm:flex-row'>
          <p className='bg-black text-white p-2'>IORI@Copyright</p>
          <div className='flex gap-5 py-3'>
            <p>Terms and Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>

    </div>
  )
}

export default Footer