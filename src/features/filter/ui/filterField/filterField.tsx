import { useEffect } from 'react'

import { useAppDispatch } from '../../../../shared/lib/store'
import { fetchFilter } from '../../model/filterThunk'
import { deleteFilter, resetFilters } from '../../model/filterSlice'

import iconRemoveFilter from '../../../../shared/assets/icon/icon-remove.svg'

import './filterField.scss'

interface IFilterFieldProps {
  filters: string[]
}

export const FilterField = (props: IFilterFieldProps) => {

  const dispatch = useAppDispatch()
  const filters = props.filters

  useEffect(() => {
    dispatch(fetchFilter({filters: filters}))
  }, [filters, dispatch])

  const handleResetFilters = () => {
    dispatch(resetFilters())
  }

  const renderFilters = (filters: string[]) => (
    filters.map((filter) => (
      <div key={filter}>
        <div>{filter}</div>
        <div onClick={() => dispatch(deleteFilter(filter))}>
          <img src={iconRemoveFilter} alt="" />
        </div>
      </div>
    ))
  )

  return (
    <div className='filterField'>
      <div>
        {renderFilters(filters)}
      </div>
      <div onClick={handleResetFilters}>
        <span>Clear</span>
      </div>
    </div>
  )
}
