import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@/styles/carousel.css'
import { Country } from '@/types/country'
import { groupCountries } from '@/utils/countryUtils'

import { CardCountry } from '../CardCountry'
import { NextArrow, PrevArrow } from '../carousel/CarouselArrows'
import { getCarouselSettings } from '../carousel/carouselSettings'

interface CountryGridProps {
  countries: Country[]
}

export const CountryGrid = ({ countries }: CountryGridProps) => {
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

  return (
    <div className="w-full px-12">
      <div className="overflow-hidden pb-8">
        <Slider {...settings}>
          {groupedCountries.map((group, index) => (
            <div key={index} className="px-0">
              <div className="grid grid-cols-4 mb-6">
                {group.map((country) => (
                  <div key={country.name.common} className="flex justify-center p-0">
                    <CardCountry country={country} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
