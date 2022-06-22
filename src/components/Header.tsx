import React, { useEffect, useState } from 'react'
import { AtratiLogoComplete, AtratiLogoMobile } from '../images/svg/AtratiLogo'


const Header = () => {
  let width;
  if (typeof window !== `undefined`) {
    width = window.innerWidth
  }

  const [widthDimension, setWidth] = useState(width);
  const breakpoint = 768;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(width);
     // subscribe to window resize event "onComponentDidMount"
     if (typeof window !== `undefined`) {
       window.addEventListener("resize", handleResizeWindow);
       return () => {
         // unsubscribe "onComponentDestroy"
         window.removeEventListener("resize", handleResizeWindow);
       };
    }
   }, []);

  return (
    <header className='flex bg-atrati-gray md:bg-white h-20 md:h-24 w-full px-7 md:px-28 items-center'>
      {widthDimension < breakpoint ? (<AtratiLogoMobile />) : (<AtratiLogoComplete />)}
    </header>
  )
}

export default Header