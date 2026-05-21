import type { ReactNode } from "react"

export interface ProfessionCard {
  icon: string
  title: string
  description: string
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  image?: string
  imagePosition?: 'right' | 'background'
  cards?: ProfessionCard[]
  showButton?: boolean
  buttonText?: string
}

export interface SectionProps extends Section {
  isActive: boolean
}
