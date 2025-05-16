import React from 'react'

import SearchIcon from '@mui/icons-material/Search'
import { TextField, Select, MenuItem, FormControl, InputLabel, InputAdornment, Checkbox, FormControlLabel, FormGroup } from '@mui/material'

export const SearchBar: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <TextField
          placeholder="Buscar..."
          variant="outlined"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon sx={{ color: '#FFFFFF' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            width: '400px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '9999px',
              '& fieldset': {
                borderWidth: '3px',
                borderColor: '#FFFFFF',
              },
              '&:hover fieldset': {
                borderColor: '#FFFFFF',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#FFFFFF',
              },
            },
          }}
        />

        <FormControl sx={{ width: '400px' }}>
          <InputLabel id="select-label">Selecione uma opção</InputLabel>
          <Select
            labelId="select-label"
            label="Selecione uma opção"
            variant="outlined"
            sx={{
              borderRadius: '9999px',
              '& .MuiOutlinedInput-notchedOutline': {
                borderWidth: '3px',
                borderColor: '#FFFFFF',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#FFFFFF',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#FFFFFF',
              },
            }}
          >
            <MenuItem value="option1">Opção 1</MenuItem>
            <MenuItem value="option2">Opção 2</MenuItem>
            <MenuItem value="option3">Opção 3</MenuItem>
          </Select>
        </FormControl>
      </div>

      <FormGroup row sx={{ gap: 2 }}>
        <FormControlLabel
          control={<Checkbox
            sx={{
              '& .MuiSvgIcon-root': {
                width: '24px',
                height: '24px',
                borderRadius: '10px',
                border: '3px solid #FFFFFF',
                backgroundColor: 'transparent',
                '& path': {
                  display: 'none'
                }
              },
              '&.Mui-checked .MuiSvgIcon-root': {
                backgroundColor: '#FFFFFF',
                '& path': {
                  display: 'block',
                  color: '#000000'
                }
              }
            }}
          />}
          label="América do Norte"
          sx={{ color: '#000000' }}
        />
        <FormControlLabel
          control={<Checkbox
            sx={{
              '& .MuiSvgIcon-root': {
                width: '24px',
                height: '24px',
                borderRadius: '10px',
                border: '3px solid #FFFFFF',
                backgroundColor: 'transparent',
                '& path': {
                  display: 'none'
                }
              },
              '&.Mui-checked .MuiSvgIcon-root': {
                backgroundColor: '#FFFFFF',
                '& path': {
                  display: 'block',
                  color: '#000000'
                }
              }
            }}
          />}
          label="América do Sul"
          sx={{ color: '#000000' }}
        />
        <FormControlLabel
          control={<Checkbox
            sx={{
              '& .MuiSvgIcon-root': {
                width: '24px',
                height: '24px',
                borderRadius: '10px',
                border: '3px solid #FFFFFF',
                backgroundColor: 'transparent',
                '& path': {
                  display: 'none'
                }
              },
              '&.Mui-checked .MuiSvgIcon-root': {
                backgroundColor: '#FFFFFF',
                '& path': {
                  display: 'block',
                  color: '#000000'
                }
              }
            }}
          />}
          label="Europa"
          sx={{ color: '#000000' }}
        />
        <FormControlLabel
          control={<Checkbox
            sx={{
              '& .MuiSvgIcon-root': {
                width: '24px',
                height: '24px',
                borderRadius: '10px',
                border: '3px solid #FFFFFF',
                backgroundColor: 'transparent',
                '& path': {
                  display: 'none'
                }
              },
              '&.Mui-checked .MuiSvgIcon-root': {
                backgroundColor: '#FFFFFF',
                '& path': {
                  display: 'block',
                  color: '#000000'
                }
              }
            }}
          />}
          label="Ásia"
          sx={{ color: '#000000' }}
        />
        <FormControlLabel
          control={<Checkbox
            sx={{
              '& .MuiSvgIcon-root': {
                width: '24px',
                height: '24px',
                borderRadius: '10px',
                border: '3px solid #FFFFFF',
                backgroundColor: 'transparent',
                '& path': {
                  display: 'none'
                }
              },
              '&.Mui-checked .MuiSvgIcon-root': {
                backgroundColor: '#FFFFFF',
                '& path': {
                  display: 'block',
                  color: '#000000'
                }
              }
            }}
          />}
          label="África"
          sx={{ color: '#000000' }}
        />
        <FormControlLabel
          control={<Checkbox
            sx={{
              '& .MuiSvgIcon-root': {
                width: '24px',
                height: '24px',
                borderRadius: '10px',
                border: '3px solid #FFFFFF',
                backgroundColor: 'transparent',
                '& path': {
                  display: 'none'
                }
              },
              '&.Mui-checked .MuiSvgIcon-root': {
                backgroundColor: '#FFFFFF',
                '& path': {
                  display: 'block',
                  color: '#000000'
                }
              }
            }}
          />}
          label="Oceania"
          sx={{ color: '#000000' }}
        />
      </FormGroup>
    </div>
  )
}
