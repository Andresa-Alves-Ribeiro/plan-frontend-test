/* eslint-disable no-unused-vars */
import { regionTranslations } from '../../types/continent'

export type Language = {
  code: string
  name: string
}

export type SearchProps = {
  onSearch: (term: string) => void
  onLanguageChange: (language: string) => void
  onRegionChange: (regions: Region[]) => void
  initialLanguage?: string
  initialRegions?: Region[]
}

export type Region = keyof typeof regionTranslations
