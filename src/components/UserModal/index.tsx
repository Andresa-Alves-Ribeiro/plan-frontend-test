/* eslint-disable no-unused-vars */
import React from 'react'

import { X } from 'lucide-react'
import Image from 'next/image'

import { UserProps } from '@/@types'
import { Modal } from '@/components/Modal'

interface UserModalProps {
  showModal: boolean
  setShowModal: (value: boolean) => void
  user: UserProps | undefined
}

export function UserModal({ showModal, setShowModal, user }: UserModalProps) {
  if (!showModal) return null

  return (
    <Modal.Root>
      <Modal.Header title="Usuário">
        <X
          onClick={() => setShowModal(false)}
          color="white"
          className="ml-auto cursor-pointer"
        />
      </Modal.Header>
      <Modal.Content>
        {user?.login && (
          <div className="flex flex-col justify-center content-center p-5">
            <Image
              className="m-auto rounded-full"
              src={user.avatarUrl}
              alt={user.name}
              width={128}
              height={128}
            />
            <h3 className="m-auto text-xl text-blue_intermediate font-semibold">
              {user.name}
            </h3>
            <a
              target="_blank"
              href={user.htmlUrl}
              className="m-auto hover:text-blue_light"
              rel="noreferrer">
              {user.login}
            </a>
            <p className="m-auto">Criado em: {user.createdAt}</p>
          </div>
        )}
        {!user?.login && (
          <div className="flex grow flex-col justify-center content-center p-5">
            <h3 className="m-auto text-xl text-blue_intermediate font-semibold">
              Usuário não encontrado
            </h3>
          </div>
        )}
      </Modal.Content>
    </Modal.Root>
  )
}
