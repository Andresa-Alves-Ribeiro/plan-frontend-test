import { Country } from '@/types/country'

export const createSlides = (items: Country[], itemsPerSlide: number): Country[][] => {
  const slides: Country[][] = []

  for (let i = 0; i < items.length; i += itemsPerSlide) {
    const slideItems = items.slice(i, i + itemsPerSlide)
    if (slideItems.length > 0) {
      slides.push(slideItems)
    }
  }

  return slides
}
