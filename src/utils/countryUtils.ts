import { Country } from '@/types/country'

export const groupCountries = (countries: Country[], groupSize: number = 4) => {
  const sortedCountries = [...countries].sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  )

  // Se houver menos de 4 países, retorna cada país em seu próprio grupo
  if (sortedCountries.length <= 3) {
    return sortedCountries.map(country => [country])
  }

  const groupedCountries = []
  for (let i = 0; i < sortedCountries.length; i += groupSize) {
    groupedCountries.push(sortedCountries.slice(i, i + groupSize))
  }
  return groupedCountries
}
