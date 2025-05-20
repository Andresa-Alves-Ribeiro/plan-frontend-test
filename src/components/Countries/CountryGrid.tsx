import React, { useEffect, useState } from 'react'
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
  <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
    {children}
  </div>
)

const CountryCard = ({ country }: { country: Country }) => (
  <div key={country.name.common} className="flex justify-center">
    <CardCountry country={country} />
  </div>
)

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export const CountryGrid = ({ countries }: CountryGridProps) => {
  const { searchTerm, selectedRegions, selectedLanguage } = useCountriesContext()
  const { width } = useWindowSize()
  const hasActiveFilters = searchTerm !== '' || selectedRegions.length > 0 || selectedLanguage !== ''
  const isDesktop = width >= 1024

  const baseSettings = getCarouselSettings()
  const settings = {
    ...baseSettings,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // Se não houver filtros ativos, mostra 2 linhas apenas em desktop
    rows: hasActiveFilters ? 1 : isDesktop ? 2 : 2,
    slidesPerRow: 1,
    dots: isDesktop, // Only show dots on desktop
    arrows: true, // Ensure arrows are always visible
    slidesToShow: width < 640 ? 1 : width < 1024 ? 1 : 1,
    slidesToScroll: 1,
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

  // Cria slides com número de cards baseado no tamanho da tela
  const slides = []
  const itemsPerSlide = width < 640 ? 1 : width < 1024 ? 2 : 4

  for (let i = 0; i < countries.length; i += itemsPerSlide) {
    const slideCountries = countries.slice(i, i + itemsPerSlide)
    if (slideCountries.length > 0) {
      slides.push(slideCountries)
    }
  }

  return (
    <Container>
      <div className="overflow-hidden pb-4 sm:pb-6 md:pb-8">
        <Slider {...settings}>
          {slides.map((slideCountries, index) => (
            <div key={index} className="px-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4 md:mb-6">
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
