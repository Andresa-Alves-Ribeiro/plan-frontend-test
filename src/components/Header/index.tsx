/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import Image from 'next/image'

import { FormGroup } from '@mui/material'

import { regionTranslations } from '../../types/continent'
import { LanguageSelect } from '../Search/LanguageSelect'
import { RegionCheckbox } from '../Search/RegionCheckbox'
import { SearchInput } from '../Search/SearchInput'
import { Region } from '../Search/types'

interface HeaderProps {
  selectedLanguage: string;
  setSelectedLanguage: (lang: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ selectedLanguage, setSelectedLanguage }) => {
  const [selectedRegions, setSelectedRegions] = useState<Region[]>([])

  const handleRegionChange = (region: Region) => {
    setSelectedRegions(prev =>
      prev.includes(region)
        ? prev.filter(r => r !== region)
        : [...prev, region]
    )
  }

  return (
    <header className="w-full p-6 flex justify-between items-center">
      <Image src="/img/LOGO PLAN.svg" alt="Logo da Plan Marketing" width={108} height={59} />
      <div className="flex-1 flex justify-center">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex gap-4 items-center">
            <SearchInput />
            <LanguageSelect
              value={selectedLanguage}
              onChange={setSelectedLanguage}
            />
          </div>

          <FormGroup row sx={{ gap: 2 }}>
            {Object.entries(regionTranslations).map(([region]) => (
              <RegionCheckbox
                key={region}
                region={region as Region}
                checked={selectedRegions.includes(region as Region)}
                onChange={handleRegionChange}
              />
            ))}
          </FormGroup>
        </div>
      </div>
    </header>
  )
}
