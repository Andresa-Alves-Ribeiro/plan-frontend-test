import React from 'react'

import Image from 'next/image'

import { SearchBar } from '../CountryFilters'

export const Header = () => {
  return (
    <header className="w-full p-4 md:p-6">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
        <div className="w-full lg:w-auto flex justify-between items-center">
          <Image
            src="/img/LOGO PLAN.svg"
            alt="Logo da Plan Marketing"
            width={108}
            height={59}
            className='w-[80px] lg:w-[108px] lg:ml-10'
          />
          <div className="lg:hidden">
            <SearchBar />
          </div>
        </div>
        <div className="hidden lg:block w-full lg:flex-1">
          <SearchBar />
        </div>
      </div>
    </header>
  )
}
