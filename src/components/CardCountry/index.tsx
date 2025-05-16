import React from 'react'

import Image from 'next/image'

import styles from './CardCountry.module.scss'

export const CardCountry = () => {
  return (
    <div className={`${styles.cardCountry} flex flex-col items-center justify-center relative`}>
      <div className={`${styles.cardCountry__header} flex items-center justify-between w-full p-2`}>
        <h3 className="text-white italic font-bold text-md">África</h3>
        <Image src="/img/countries/africa.svg" alt="Bandeira do Brasil" width={29} height={36} />
      </div>

      <div></div>
    </div>
  )
}
