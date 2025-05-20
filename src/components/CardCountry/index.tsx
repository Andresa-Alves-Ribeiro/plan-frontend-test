import React from 'react'

import Image from 'next/image'

import { Button } from '@/components/Button'
import { useCountriesContext } from '@/contexts/CountriesContext'
import { Country } from '@/services/countries'
import { getContinentImage, getDisplayRegion } from '@/utils/continentMappings'

import styles from './CardCountry.module.scss'

interface CardCountryProps {
  country: Country;
}

export const CardCountry: React.FC<CardCountryProps> = ({ country }) => {
  const { selectedLanguage } = useCountriesContext()
  const countryName = country.translations?.por?.common || country.name.common
  const displayRegion = getDisplayRegion(country.region, country.name.common)
  const countryLanguage = country.languages?.[selectedLanguage] || ''

  return (
    <div className={`${styles.cardCountry} flex flex-col items-center justify-center relative`}>
      <div className={`${styles.cardCountry__header} absolute top-0 left-0 flex items-center justify-between w-full py-2 px-3 rounded-t-2xl z-10`}>
        <div className="flex flex-col">
          <h3 className="text-white italic font-bold text-md">{displayRegion}</h3>
          {selectedLanguage && countryLanguage && (
            <p className="text-white text-sm">{countryLanguage}</p>
          )}
        </div>
        <Image
          src={getContinentImage(country.region, country.name.common)}
          alt={`Imagem do continente ${displayRegion}`}
          width={28}
          height={36}
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-1">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={country.flags.svg}
            alt={`Bandeira de ${countryName}`}
            width={29}
            height={36}
            className="w-[29px] h-[36px] object-contain"
          />
          <h3 className="text-neutral-500 font-bold text-2xl truncate max-w-[200px] text-center">{countryName}</h3>
        </div>

        <div className="flex items-center justify-center w-full gap-2">
          <Image src="/img/CAPITAL ICON.svg" alt="Capital do País" width={20} height={20} />
          <p className="text-neutral-500 font-bold text-lg">{country.capital?.[0] || 'N/A'}</p>
        </div>
      </div>

      <Button href={`/country/${country.name.common}`}>
        Ver mais
      </Button>
    </div>
  )
}
