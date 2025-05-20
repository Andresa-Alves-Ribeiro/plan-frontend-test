/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useMemo, JSX } from 'react'

import ClearAllRounded from '@mui/icons-material/ClearAllRounded'
import MenuIcon from '@mui/icons-material/Menu'
import { FormGroup, Button, IconButton, Drawer, Box, Typography } from '@mui/material'

import { useCountriesContext } from '../../contexts/CountriesContext'
import { regionTranslations } from '../../types/continent'
import { LanguageSelect } from './LanguageSelect'
import { RegionCheckbox } from './RegionCheckbox'
import { SearchInput } from './SearchInput'
import { Region } from './types'

const DRAWER_WIDTH = '85%'
const DRAWER_MAX_WIDTH = '320px'
const DRAWER_PADDING = '1rem 2rem'

const commonButtonStyles = {
  color: '#FFFFFF',
  borderColor: '#FFFFFF',
  '&:hover': {
    borderColor: '#FFFFFF',
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  }
}

const commonTypographyStyles = {
  color: '#FFFFFF',
  fontWeight: 600
}

interface FilterContentProps {
  selectedLanguage: string
  setSelectedLanguage: (lang: string) => void
  selectedRegions: Region[]
  handleRegionChange: (region: Region) => void
  handleClearFilters: () => void
  setSearchTerm: (term: string) => void
}

const MobileFilterContent = ({
  selectedLanguage,
  setSelectedLanguage,
  selectedRegions,
  handleRegionChange,
  handleClearFilters,
  setSearchTerm
}: FilterContentProps): JSX.Element => (
  <div className="flex flex-col gap-6">
    <div className="flex flex-col gap-4">
      <Typography variant="h6" sx={commonTypographyStyles}>
        Busca
      </Typography>
      <SearchInput onSearch={setSearchTerm} />
    </div>

    <div className="flex flex-col gap-4">
      <Typography variant="h6" sx={commonTypographyStyles}>
        Idioma
      </Typography>
      <LanguageSelect
        value={selectedLanguage}
        onChange={setSelectedLanguage}
      />
    </div>

    <div className="flex flex-col gap-4">
      <Typography variant="h6" sx={commonTypographyStyles}>
        Regiões
      </Typography>
      <FormGroup sx={{ gap: 2 }}>
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

    <Button
      variant="outlined"
      startIcon={<ClearAllRounded />}
      onClick={handleClearFilters}
      fullWidth
      sx={commonButtonStyles}
      aria-label="Limpar todos os filtros"
    >
      Limpar Filtros
    </Button>
  </div>
)

const DesktopFilterContent = ({
  selectedLanguage,
  setSelectedLanguage,
  selectedRegions,
  handleRegionChange,
  handleClearFilters,
  setSearchTerm
}: FilterContentProps): JSX.Element => (
  <div className="flex flex-col gap-4 items-center">
    <div className="flex gap-4 items-center justify-center">
      <SearchInput onSearch={setSearchTerm} />
      <LanguageSelect
        value={selectedLanguage}
        onChange={setSelectedLanguage}
      />
      <Button
        variant="outlined"
        startIcon={<ClearAllRounded />}
        onClick={handleClearFilters}
        sx={commonButtonStyles}
        aria-label="Limpar todos os filtros"
      >
        Limpar Filtros
      </Button>
    </div>

    <FormGroup row sx={{ gap: 2, justifyContent: 'center' }}>
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

export const SearchBar = (): JSX.Element => {
  const { selectedLanguage, setSelectedLanguage, selectedRegions, setSelectedRegions, setSearchTerm } = useCountriesContext()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleRegionChange = useCallback((region: Region) => {
    setSelectedRegions(prev =>
      prev.includes(region)
        ? prev.filter(r => r !== region)
        : [...prev, region]
    )
  }, [setSelectedRegions])

  const handleClearFilters = useCallback(() => {
    setSearchTerm('')
    setSelectedLanguage('')
    setSelectedRegions([])
  }, [setSearchTerm, setSelectedLanguage, setSelectedRegions])

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen(prev => !prev)
  }, [])

  const mobileFilterContent = useMemo(() => (
    <MobileFilterContent
      selectedLanguage={selectedLanguage}
      setSelectedLanguage={setSelectedLanguage}
      selectedRegions={selectedRegions}
      handleRegionChange={handleRegionChange}
      handleClearFilters={handleClearFilters}
      setSearchTerm={setSearchTerm}
    />
  ), [selectedLanguage, setSelectedLanguage, selectedRegions, handleRegionChange, handleClearFilters, setSearchTerm])

  const desktopFilterContent = useMemo(() => (
    <DesktopFilterContent
      selectedLanguage={selectedLanguage}
      setSelectedLanguage={setSelectedLanguage}
      selectedRegions={selectedRegions}
      handleRegionChange={handleRegionChange}
      handleClearFilters={handleClearFilters}
      setSearchTerm={setSearchTerm}
    />
  ), [selectedLanguage, setSelectedLanguage, selectedRegions, handleRegionChange, handleClearFilters, setSearchTerm])

  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:block" role="search">
        {desktopFilterContent}
      </div>

      {/* Mobile/Tablet View */}
      <div className="lg:hidden">
        <IconButton
          onClick={toggleDrawer}
          sx={{
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }
          }}
          aria-label="Abrir menu de filtros"
          aria-expanded={isDrawerOpen}
          aria-controls="filter-drawer"
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={toggleDrawer}
          id="filter-drawer"
          slotProps={{
            paper: {
              sx: {
                backgroundColor: '#fcac50',
                color: '#FFFFFF',
                padding: DRAWER_PADDING,
                width: DRAWER_WIDTH,
                maxWidth: {
                  xs: DRAWER_MAX_WIDTH,
                  sm: '400px',
                  md: '500px'
                },
                '& .MuiFormControl-root': {
                  width: '100%'
                },
                '& .MuiInputBase-root': {
                  width: '100%'
                }
              }
            }
          }}
        >
          <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {mobileFilterContent}
          </Box>
        </Drawer>
      </div>
    </>
  )
}
