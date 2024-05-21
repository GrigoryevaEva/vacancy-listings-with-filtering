import initData from "../data.json"

import { IVacancyDescription } from "./types"

export const getVacancyList = (): IVacancyDescription[] => {
  const data = initData
  return data
}