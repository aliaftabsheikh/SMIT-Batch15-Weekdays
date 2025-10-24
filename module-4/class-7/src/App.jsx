import React from "react";

export default function App() {
  return (
    
    // <div className="grid grid-cols-3 grid-rows-[100px_1fr_100px] h-screen ">
     
    //  <div className="bg-amber-200 text-2xl font-bold text-center col-span-3 py-6 sm:bg-red-400 md:bg-blue-700">Header</div>
    //  <div className="bg-blue-200 text-2xl font-bold text-center py-6 ">Sidebar</div>

    //  <div className="col-span-2 grid grid-rows-[1fr_200px] gap-4 p-4">


    //  <div className="bg-red-200 text-2xl font-bold text-center py-6">Content-1</div>

    //  <div className="grid grid-cols-2 gap-4 grid-rows-[1fr]">

    //  <div className="bg-pink-200 text-2xl font-bold text-center py-6">Content-2</div>
    //  <div className="bg-green-200 text-2xl font-bold text-center py-6">Content-3</div>

    //  </div>

    //  </div>

    //   <div className="bg-gray-200 text-2xl font-bold text-center py-6 col-span-3">Footer</div>
    // </div >


  // <div className="flex items-center justify-center h-screen bg-black ">
  //   <div className="w-1/2 h-1/2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center animate-pulse  rounded-lg shadow-lg hover:scale-150 transition-transform duration-300">
  //     <h1 className="text-white text-4xl font-bold hover:text-black hover:cursor-pointer hover:animate-spin ">Hello World</h1>
  //   </div>
  // </div>


  <div className="flex items-center justify-center h-screen bg-white dark:dark-mode">
    <div className="relative w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg flex items-center justify-center">
      <h1 className="text-white text-4xl font-bold relative z-10">Hello World</h1>


<div className="before:content-[''] before:w-[100px] before:h-[100px] before:bg-pink-500 before:absolute before:top-[-40px] before:right-[-50px] before:rounded-full">
      <div className="after:content-[''] after:w-[100px] after:h-[100px] after:bg-yellow-500 after:absolute after:bottom-[-60px] after:left-[-70px] after:rounded-full">
      </div>
</div>

      {/* <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-500 before:to-yellow-500 before:opacity-50 before:blur-lg after:content-[''] after:absolute after:inset-0 after:border-4 after:border-white after:rounded-lg"></div> */}

      
    </div>
  </div>




  );
}