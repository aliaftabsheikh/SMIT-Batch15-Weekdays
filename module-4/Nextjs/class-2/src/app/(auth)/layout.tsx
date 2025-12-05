import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Authentication",
    description: "Secure access to your account",
};

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50 flex items-center justify-center p-4`}
            >
                <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.01] duration-300">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center">
                        <h1 className="text-3xl font-bold text-white mb-2 animate-fade-in-down">Welcome Back</h1>
                        <p className="text-blue-100 text-sm animate-fade-in-up">Please enter your details to continue</p>
                    </div>
                    <div className="p-8">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
