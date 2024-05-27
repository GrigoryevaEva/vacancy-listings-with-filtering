import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/shared/lib/store'
import { IVacancyDescription } from '@/shared/api/vacancy'

import { 
  fetchVacancyList, 
  selectVacancyList, 
  selectVacancyListError, 
  selectVacancyListLoading 
} from '@/entity/vacancy/vacancyList'

import { 
  FilterField, 
  selectFilterError, 
  selectFilterLoading, 
  selectFilters, 
  selectResultFilter, 
  TagsField } from '@/features/filter'

import style from './vacancyList.module.scss'

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

  function getImageUrl(name: string) {
    return new URL(`../../../shared/assets/img/${name}`, import.meta.url).href
  }

  const renderVacancyList = (vacancies: IVacancyDescription[]) => (
    vacancies.map((v) => (
      <div key={v.id} className={`${style.vacancy} ${v.featured ? style.vacancy_featured : ''}`}>
        <div className={style.vacancy__info}>
          <img src={getImageUrl(v.logo)} alt="" className={style.vacancy__logo}/>
          <div className={style.vacancy__description}>
            <div className={style.vacancy__description_header}>
              <span className={style.vacancy__company}>{v.company}</span>
              {v.new || v.featured 
                ? <div className={style.vacancy__label_container}>
                  {v.new ? <span className={`${style.vacancy__label} ${style.vacancy__label_new}`}>NEW!</span> : <></>}
                  {v.featured ? <span className={`${style.vacancy__label} ${style.vacancy__label_featured}`}>FEATURED</span> : <></>}
                </div>
                : <></>}
            </div>
            <div>
              <span className={style.vacancy__position}>{v.position}</span>
            </div>
            <div className={style.vacancy__other}>
              <span>{v.postedAt}</span>
              <span className={style.vacancy__other_dot}>&#8226;</span>
              <span>{v.contract}</span>
              <span className={style.vacancy__other_dot}>&#8226;</span>
              <span>{v.location}</span>
            </div>
          </div>
        </div>

        <TagsField id={v.id} languages={v.languages} tools={v.tools} level={v.level} role={v.role} />
      </div>
    ))
  )

  const content = filters.length === 0 ? allVacancies : filteredVacancies

  return (
    <main className={style.root}>
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
