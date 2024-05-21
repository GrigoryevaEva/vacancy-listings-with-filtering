import { createSelector } from "@reduxjs/toolkit"

import { IVacancyListState } from "./types"

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.vacancyList
)

export const selectVacancyList = createSelector(
  selectBase,
  (state: IVacancyListState) => state.vacancies
)

export const selectVacancyListLoading = createSelector(
  selectBase,
  (state: IVacancyListState) => state.loading
)

export const selectVacancyListError = createSelector(
  selectBase,
  (state: IVacancyListState) => state.error
)