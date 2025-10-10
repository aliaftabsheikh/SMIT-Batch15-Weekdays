import React from 'react'

const Navbar = ({isLoggedIn, setIsLoggedIn}) => {
  return (
    <div className=' bg-blue-950'>

    <div className='flex justify-between items-center p-4 text-white max-w-7xl mx-auto' >
        <h1 className='text-5xl font-bold'>Logo</h1>



        <div className='flex gap-3 text-xl items-center '>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>

            <div>

        {/* Create a beautiful animated logout button using Tailwind CSS */}
        <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 ml-4 rounded transition duration-300 ease-in-out transform hover:scale-105' onClick={() => setIsLoggedIn(!isLoggedIn)}>Logout</button>
    </div>
            </div>
        </div>

        </div>

  )
}

export default Navbar