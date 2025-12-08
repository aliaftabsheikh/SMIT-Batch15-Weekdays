import Link from "next/link";
import React from "react";

interface User {
  id: number;
  name: string;
  age: number;
  profession: string;
  email: string;
  gender: string;
  qualification: string;
}

const Users = async () => {
  const API_URL = process.env.API_URL || "http://localhost:3000";
  let data: User[] = [];

  try {
    const users = await fetch(`${API_URL}/api/users`, { cache: 'no-store' });
    if (!users.ok) {
        console.error('Failed to fetch data');
    } else {
        data = await users.json();
    }
  } catch (error) {
    console.error("Error fetching users:", error);
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-6 tracking-tight">
          Our Talented Team
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Meet the diverse group of professionals who bring passion, creativity, and expertise to everything we build.
        </p>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
        {data.map((user) => (
          <div
            key={user.id}
            className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col hover:-translate-y-2"
          >
            {/* Decorative Top Gradient */}
            <div className="h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Abstract shapes */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute -left-4 -bottom-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
            </div>

            {/* Avatar & Main Info */}
            <div className="px-8 relative flex-grow">
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <div className="h-32 w-32 rounded-full bg-white p-1.5 shadow-xl">
                   <div className="h-full w-full rounded-full bg-slate-900 flex items-center justify-center text-white text-4xl font-bold border-4 border-white overflow-hidden relative">
                      {/* Gradient overlay on avatar */}
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
                      {user.name.charAt(0)}
                   </div>
                </div>
              </div>
              
              <div className="mt-20 mb-8 text-center">
                <h2 className="text-2xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors duration-300">
                {user.name}
                </h2>
                <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mt-2 bg-purple-50 inline-block px-3 py-1 rounded-full">
                {user.profession}
                </p>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                 <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 group-hover:border-indigo-100 transition-colors">
                    <p className="text-xs text-slate-400 uppercase font-bold mb-1 tracking-wider">Age</p>
                    <p className="text-slate-700 font-bold text-lg">{user.age}</p>
                 </div>
                 <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 group-hover:border-indigo-100 transition-colors">
                    <p className="text-xs text-slate-400 uppercase font-bold mb-1 tracking-wider">Gender</p>
                    <p className="text-slate-700 font-bold text-lg capitalize">{user.gender}</p>
                 </div>
              </div>

              {/* Contact & Qual */}
              <div className="space-y-4 mb-8">
                 <div className="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                    <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mr-4 group-hover/item:bg-blue-100 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-xs text-slate-400 font-semibold uppercase">Email</p>
                        <p className="text-sm font-medium text-slate-700 truncate">{user.email}</p>
                    </div>
                 </div>
                 
                 <div className="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                    <div className="h-10 w-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 mr-4 group-hover/item:bg-pink-100 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-xs text-slate-400 font-semibold uppercase">Qualification</p>
                        <p className="text-sm font-medium text-slate-700">{user.qualification}</p>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="bg-slate-50 px-8 py-5 border-t border-slate-100 flex justify-between items-center">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    ID: #{user.id.toString().padStart(3, '0')}
                </span>
                {/* <Link href={`/user/${user.id}?name=${user.name}&age=${user.age}&profession=${user.profession}&email=${user.email}&qualification=${user.qualification}&gender=${user.gender}`} className="text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center group/btn"> */}
                  <Link href={`/user/${user.id}`} className="text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center group/btn">
                    View Profile
                    <svg className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
