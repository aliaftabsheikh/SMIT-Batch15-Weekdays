import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    loginStart,
    loginSuccess,
    loginFailure,
} from "../features/authSlice";

import { loginAPI } from "../services/authService";

export default function Login() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading);
    const error = useSelector((state) => state.auth.error);

    const [form, setForm] = useState({ email: "", password: "" });
    const [focusedField, setFocusedField] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(loginStart());

        try {
            const res = await loginAPI(form);
            dispatch(loginSuccess(res));
        } catch (err) {
            dispatch(loginFailure(err));
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>

            {/* Form Container */}
            <div className="relative w-full max-w-md">
                <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 shadow-2xl p-8 space-y-8 animate-fadeIn">
                    {/* Header */}
                    <div className="text-center space-y-2">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Welcome
                        </h1>
                        <p className="text-gray-300 text-sm">Sign in to your account</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* Email Input */}
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Email address"
                                value={form.email}
                                onChange={(e) =>
                                    setForm({ ...form, email: e.target.value })
                                }
                                onFocus={() => setFocusedField("email")}
                                onBlur={() => setFocusedField(null)}
                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition duration-300 group-hover:border-white/30"
                            />
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-5 transition duration-300 pointer-events-none"></div>
                        </div>

                        {/* Password Input */}
                        <div className="relative group">
                            <input
                                type="password"
                                placeholder="Password"
                                value={form.password}
                                onChange={(e) =>
                                    setForm({ ...form, password: e.target.value })
                                }
                                onFocus={() => setFocusedField("password")}
                                onBlur={() => setFocusedField(null)}
                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition duration-300 group-hover:border-white/30"
                            />
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-5 transition duration-300 pointer-events-none"></div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 animate-slideDown">
                                <p className="text-red-300 text-sm">{error}</p>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                    Signing in...
                                </span>
                            ) : (
                                "Sign In"
                            )}
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-gray-400 text-sm">
                        Don't have an account?{" "}
                        <span className="text-blue-400 cursor-pointer hover:text-purple-400 transition">
                            Sign up
                        </span>
                    </p>
                </div>
            </div>

            {/* Tailwind CSS Animation */}
            <style>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animate-fadeIn {
                    animation: fadeIn 0.6s ease-out;
                }
                .animate-slideDown {
                    animation: slideDown 0.3s ease-out;
                }
            `}</style>
        </div>
    );
}
