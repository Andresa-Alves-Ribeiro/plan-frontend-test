import { useState, useEffect, useMemo } from 'react'

import { Country, countriesService } from '../services/countries'

export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegions, setSelectedRegions] = useState<string[]>([])
  const [selectedLanguage, setSelectedLanguage] = useState<string>('')

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true)
        const data = await countriesService.getAllCountries()
        setCountries(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch countries')
      } finally {
        setLoading(false)
      }
    }

    fetchCountries()
  }, [])

  const regions = useMemo(() => {
    const uniqueRegions = new Set(countries.map(country => country.region))
    return Array.from(uniqueRegions)
  }, [countries])

  const languages = useMemo(() => {
    const uniqueLanguages = new Set<string>()
    countries.forEach(country => {
      Object.values(country.languages || {}).forEach(lang => uniqueLanguages.add(lang))
    })
    return Array.from(uniqueLanguages)
  }, [countries])

  const filteredCountries = useMemo(() => {
    return countries.filter(country => {
      const matchesSearch = country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesRegion = selectedRegions.length === 0 || selectedRegions.includes(country.region)
      const matchesLanguage = !selectedLanguage ||
        Object.values(country.languages || {}).includes(selectedLanguage)

      return matchesSearch && matchesRegion && matchesLanguage
    })
  }, [countries, searchTerm, selectedRegions, selectedLanguage])

  return {
    countries: filteredCountries,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    selectedRegions,
    setSelectedRegions,
    selectedLanguage,
    setSelectedLanguage,
    regions,
    languages,
  }
}