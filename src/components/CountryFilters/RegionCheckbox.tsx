/* eslint-disable no-unused-vars */
import React from 'react'

import { FormControlLabel, Checkbox } from '@mui/material'

import { regionTranslations } from '../../types/continent'
import { Region } from './types'

interface RegionCheckboxProps {
  region: Region;
  checked: boolean;
  onChange: (region: Region) => void;
}

export const RegionCheckbox = ({ region, checked, onChange }: RegionCheckboxProps) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={checked}
        onChange={() => onChange(region)}
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
            backgroundColor: 'transparent',
            '& path': {
              display: 'block',
              color: '#F58220'
            }
          }
        }}
      />
    }
    label={regionTranslations[region]}
    sx={{ color: '#000000' }}
  />
)
