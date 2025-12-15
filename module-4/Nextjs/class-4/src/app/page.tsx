// 'use client'
import Image from "next/image";
// import { useRouter } from "next/navigation";

// export const dynamic = 'force-dynamic';

export const revalidate = 3600; // Revalidate this page every 60 minutes


export default function Home() {
  // const router = useRouter();

  // function navigateToAbout() {
  //   const token = "12345";

  //   if(token === "12345") {
  //     router.push('/about');
  //   } else {
  //     router.push('/contact');
  //   }
  // }


  return (
  <div className="flex min-h-screen flex-col items-center justify-center py-2 ">

    <p>{new Date().getSeconds()}</p>

    {/* <button onClick={navigateToAbout} className="bg-amber-400 p-3 rounded-lg hover:bg-amber-500 transition cursor-pointer">
    Navigate to About Page

    </button> */}
  </div>
  );
}
