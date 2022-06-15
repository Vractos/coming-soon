import React from 'react'
import Header from './Header'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="h-full bg-atrati-gray md:bg-transparent md:bg-[url('../images/svg/group.svg')]  bg-no-repeat md:bg-right-bottom">
        {children}
      </div>
    </div>
  )
}

export default Layout