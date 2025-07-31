import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-gray-600 p-4 shadow-md">
      <div className="container mx-auto text-center flex justify-space-between items-start">
        <h1 className="text-3xl font-serif font-extrabold text-white">The Notes App</h1>
        <input type="text"
        placeholder='search notes' 
        className='border border-gray-300 rounded-md p-2 w-1/3 mx-auto' />
      </div>
    </div>
  )
}

export default Navbar
