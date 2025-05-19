/* eslint-disable no-unused-vars */
import React from 'react'

import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

import { languageSelectStyles } from '../../styles/muiStyles'
import { LANGUAGES } from './constants'

interface LanguageSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export const LanguageSelect = ({ value, onChange }: LanguageSelectProps) => {
  return (
    <FormControl>
      <InputLabel id="language-select-label">Idioma</InputLabel>
      <Select
        labelId="language-select-label"
        label="Idioma"
        value={value}
        onChange={(event) => onChange(event.target.value as string)}
        variant="outlined"
        MenuProps={languageSelectStyles}
      >
        {LANGUAGES.map((language) => (
          <MenuItem key={language.code} value={language.code}>
            {language.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
