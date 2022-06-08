import React, { useEffect, useState } from 'react'
import { AtratiLogoComplete, AtratiLogoMobile } from '../images/svg/AtratiLogo'


const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
     // subscribe to window resize event "onComponentDidMount"
     window.addEventListener("resize", handleResizeWindow);
     return () => {
       // unsubscribe "onComponentDestroy"
       window.removeEventListener("resize", handleResizeWindow);
     };
   }, []);

  return (
    <header className='border-2 flex bg-atrati-gray md:bg-white h-20 md:h-24 w-full px-7 md:px-28 items-center'>
      {width < breakpoint ? (<AtratiLogoMobile />) : (<AtratiLogoComplete />)}
    </header>
  )
}

export default Header