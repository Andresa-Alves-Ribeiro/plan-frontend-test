import React from 'react'

import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="w-full bg-black z-50">
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 md:gap-0">
          <Image
            src="/img/LOGO GRUPO.svg"
            alt="Logo da Plan Marketing"
            width={126}
            height={92}
            className="w-24 md:w-auto"
          />
          <p className="text-sm text-white text-center md:text-left">
            Grupo Plan Marketing &copy; Todos os direitos reservados - {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}

