'use client';

import { useParams, useSearchParams, usePathname } from 'next/navigation';
import React from 'react'


const UserId =  () => {

   const {userId} =  useParams()
   const searchParams = useSearchParams()

   const name = searchParams.get('name')

   const path = usePathname()

  return (
   <div className="flex items-center justify-center min-h-screen bg-black">
      <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-text">
       UserId: {userId}
        <br/>
        Name: {name}
        <br/>
        Pathname: {path}

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

export default UserId