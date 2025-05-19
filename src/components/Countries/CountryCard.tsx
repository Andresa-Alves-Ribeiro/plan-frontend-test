import React from 'react'

import { Country } from '@/types/country'

import { CardCountry } from '../CardCountry'

interface CountryCardProps {
  country: Country
}

export const CountryCard = ({ country }: CountryCardProps) => (
  <div key={country.name.common} className="flex justify-center">
    <CardCountry country={country} />
  </div>
)
