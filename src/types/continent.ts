export type RegionMap = {
  [key: string]: string
}

export type RegionTranslations = {
  [key: string]: string
}

export const regionMap: RegionMap = {
  'Africa': '/img/continents/africa.svg',
  'North America': '/img/continents/americaNorte.svg',
  'South America': '/img/continents/southamerica.svg',
  'Asia': '/img/continents/asia.svg',
  'Europe': '/img/continents/europa.svg',
  'Oceania': '/img/continents/oceania.svg',
  'Antarctic': '/img/continents/antartida.png'
}

export const northAmericanCountries = [
  'USA', 'Canada', 'Mexico', 'Guatemala', 'Belize', 'El Salvador',
  'Honduras', 'Nicaragua', 'Costa Rica', 'Panama', 'Cuba', 'Jamaica',
  'Haiti', 'Dominican Republic', 'Bahamas', 'Puerto Rico', 'Greenland'
]

export const regionTranslations: RegionTranslations = {
  'Africa': 'África',
  'North America': 'América do Norte',
  'South America': 'América do Sul',
  'Asia': 'Ásia',
  'Europe': 'Europa',
  'Oceania': 'Oceania',
  'Antarctic': 'Antártida'
}
