import React from 'react'

import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="w-full bg-black z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 sm:gap-4">
          <Image
            src="/img/LOGO GRUPO.svg"
            alt="Logo da Plan Marketing"
            width={126}
            height={92}
            className="w-20 sm:w-24 md:w-28 lg:w-auto"
          />
          <p className="text-xs sm:text-sm text-white text-center sm:text-left">
            Grupo Plan Marketing &copy; Todos os direitos reservados - {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}

