export { 
  default as filterReducer,
  addFilter,
  deleteFilter,
  resetFilters,
 } from './model/filterSlice'

export { fetchFilter } from './model/filterThunk'

export {
  selectFilters,
  selectResultFilter,
  selectFilterLoading,
  selectFilterError,
} from './model/selectors'

export { type IFilterState } from './model/types'

export { FilterField } from './ui/filterField/filterField'
export { TagsField } from './ui/tagsField/tagsField'