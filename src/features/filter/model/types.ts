import { IResultFilter } from '../../../shared/api/filter'
import { RejectedDataType } from '../../../shared/types'

export interface IFilterState {
  readonly filters: string[]
  readonly resultFilter: IResultFilter
  readonly loading: boolean
  readonly error: RejectedDataType | null
}