import React, { useState } from 'react'

import Image from 'next/image'

import { FormGroup } from '@mui/material'

import { LanguageSelect } from '../Search/LanguageSelect'
import { RegionCheckbox } from '../Search/RegionCheckbox'
import { SearchInput } from '../Search/SearchInput'
import { REGIONS, Region } from '../Search/types'

export const Header: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('')
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
            {REGIONS.map((region) => (
              <RegionCheckbox
                key={region}
                region={region}
                checked={selectedRegions.includes(region)}
                onChange={handleRegionChange}
              />
            ))}
          </FormGroup>
        </div>
      </div>
    </header>
  )
}