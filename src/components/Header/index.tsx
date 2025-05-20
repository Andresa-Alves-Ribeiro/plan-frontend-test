import React from 'react'

import Image from 'next/image'

import { SearchBar } from '../CountryFilters'

export const Header = () => {
  return (
    <header className="w-full p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="w-full md:w-auto flex justify-between items-center">
          <Image
            src="/img/LOGO PLAN.svg"
            alt="Logo da Plan Marketing"
            width={108}
            height={59}
            className='w-[80px] md:w-[108px] md:ml-10'
          />
          <div className="md:hidden">
            <SearchBar />
          </div>
        </div>
        <div className="hidden md:block w-full md:flex-1">
          <SearchBar />
        </div>
      </div>
    </header>
  )
}
