import initData from "../data.json"

import { IVacancyDescription } from "./types"

export const getVacancyList = (currentVacancyList: IVacancyDescription[]): IVacancyDescription[] => {
  const data = initData
  if (currentVacancyList) return data
  return data
}