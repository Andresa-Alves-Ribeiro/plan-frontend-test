import React from 'react'

interface ContainerProps {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => (
  <div className="w-full px-12">
    {children}
  </div>
)
