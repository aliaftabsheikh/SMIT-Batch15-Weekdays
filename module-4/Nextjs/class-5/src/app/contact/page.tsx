import React from 'react'

const Contact = () => {
  return (

    <div className="flex items-center justify-center min-h-screen bg-black">
      <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-text">
       Contact
      </h1>
      <style >{`
        .animate-text {
          background-size: 200% auto;
          animation: textShine 3s linear infinite;
        }
        @keyframes textShine {
          to {
            background-position: 200% center;
          }
        }
      `}</style>
    </div>
  )
}

export default Contact