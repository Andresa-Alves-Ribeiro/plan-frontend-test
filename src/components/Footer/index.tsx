import React from 'react'

import Image from 'next/image'

export const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-black z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 text-center flex justify-between items-end">
        <Image src="/img/LOGO GRUPO.svg" alt="Logo da Plan Marketing" width={126} height={92} />
        <p className="text-sm text-white m-0">
          Grupo Plan Marketing &copy; Todos os direitos reservados - {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
