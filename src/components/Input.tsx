import React from 'react'

const Input = () => {
  return (
    <div className="container bg-white mb-8 md:m-0 w-full md:w-[24.3rem] rounded-xl flex items-center justify-around shadow focus:shadow-md mt-6">
      <input type="email" className="h-11 rounded-xl w-[65%] md:w-72 pl-4 pr-1 z-0 focus:outline-none" placeholder="Email" />
      <button className="h-9 w-24 leading-6 text-[0.75rem] mr-1 text-white rounded-xl bg-black hover:bg-blue-700 text-center">Me notifique</button>
    </div>
  )
}

export default Input