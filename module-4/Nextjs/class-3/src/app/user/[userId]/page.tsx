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

const UserId = async ({ params }: { params: Promise<{ userId: string }> }) => {
  const { userId } = await params;
  const API_URL = process.env.API_URL || "http://localhost:3000";

  let userData: User | null = null;
  let error = false;

  try {
    const res = await fetch(`${API_URL}/api/users/${userId}`, { cache: 'no-store' });
    if (!res.ok) {
      error = true;
    } else {
      userData = await res.json();
    }
  } catch (e) {
    error = true;
  }

  if (error || !userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">User Not Found</h1>
          <p className="text-slate-600">The user with ID {userId} could not be located.</p>
          <a href="/user" className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl">
            Back to Team
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-delay-100 { animation-delay: 100ms; }
        .animate-delay-200 { animation-delay: 200ms; }
      `}</style>
      
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up transform transition-all hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] duration-500">
        {/* Header Section with Gradient */}
        <div className="relative h-48 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
             <div className="absolute w-32 h-32 bg-white/20 rounded-full -top-10 -right-10 blur-xl"></div>
             <div className="absolute w-40 h-40 bg-white/20 rounded-full top-20 -left-10 blur-xl"></div>
          </div>
          
          <a href="/user" className="absolute top-6 left-6 text-white/80 hover:text-white flex items-center transition-colors group">
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to List
          </a>
        </div>

        {/* Avatar & Main Info */}
        <div className="relative px-8 pb-8">
          <div className="flex flex-col items-center -mt-20 mb-6">
            <div className="relative group">
                <div className="w-40 h-40 rounded-full border-4 border-white bg-white shadow-xl flex items-center justify-center overflow-hidden relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100"></div>
                    <span className="text-6xl font-bold text-indigo-600 relative z-20 group-hover:scale-110 transition-transform duration-300">
                        {userData.name.charAt(0)}
                    </span>
                </div>
                <div className="absolute inset-0 rounded-full bg-indigo-500 blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300 transform translate-y-2"></div>
            </div>
            
            <div className="text-center mt-6 animate-fade-in-up animate-delay-100">
              <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                {userData.name}
              </h1>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100">
                <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">
                  {userData.profession}
                </span>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 animate-fade-in-up animate-delay-200">
            {/* Left Column */}
            <div className="space-y-6">
                <div className="group p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-colors duration-300 border border-slate-100 hover:border-blue-200">
                    <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</span>
                    </div>
                    <a href={`mailto:${userData.email}`} className="text-lg font-semibold text-slate-800 hover:text-blue-600 transition-colors break-all">
                        {userData.email}
                    </a>
                </div>

                <div className="group p-4 rounded-2xl bg-slate-50 hover:bg-purple-50 transition-colors duration-300 border border-slate-100 hover:border-purple-200">
                    <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mr-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Qualification</span>
                    </div>
                    <p className="text-lg font-semibold text-slate-800">
                        {userData.qualification}
                    </p>
                </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="group p-4 rounded-2xl bg-slate-50 hover:bg-pink-50 transition-colors duration-300 border border-slate-100 hover:border-pink-200">
                        <div className="flex items-center mb-2">
                            <div className="w-8 h-8 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center mr-3">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Age</span>
                        </div>
                        <p className="text-2xl font-bold text-slate-800">
                            {userData.age} <span className="text-sm font-medium text-slate-500">Years</span>
                        </p>
                    </div>

                    <div className="group p-4 rounded-2xl bg-slate-50 hover:bg-teal-50 transition-colors duration-300 border border-slate-100 hover:border-teal-200">
                        <div className="flex items-center mb-2">
                            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center mr-3">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Gender</span>
                        </div>
                        <p className="text-lg font-semibold text-slate-800 capitalize">
                            {userData.gender}
                        </p>
                    </div>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-lg flex justify-between items-center">
                    <div>
                        <p className="text-xs text-slate-400 uppercase font-bold">User ID</p>
                        <p className="text-xl font-mono font-bold">#{userData.id.toString().padStart(4, '0')}</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0c0 .884-.956 1.676-2 2.344" />
                        </svg>
                    </div>
                </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex justify-center space-x-4 animate-fade-in-up animate-delay-200">
            <button className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 hover:shadow-indigo-500/30 hover:scale-105 transition-all duration-300 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
            </button>
            <button className="px-8 py-3 bg-white text-slate-700 font-bold rounded-xl shadow-md border border-slate-200 hover:bg-slate-50 hover:border-slate-300 hover:scale-105 transition-all duration-300">
                Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserId;
