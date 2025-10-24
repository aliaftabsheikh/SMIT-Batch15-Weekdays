import React, { useContext } from 'react'
import { UserContext , ThemeContext} from '../../App'

const UserProfile = () => {
  const user = useContext(UserContext)
  const {theme, setTheme} = useContext(ThemeContext)

  function toggleTheme(){
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

return (
    <div className={`min-h-screen transition-colors duration-300 ease-in-out ${
        theme === 'light' ? 'bg-gradient-to-r from-blue-50 to-purple-50' : 'bg-gradient-to-r from-gray-900 to-slate-900'
    }`}>
        <div className="container mx-auto px-4 py-16">
            <div className={`max-w-md mx-auto rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ${
                theme === 'light' ? 'bg-white' : 'bg-gray-800'
            }`}>
                <div className="p-8">
                    <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-6">
                            <img
                                className="w-full h-full rounded-full object-cover border-4 border-blue-500 p-1"
                                src={user.avatar || 'https://via.placeholder.com/150'}
                                alt={user.name}
                            />
                        </div>
                        <h2 className={`text-3xl font-bold mb-2 ${
                            theme === 'light' ? 'text-gray-800' : 'text-white'
                        }`}>
                            {user.name}
                        </h2>
                        <p className={`text-lg ${
                            theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                        }`}>
                            {user.email || 'user@example.com'}
                        </p>
                    </div>

                    <div className="mt-8">
                        <button
                            onClick={toggleTheme}
                            className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            {theme === 'light' ? '🌙 Switch to Dark Mode' : '☀️ Switch to Light Mode'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default UserProfile