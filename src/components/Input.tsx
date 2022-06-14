import React from 'react'

const Input = () => {
  return (
    <div className="container flex items-center">
      <div className="relative">
        <input type="email" className="h-9 w-96 pl-5 pr-20 rounded-xl z-0 shadow focus:outline-none focus:shadow-md" placeholder="Email" />
        <div className="absolute top-1.5 right-2">
          <button className="h-6 w-20 leading-6 text-[0.5rem] text-white rounded-xl bg-black hover:bg-blue-700 text-center">Me notifique</button>
        </div>
      </div>
    </div>
  )
}

export default Input