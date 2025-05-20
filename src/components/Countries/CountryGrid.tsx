import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@/styles/carousel.css'
import { useCountriesContext } from '@/contexts/CountriesContext'
import { Country } from '@/types/country'

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
  const { searchTerm, selectedRegions, selectedLanguage } = useCountriesContext()
  const hasActiveFilters = searchTerm !== '' || selectedRegions.length > 0 || selectedLanguage !== ''

  const baseSettings = getCarouselSettings()
  const settings = {
    ...baseSettings,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // Se não houver filtros ativos, mostra 2 linhas
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

  // Se não houver países, retorna mensagem
  if (countries.length === 0) {
    return <div className="flex justify-center">
      <p className="text-black font-bold text-xl">Nenhum país encontrado</p>
    </div>
  }

  // Se houver apenas um país, renderiza sem o Slider
  if (countries.length === 1) {
    return (
      <Container>
        <div className="flex justify-center">
          <CountryCard country={countries[0]} />
        </div>
      </Container>
    )
  }

  // Cria slides com no máximo 4 países cada
  const slides = []
  const itemsPerSlide = 4

  for (let i = 0; i < countries.length; i += itemsPerSlide) {
    const slideCountries = countries.slice(i, i + itemsPerSlide)
    if (slideCountries.length > 0) {
      slides.push(slideCountries)
    }
  }

  return (
    <Container>
      <div className="overflow-hidden pb-8">
        <Slider {...settings}>
          {slides.map((slideCountries, index) => (
            <div key={index} className="px-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {slideCountries.map((country) => (
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
