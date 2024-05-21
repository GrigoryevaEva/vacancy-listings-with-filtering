export interface IVacancyDescription {
  readonly id: number
  readonly company: string
  readonly logo: string
  readonly new: boolean
  readonly featured: boolean
  readonly position: string
  readonly role: string
  readonly level: string
  readonly postedAt: string
  readonly contract: string
  readonly location: string
  readonly languages: string[]
  readonly tools: string[]
}