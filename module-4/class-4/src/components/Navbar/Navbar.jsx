import React from 'react'

const Navbar = () => {
  return (
    <div className=' bg-blue-950'>

    <div className='flex justify-between items-center p-4 text-white max-w-7xl mx-auto' >
        <h1 className='text-5xl font-bold'>Logo</h1>



        <div className='flex gap-3 text-xl'>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
        </div>
    </div>
        </div>

  )
}

export default Navbar