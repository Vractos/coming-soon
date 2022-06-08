import React from 'react'
import WaveBg from '../images/svg/WaveBg'

const Layout: React.FC = ({ children }) => {
  return (
    <div className='w-full h-full flex flex-col'>
        {children}
    </div>
  )
}

export default Layout