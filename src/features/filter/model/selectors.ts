import { createSelector } from "@reduxjs/toolkit"
import { IFilterState } from "./types"

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.filter
)

export const selectFilters = createSelector(
  selectBase,
  (state: IFilterState) => state.filters
)

export const selectResultFilter = createSelector(
  selectBase,
  (state: IFilterState) => state.resultFilter.vacancies
)

export const selectFilterLoading = createSelector(
  selectBase,
  (state: IFilterState) => state.loading
)

export const selectFilterError = createSelector(
  selectBase,
  (state: IFilterState) => state.error
)