import React from 'react'

interface ArrowProps {
  onClick?: () => void
}

export const NextArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      className="slick-next"
      onClick={onClick}
      style={{ color: 'white', background: 'none', border: 'none', padding: 0 }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

export const PrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      className="slick-prev"
      onClick={onClick}
      style={{ color: 'white', background: 'none', border: 'none', padding: 0 }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
