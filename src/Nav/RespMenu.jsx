const RespMenu = () => {
  let links = ["home",'about','menu','contact','blog']
  return (
    <div className='rp w-[calc(100%-8px)] h-20 rounded-lg bg-[#222] fixed top-1 left-1 z-50 backdrop-blur-lg  transition-all duration-1000 overflow-hidden block md:hidden'>

      <ul className="gap-5 flex flex-col items-center justify-center h-full font-[Inter]">
        {
          links.map((lk,index)=>{
            return(
              <li style={{transform:'rotateX(80deg)',perspective:'800px'}} key={index} className="text-white text-[clamp(30px,4vw,50px)] cursor-pointer uppercase opacity-0">
                <a href='#'>{lk}</a>
              </li>
            )
          })
        }
      </ul>

    </div>
  )
}

export default RespMenu
