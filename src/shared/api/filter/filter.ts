import initData from "../data.json"

import { IResultFilter } from './types'

export const getResultsFilter = (filters: string[]): IResultFilter => {
  const data = initData
  const resultFilter = data.filter(v => filters.every((e) => v.languages.concat(v.tools).includes(e)))
  return {vacancies: resultFilter}
}