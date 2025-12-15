'use client'
import Image from "next/image";
import Harley from '@/public/harley.jpg';

export default function Home() {

  return (
   <div className="flex justify-center items-center text-6xl">
    Hello World !

    <Image src={Harley} alt="Harley Davidson" width={100} height={100}/>

    <button onClick={()=> console.log('Clicked !!')}>CLICK !!</button>
   </div>
  );
}
