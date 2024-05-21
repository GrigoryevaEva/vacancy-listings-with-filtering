import { createSlice } from '@reduxjs/toolkit'

import { IVacancyListState } from './types'
import { fetchVacancyList } from './vacancyListThunk';

const initialState: IVacancyListState = {
  vacancies: [],
  loading: false,
  error: null,
}

const vacancyListSlice = createSlice({
  name: 'vacancyList',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchVacancyList.pending, (state) => {
        state.loading = true
        if (state.error) state.error = null
      })
      .addCase(fetchVacancyList.fulfilled, (state, action) => {
        state.vacancies = action.payload

        state.loading = false
        if (state.error) state.error = null
      })
      .addCase(fetchVacancyList.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? null
      })
});

// export const {} = vacancyListSlice.actions

export default vacancyListSlice.reducer