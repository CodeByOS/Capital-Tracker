import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-17">
        { children }
    </div>
  )
}

export default AuthLayout