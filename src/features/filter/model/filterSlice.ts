import { createSlice } from '@reduxjs/toolkit'

import { IFilterState } from './types';
import { fetchFilter } from './filterThunk';

const initialState: IFilterState = {
  filters: [],
  resultFilter: {
    vacancies: [],
  },
  loading: false,
  error: null,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter: (state, action) => {
      if (state.filters.includes(action.payload)) return
      state.filters.push(action.payload)
    },
    deleteFilter: (state, action) => {
      state.filters.splice(state.filters.indexOf(action.payload), 1)
    },
    resetFilters: (state) => {
      state.filters = []
      state.resultFilter.vacancies = []
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchFilter.pending, (state) => {
        state.loading = true
        if (state.error) state.error = null
      })
      .addCase(fetchFilter.fulfilled, (state, action) => {
        state.resultFilter = action.payload

        state.loading = false
        if (state.error) state.error = null
      })
      .addCase(fetchFilter.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? null
      })
});

export const {
  addFilter,
  deleteFilter,
  resetFilters,
} = filterSlice.actions

export default filterSlice.reducer