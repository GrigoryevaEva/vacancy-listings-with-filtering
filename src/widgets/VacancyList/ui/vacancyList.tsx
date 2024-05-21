import { useEffect } from 'react'

import { fetchVacancyList, selectVacancyList, selectVacancyListError, selectVacancyListLoading } from '../../../entity/vacancy/vacancyList'
import { FilterField, selectFilterError, selectFilterLoading, selectFilters, selectResultFilter, TagsField } from '../../../features/filter'
import { IVacancyDescription } from '../../../shared/api/vacancy'
import { useAppDispatch, useAppSelector } from '../../../shared/lib/store'

import './vacancyList.scss'

export const VacancyList = () => {
  const dispatch = useAppDispatch()

  const allVacancies = useAppSelector(selectVacancyList)
  const allVacanciesLoading = useAppSelector(selectVacancyListLoading)
  const allVacanciesError = useAppSelector(selectVacancyListError)

  const filters = useAppSelector(selectFilters)
  const filteredVacancies = useAppSelector(selectResultFilter)
  const filteredLoading = useAppSelector(selectFilterLoading)
  const filteredError = useAppSelector(selectFilterError)

  useEffect(() => {
    if (allVacancies.length === 0) {
      dispatch(fetchVacancyList({currentVacancyList: allVacancies}))
    }
  }, [allVacancies, dispatch])

  const renderVacancyList = (vacancies: IVacancyDescription[]) => (
    vacancies.map((v) => (
      <div key={v.id}>
        <div>
          <div>
            <img src={v.logo} alt="" />
          </div>
          <div>
            <div>
              <span>{v.company}</span>
              {v.new ? <span>NEW!</span> : <></>}
              {v.featured ? <span>FEATURED</span> : <></>}
            </div>
            <div>
              <span>{v.position}</span>
            </div>
            <div>
              <span>{v.postedAt}</span>
              <span>&#8226;</span>
              <span>{v.contract}</span>
              <span>&#8226;</span>
              <span>{v.location}</span>
            </div>
          </div>
        </div>

        <div>
          <TagsField id={v.id} languages={v.languages} tools={v.tools} />
        </div>
      </div>
    ))
  )

  const content = filters.length === 0 ? allVacancies : filteredVacancies

  return (
    <main>
      {filters.length > 0 
        ? <FilterField filters={filters} /> 
        : <></>}
      {content === allVacancies
        ? allVacanciesLoading 
          ? <span>Loading...</span> 
          : allVacanciesError  
            ? <span>{allVacanciesError.messageError}</span> 
            : renderVacancyList(content)
        : filteredLoading
          ? <span>Loading...</span>
          : filteredError
            ? <span>{filteredError.messageError}</span>
            : renderVacancyList(content)}
    </main>
  )
}
