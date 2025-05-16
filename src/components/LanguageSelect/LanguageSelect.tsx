import React from 'react'

import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

import { outlinedInputStyles } from '../../styles/muiStyles'

export const LanguageSelect: React.FC = () => (
  <FormControl>
    <InputLabel id="language-select-label">Idioma</InputLabel>
    <Select
      labelId="language-select-label"
      id="language-select"
      value="pt"
      label="Idioma"
      sx={{
        '& .MuiOutlinedInput-root': {
          ...outlinedInputStyles,
        },
      }}
    >
      <MenuItem value="pt">Português</MenuItem>
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="es">Español</MenuItem>
    </Select>
  </FormControl>
)
