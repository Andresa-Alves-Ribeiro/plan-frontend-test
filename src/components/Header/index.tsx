import React from 'react'

import Image from 'next/image'

import { SearchBar } from '../SearchBar'

export const Header: React.FC = () => {
  return (
    <header className="fixed w-full p-14 flex justify-between items-center">
      <Image src="/img/LOGO PLAN.svg" alt="Logo da Plan Marketing" width={108} height={59} />
      <div className="flex-1 flex justify-center">
        <SearchBar />
      </div>
    </header>
  )
}
