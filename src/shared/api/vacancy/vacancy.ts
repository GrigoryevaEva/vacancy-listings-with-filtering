import initData from "../data.json"

import { IVacancyDescription } from "./types"

export const getVacancy = (id: number): IVacancyDescription | null => {
  const data = initData
  const vacancy = data.find(v => v.id === id) ?? null
  return vacancy
}