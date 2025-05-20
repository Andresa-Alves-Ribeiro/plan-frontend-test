import { regionMap, regionTranslations, northAmericanCountries, subregionTranslations, languageTranslations, officialNameTranslations } from '../types/continent'

export const getContinentImage = (region: string, countryName?: string): string => {
  if (region === 'Americas' && countryName) {
    if (northAmericanCountries.includes(countryName)) {
      return regionMap['North America']
    }
    return regionMap['South America']
  }
  return regionMap[region] || '/img/continents/africa.svg'
}

export const getDisplayRegion = (region: string, countryName?: string): string => {
  if (region === 'Americas' && countryName) {
    return northAmericanCountries.includes(countryName)
      ? regionTranslations['North America']
      : regionTranslations['South America']
  }
  return regionTranslations[region] || region
}

export const getDisplaySubregion = (subregion: string): string => {
  return subregionTranslations[subregion] || subregion
}

export const getDisplayLanguage = (language: string): string => {
  return languageTranslations[language] || language
}

export const getDisplayLanguages = (languages: string): string => {
  return languages.split(', ')
    .map(lang => getDisplayLanguage(lang))
    .join(', ')
}

export const getDisplayOfficialName = (officialName: string): string => {
  return officialNameTranslations[officialName] || officialName
}
