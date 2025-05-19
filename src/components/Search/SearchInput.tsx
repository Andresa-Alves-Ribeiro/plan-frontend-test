/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import SearchRounded from '@mui/icons-material/SearchRounded'
import { TextField, InputAdornment, IconButton } from '@mui/material'

import { outlinedInputStyles } from '../../styles/muiStyles'
import { validateSearchTerm } from '../../validations/searchValidations'

interface SearchInputProps {
  onSearch: (term: string) => void
}

export const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSearch = () => {
    const validation = validateSearchTerm(localSearchTerm)

    if (validation.isValid && validation.data) {
      setError(null)
      onSearch(validation.data.searchTerm)
    } else {
      setError(validation.error)
    }
  }

  return (
    <TextField
      placeholder='Informe o país que deseja conhecer...'
      variant='outlined'
      fullWidth
      value={localSearchTerm}
      onChange={(e) => {
        setLocalSearchTerm(e.target.value)
        setError(null)
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleSearch()
        }
      }}
      error={!!error}
      helperText={error}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position='end'>
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
