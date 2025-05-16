import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 text-center">
        <p className="text-sm text-gray-600 m-0">
          &copy; {new Date().getFullYear()} Plan Frontend Test. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
