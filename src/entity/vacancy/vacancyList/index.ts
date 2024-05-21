export { default as vacancyListReducer } from './model/vacancyListSlice'

export { fetchVacancyList } from './model/vacancyListThunk'

export {
  selectVacancyList,
  selectVacancyListLoading,
  selectVacancyListError,
} from './model/selectors'

export { type IVacancyListState } from './model/types'