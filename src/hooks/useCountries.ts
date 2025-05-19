import { useState, useEffect, useMemo } from 'react'

import { Region } from '../components/Search/types'
import { Country, countriesService } from '../services/countries'
import { regionTranslations, northAmericanCountries } from '../types/continent'

interface UseCountriesParams {
  selectedLanguage?: string;
}

export const useCountries = ({ selectedLanguage: initialLanguage = '' }: UseCountriesParams = {}) => {
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegions, setSelectedRegions] = useState<Region[]>([])
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage)

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
    // Criar um Set para rastrear países já incluídos
    const includedCountries = new Set<string>()

    return countries.filter(country => {
      // Se o país já foi incluído, pular
      if (includedCountries.has(country.name.common)) {
        return false
      }

      const searchTermLower = searchTerm.toLowerCase()
      const matchesSearch =
        country.name.common.toLowerCase().includes(searchTermLower) ||
        country.name.official.toLowerCase().includes(searchTermLower) ||
        (country.translations?.por?.common?.toLowerCase().includes(searchTermLower)) ||
        (country.translations?.por?.official?.toLowerCase().includes(searchTermLower))

      // Mapear a região da API para o tipo Region
      const apiRegion = country.region
      let mappedRegion: Region | undefined

      if (apiRegion === 'Americas') {
        // Se for um país das Américas, determinar se é América do Norte ou do Sul
        mappedRegion = northAmericanCountries.includes(country.name.common)
          ? 'North America'
          : 'South America'
      } else {
        // Para outras regiões, usar o mapeamento direto
        mappedRegion = Object.keys(regionTranslations).find(
          key => key === apiRegion
        ) as Region
      }

      const matchesRegion = selectedRegions.length === 0 || (mappedRegion && selectedRegions.includes(mappedRegion))

      // Map the selected language code to the API's language code
      const languageCodeMap: { [key: string]: string } = {
        'en': 'eng',
        'es': 'spa',
        'pt': 'por',
        'fr': 'fra',
        'de': 'deu',
        'it': 'ita',
        'ru': 'rus',
        'zh': 'zho',
        'ja': 'jpn',
        'ko': 'kor',
        'ar': 'ara',
        'hi': 'hin',
        'bn': 'ben',
        'tr': 'tur',
        'nl': 'nld',
        'sv': 'swe',
        'pl': 'pol',
        'vi': 'vie',
        'th': 'tha',
        'id': 'ind',
        'ms': 'msa',
        'fa': 'fas',
        'he': 'heb',
        'el': 'ell',
        'cs': 'ces',
        'da': 'dan',
        'fi': 'fin',
        'hu': 'hun',
        'no': 'nob',
        'ro': 'ron',
        'sk': 'slk',
        'uk': 'ukr',
        'bg': 'bul',
        'hr': 'hrv',
        'ca': 'cat',
        'et': 'est',
        'gl': 'glg',
        'is': 'isl',
        'lv': 'lav',
        'lt': 'lit',
        'sl': 'slv',
        'sr': 'srp',
        'ta': 'tam',
        'te': 'tel',
        'ur': 'urd',
        'cy': 'cym',
        'eu': 'eus',
        'ga': 'gle',
        'gu': 'guj',
        'ha': 'hau',
        'kn': 'kan',
        'km': 'khm',
        'lo': 'lao',
        'ml': 'mal',
        'mr': 'mar',
        'ne': 'nep',
        'pa': 'pan',
        'si': 'sin',
        'sw': 'swa',
        'yo': 'yor',
        'zu': 'zul'
      }

      const apiLanguageCode = languageCodeMap[selectedLanguage] || selectedLanguage
      const matchesLanguage = !selectedLanguage ||
        Object.keys(country.languages || {}).includes(apiLanguageCode)

      const shouldInclude = matchesSearch && matchesRegion && matchesLanguage

      // Se o país deve ser incluído, adicionar ao Set
      if (shouldInclude) {
        includedCountries.add(country.name.common)
      }

      return shouldInclude
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
    regions,
    languages,
    selectedLanguage,
    setSelectedLanguage
  }
}
