import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@/styles/carousel.css'
import { useCountriesContext } from '@/contexts/CountriesContext'
import { Country } from '@/types/country'
import { groupCountries } from '@/utils/countryUtils'

import { CardCountry } from '../CardCountry'
import { NextArrow, PrevArrow } from '../carousel/CarouselArrows'
import { getCarouselSettings } from '../carousel/carouselSettings'

interface CountryGridProps {
  countries: Country[]
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full px-12">
    {children}
  </div>
)

const CountryCard = ({ country }: { country: Country }) => (
  <div key={country.name.common} className="flex justify-center">
    <CardCountry country={country} />
  </div>
)

export const CountryGrid = ({ countries }: CountryGridProps) => {
  const { searchTerm, selectedLanguage, selectedRegions } = useCountriesContext()
  const hasActiveFilters = searchTerm || selectedLanguage || selectedRegions.length > 0

  // Se houver filtros ativos, mostrar em grid simples
  if (hasActiveFilters) {
    return (
      <Container>
        <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
        </div>
      </Container>
    )
  }

  // Se não houver filtros, mostrar no carousel
  const baseSettings = getCarouselSettings()
  const settings = {
    ...baseSettings,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: React.ReactNode) => (
      <div className="slick-dots-container">
        <ul className="flex gap-2 m-0 p-0 list-none">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="dot-pagination" />
    )
  }
  const groupedCountries = groupCountries(countries)

  // Se houver apenas um grupo com um país, renderiza sem o Slider
  if (groupedCountries.length === 1 && groupedCountries[0].length === 1) {
    return (
      <Container>
        <div className="flex justify-center">
          <CountryCard country={groupedCountries[0][0]} />
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <div className="overflow-hidden pb-8">
        <Slider {...settings}>
          {groupedCountries.map((group, index) => (
            <div key={index} className="px-0">
              <div className={`grid ${group.length === 1 ? 'grid-cols-1' : 'grid-cols-4'} mb-6`}>
                {group.map((country) => (
                  <CountryCard key={country.name.common} country={country} />
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  )
}
