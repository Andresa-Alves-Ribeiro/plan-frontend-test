import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@/styles/carousel.css'
import { useCountriesContext } from '@/contexts/CountriesContext'
import { Country } from '@/types/country'

import { createSlides } from '../../utils/slides'
import { NextArrow, PrevArrow } from '../carousel/CarouselArrows'
import { getCarouselSettings } from '../carousel/carouselSettings'
import { Container } from '../layout/Container'
import { CountryCard } from './CountryCard'

interface CountryGridProps {
  countries: Country[]
}

export const CountryGrid = ({ countries }: CountryGridProps) => {
  const { searchTerm, selectedRegions, selectedLanguage } = useCountriesContext()
  const hasActiveFilters = searchTerm !== '' || selectedRegions.length > 0 || selectedLanguage !== ''

  const baseSettings = getCarouselSettings()
  const settings = {
    ...baseSettings,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    rows: hasActiveFilters ? 1 : 2,
    slidesPerRow: 1,
    appendDots: (dots: React.ReactNode) => (
      <div className="slick-dots-container">
        <ul className="flex gap-2 m-0 p-0 list-none">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="dot-pagination" />
    )
  }

  if (countries.length === 0) {
    return (
      <Container>
        <div className="flex justify-center">
          <p className="text-black font-bold text-xl">Nenhum país encontrado</p>
        </div>
      </Container>
    )
  }

  if (countries.length === 1) {
    return (
      <Container>
        <div className="flex justify-center">
          <CountryCard country={countries[0]} />
        </div>
      </Container>
    )
  }

  const slides = createSlides(countries, 4)

  return (
    <Container>
      <div className="overflow-hidden pb-8">
        <Slider {...settings}>
          {slides.map((slideCountries: Country[], index: number) => (
            <div key={index} className="px-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {slideCountries.map((country: Country) => (
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
