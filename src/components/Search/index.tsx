import React, { useState } from 'react'

import { FormGroup } from '@mui/material'

import { regionTranslations } from '../../../types/continent'
import { LanguageSelect } from './LanguageSelect'
import { RegionCheckbox } from './RegionCheckbox'
import { SearchInput } from './SearchInput'
import { Region } from './types'

export const SearchBar: React.FC = () => {
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
    <div className="flex flex-col gap-4">
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
  )
}
