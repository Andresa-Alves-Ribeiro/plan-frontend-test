'use client'

import React from 'react'

import { CountryGrid } from '@/components/Countries/CountryGrid'
import { ErrorMessage } from '@/components/Feedback/ErrorMessage'
import { LoadingSpinner } from '@/components/Feedback/LoadingSpinner'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { UserModal } from '@/components/UserModal'
import { useHome } from '@/hooks'
import { useCountries } from '@/hooks/useCountries'

export default function Home() {
  const { user, showModal, setShowModal } = useHome()
  const { countries, loading, error } = useCountries()

  if (loading) {
    return (
      <>
        <Header />
        <main className="flex flex-col items-center justify-center py-4">
          <LoadingSpinner />
        </main>
        <Footer />
      </>
    )
  }

  if (error) {
    return (
      <>
        <Header />
        <main className="flex flex-col items-center justify-center py-4">
          <ErrorMessage message={error} />
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center py-4">
        <CountryGrid countries={countries} />
      </main>
      <UserModal showModal={showModal} setShowModal={setShowModal} user={user} />
      <Footer />
    </>
  )
}
