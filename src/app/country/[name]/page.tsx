import React from 'react'

import Image from 'next/image'
import { notFound } from 'next/navigation'

import { Button } from '@/components/Button'
import { Footer } from '@/components/Footer'
import { countriesService } from '@/services/countries'
import { getContinentImage, getDisplayRegion, getDisplaySubregion, getDisplayLanguages } from '@/utils/continentMappings'

import styles from './page.module.scss'

interface PageProps {
  params: {
    name: string
  }
}

export default async function CountryPage({ params }: PageProps) {
  const countries = await countriesService.getCountryByName(params.name)

  if (!countries || countries.length === 0) {
    notFound()
  }

  const country = countries[0]
  const countryName = country.translations?.por?.common || country.name.common
  const officialName = country.translations?.por?.official || country.name.official
  const displayRegion = getDisplayRegion(country.region, country.name.common)

  // Format population with commas
  const formattedPopulation = new Intl.NumberFormat('pt-BR').format(country.population)

  // Get currency information
  const currencyInfo = country.currencies ? Object.values(country.currencies)[0] : null
  const currencyName = currencyInfo?.name ?? 'N/A'
  const currencySymbol = currencyInfo?.symbol ?? ''

  // Get languages
  const languages = country.languages ? Object.values(country.languages).join(', ') : 'N/A'

  return (
    <div className="min-h-screen flex flex-col">
      <Image src="/img/LOGO PLAN.svg" alt="Logo da plan" width={108} height={59} className='mt-8 ml-4 md:ml-18' />

      <div className="flex-1 flex flex-col items-center justify-center my-8 md:my-14 px-4">
        <div className={styles.card}>
          <div className={`${styles.header} flex items-center justify-between`}>
            <div className={`${styles.headerContent} flex flex-col`}>
              <h3 className={`${styles.region} text-white font-bold text-md italic m-0`}>{displayRegion}</h3>
            </div>
            <Image
              src={getContinentImage(country.region, country.name.common)}
              alt={`Imagem do continente ${displayRegion}`}
              width={28}
              height={36}
            />
          </div>

          <div className={`${styles.content} flex flex-col lg:flex-row`}>
            <div className="flex flex-col items-center gap-2 mb-8 lg:mb-0">
              <Image
                src={country.flags.svg}
                alt={`Bandeira de ${countryName}`}
                width={290}
                height={220}
                className={styles.flag}
              />
              <h3 className={`${styles.countryName} text-white font-bold text-lg`}>{countryName}</h3>
            </div>

            <div className="flex flex-col gap-2 m-auto items-center">
              <h3 className={`${styles.countryName} text-white font-bold text-3xl md:text-5xl my-4 md:my-6`}>{countryName}</h3>

              <div className='flex flex-col items-center w-full'>
                <div className={styles.detailItem}>
                  <h4>Nome Oficial:</h4>
                  <p>{officialName}</p>
                </div>

                <div className={styles.detailItem}>
                  <h4>Capital:</h4>
                  <p>{country.capital?.[0] ?? 'N/A'}</p>
                </div>

                <div className={styles.detailItem}>
                  <h4>População:</h4>
                  <p>{formattedPopulation}</p>
                </div>

                <div className={styles.detailItem}>
                  <h4>Moeda:</h4>
                  <p>{currencyName} {currencySymbol}</p>
                </div>

                <div className={styles.detailItem}>
                  <h4>Idiomas:</h4>
                  <p>{languages ? getDisplayLanguages(languages) : 'N/A'}</p>
                </div>

                <div className={styles.detailItem}>
                  <h4>Região:</h4>
                  <p>{displayRegion}</p>
                </div>

                <div className={styles.detailItem}>
                  <h4>Sub-região:</h4>
                  <p>{country.subregion ? getDisplaySubregion(country.subregion) : 'N/A'}</p>
                </div>

                <div className="mt-4">
                  <Button href="/">
                    Voltar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
