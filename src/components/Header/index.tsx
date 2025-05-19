
import React from 'react'

import Image from 'next/image'

import { SearchBar } from '../Search'

export const Header: React.FC = () => {
  return (
    <header className="w-full p-6 flex justify-between items-center">
      <Image src="/img/LOGO PLAN.svg" alt="Logo da Plan Marketing" width={108} height={59} />
      <div className="flex-1 flex justify-center">
        <SearchBar />
      </div>
    </header>
  )
}
