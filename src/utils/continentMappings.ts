export const regionMap: { [key: string]: string } = {
  'Africa': '/img/continents/africa.svg',
  'North America': '/img/continents/americaNorte.svg',
  'South America': '/img/continents/southamerica.svg',
  'Asia': '/img/continents/asia.svg',
  'Europe': '/img/continents/europa.svg',
  'Oceania': '/img/continents/oceania.svg',
  'Antarctic': '/img/continents/antartida.png'
}

const northAmericanCountries = [
  'USA', 'Canada', 'Mexico', 'Guatemala', 'Belize', 'El Salvador',
  'Honduras', 'Nicaragua', 'Costa Rica', 'Panama', 'Cuba', 'Jamaica',
  'Haiti', 'Dominican Republic', 'Bahamas', 'Puerto Rico', 'Greenland'
]

const regionTranslations: { [key: string]: string } = {
  'Africa': 'África',
  'North America': 'América do Norte',
  'South America': 'América do Sul',
  'Asia': 'Ásia',
  'Europe': 'Europa',
  'Oceania': 'Oceania',
  'Antarctic': 'Antártida'
}

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
