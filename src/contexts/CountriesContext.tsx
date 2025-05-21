import React, { createContext, useContext } from 'react'

import { useCountries } from '../hooks/useCountries'

const CountriesContext = createContext<ReturnType<typeof useCountries> | undefined>(undefined)

export const CountriesProvider = ({ children }: { children: React.ReactNode }) => {
  const countriesData = useCountries()

  return (
    <CountriesContext.Provider value={countriesData}>
      {children}
    </CountriesContext.Provider>
  )
}

export const useCountriesContext = () => {
  const context = useContext(CountriesContext)
  if (!context) {
    throw new Error('useCountriesContext must be used within a CountriesProvider')
  }
  return context
}
