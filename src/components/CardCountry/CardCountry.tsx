import React from 'react'

import { ZA as Za } from 'country-flag-icons/react/3x2'
import Image from 'next/image'

import styles from './CardCountry.module.scss'

export const CardCountry = () => {
  return (
    <div className={`${styles.cardCountry} flex flex-col items-center justify-center relative`}>
      <div className={`${styles.cardCountry__header} absolute top-0 left-0 flex items-center justify-between w-full py-2 px-3 rounded-t-2xl z-10`}>
        <h3 className="text-white italic font-bold text-md">África</h3>
        <Image src="/img/countries/africa.svg" alt="Fechar" width={29} height={36} />
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-1">
        <div className="flex flex-col items-center justify-center">
          <Za className="w-[29px] h-[36px]" />
          <h3 className="text-neutral-500 font-bold text-2xl">África do Sul</h3>
        </div>

        <div className="flex items-center justify-center w-full gap-2">
          <Image src="/img/CAPITAL ICON.svg" alt="Capital do País" width={20} height={20} />
          <p className="text-neutral-500 font-bold text-lg">Pretória</p>
        </div>
      </div>

      <button className={`${styles.cardCountry__button} text-white font-bold text-sm italic rounded-full px-4 py-2`}>Ver mais</button>
    </div>
  )
}