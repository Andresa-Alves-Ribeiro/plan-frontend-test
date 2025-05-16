import React, { useState } from 'react'

import SearchRounded from '@mui/icons-material/SearchRounded'
import { TextField, InputAdornment, IconButton } from '@mui/material'

import { outlinedInputStyles } from '../../styles/muiStyles'

export const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = () => {
    // TODO: Implementar a função de busca
    console.log('Procurando por:', searchTerm)
  }

  return (
    <TextField
      placeholder="Informe o país que deseja conhecer..."
      variant="outlined"
      fullWidth
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleSearch()
        }
      }}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch} sx={{ color: '#FFFFFF', width: '20px', height: '20px' }}>
                <SearchRounded sx={{ transform: 'rotate(90deg)' }} />
              </IconButton>
            </InputAdornment>
          )
        }
      }}
      sx={{
        width: '400px',
        '& .MuiOutlinedInput-root': {
          ...outlinedInputStyles,
        }
      }}
    />
  )
}
