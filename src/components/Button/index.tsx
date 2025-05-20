import React from 'react'

import Link from 'next/link'

import styles from './Button.module.scss'

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export const Button = ({ href, children }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`${styles.cardCountry__button} flex items-center justify-center text-white font-bold text-sm italic rounded-full mt-8`}
    >
      {children}
    </Link>
  )
}
