import React from 'react'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
        {children}
    </div>
  )
}

export default Layout