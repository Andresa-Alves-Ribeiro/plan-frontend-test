'use client'

import React from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { UserModal } from '@/components/UserModal'
import { useHome } from '@/hooks'

import style from './Home.module.scss'

export default function Home() {
  const { user, showModal, setShowModal } = useHome()

  return (
    <>
      <Header />
      <main className={style.content}>
        <UserModal showModal={showModal} setShowModal={setShowModal} user={user} />
      </main>
      <Footer />
    </>
  )
}
