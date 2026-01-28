import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  primary: "bg-primary-900 text-white hover:bg-primary-800 focus:ring-primary-500",
  secondary: "bg-white text-primary-900 border border-primary-200 hover:bg-primary-50 focus:ring-primary-500",
  ghost: "bg-transparent text-primary-900 hover:bg-primary-50 focus:ring-primary-500",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  accent: "bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-6 py-3.5 text-lg",
};

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  isLoading = false,
  ...props 
}) => {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`
        relative inline-flex items-center justify-center font-medium rounded-lg 
        transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]} 
        ${sizes[size]} 
        ${className}
      `}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </motion.button>
  );
};

export default Button;
