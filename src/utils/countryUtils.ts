import { Country } from '@/types/country'

export const groupCountries = (countries: Country[], groupSize: number = 4) => {
  const sortedCountries = [...countries].sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  )

  const groupedCountries = []
  for (let i = 0; i < sortedCountries.length; i += groupSize) {
    groupedCountries.push(sortedCountries.slice(i, i + groupSize))
  }
  return groupedCountries
}
