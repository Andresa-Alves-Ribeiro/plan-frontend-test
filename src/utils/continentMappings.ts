import { regionMap, regionTranslations, northAmericanCountries } from '../types/continent'

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
