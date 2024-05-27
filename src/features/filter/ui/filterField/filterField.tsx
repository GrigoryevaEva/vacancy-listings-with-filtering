import { useEffect } from 'react'

import { useAppDispatch } from '@/shared/lib/store'
import { fetchFilter } from '@/features/filter/model/filterThunk'
import { deleteFilter, resetFilters } from '@/features/filter/model/filterSlice'

import iconRemoveFilter from '@/shared/assets/icon/icon-remove.svg'

import style from './filterField.module.scss'

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
      <div className={style.filter} key={filter}>
        <div className={style.filter__name}>{filter}</div>
        <button className={style.filter__remove} onClick={() => dispatch(deleteFilter(filter))}>
          <img src={iconRemoveFilter} alt="" />
        </button>
      </div>
    ))
  )

  return (
    <div className={style.root}>
      <div className={style.container}>
        {renderFilters(filters)}
      </div>
      <button className={style.clear} onClick={handleResetFilters}>
        Clear
      </button>
    </div>
  )
}
