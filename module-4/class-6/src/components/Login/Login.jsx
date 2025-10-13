import React from 'react'

const Login = ({isLoggedIn, setIsLoggedIn}) => {
  return (
//    Design a simple login form using Tailwind CSS
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input className="w-full px-3 py-2 border rounded" type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input className="w-full px-3 py-2 border rounded" type="password" id="password" placeholder="Enter your password" />
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" type="submit" onClick={
            () => setIsLoggedIn(!isLoggedIn)}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login