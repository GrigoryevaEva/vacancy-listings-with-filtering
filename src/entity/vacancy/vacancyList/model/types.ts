import { IVacancyDescription } from '../../../../shared/api/vacancy'
import { RejectedDataType } from '../../../../shared/types'

export interface IVacancyListState {
  readonly vacancies: IVacancyDescription[]
  readonly loading: boolean
  readonly error: RejectedDataType | null
}