import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authSlice";

export default function Profile() {
    const dispatch = useDispatch();
    const { user, token } = useSelector((state) => state.auth);

    if (!token) return <h3 className="text-center text-xl text-gray-600 mt-8">You are not logged in.</h3>;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            {/* Main Card */}
            <div className="relative z-10 w-full max-w-md">
                <div className="bg-slate-800/40 backdrop-blur-2xl border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden transform transition hover:scale-105 duration-300">
                    
                    {/* Header Gradient */}
                    <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-30">
                            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                        </div>
                    </div>

                    {/* Profile Content */}
                    <div className="px-8 pb-8">
                        {/* Avatar Circle */}
                        <div className="flex justify-center -mt-16 mb-6">
                            <div className="w-32 h-32 rounded-full border-4 border-slate-800 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-xl transform transition hover:scale-110 duration-300">
                                <span className="text-4xl font-bold text-white">{user.name.charAt(0).toUpperCase()}</span>
                            </div>
                        </div>

                        {/* User Info */}
                        <div className="text-center space-y-4 mb-8 animate-fadeIn">
                            <h2 className="text-3xl font-bold text-white">{user.name}</h2>
                            <div className="flex items-center justify-center space-x-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <p className="text-slate-300 text-sm">{user.email}</p>
                            </div>
                        </div>

                        {/* Status Badge */}
                        <div className="bg-slate-700/50 rounded-lg p-4 mb-8 border border-slate-600/50">
                            <p className="text-slate-300 text-sm">
                                <span className="font-semibold text-blue-400">Status:</span> Active
                            </p>
                        </div>

                        {/* Logout Button */}
                        <button
                            onClick={() => dispatch(logout())}
                            className="w-full py-3 px-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition transform hover:scale-105 duration-200 shadow-lg hover:shadow-xl active:scale-95"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {/* Bottom decoration line */}
                <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out;
                }
            `}</style>
        </div>
    );
}
