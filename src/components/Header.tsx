import React, { useEffect, useState } from 'react'
import { AtratiLogoComplete, AtratiLogoMobile } from '../images/svg/AtratiLogo'

const Header = () => {

  return (
    <header className='flex bg-[#5E17EB] md:bg-white h-20 md:h-24 w-full px-7 md:px-28 items-center'>
      <AtratiLogoComplete />
      <AtratiLogoMobile/>
    </header>
  )
}

export default Header