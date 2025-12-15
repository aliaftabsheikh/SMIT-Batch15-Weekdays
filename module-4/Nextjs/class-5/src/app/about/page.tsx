import React from 'react'

const About = () => {
  return (
   <div className="flex items-center justify-center min-h-screen bg-black">
      <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 animate-text">
       About
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

export default About