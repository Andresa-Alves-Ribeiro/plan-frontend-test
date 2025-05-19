import React from 'react'

interface ErrorMessageProps {
  message: string
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <p className="text-red-500 text-xl">{message}</p>
)