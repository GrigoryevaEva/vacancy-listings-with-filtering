import { createAsyncThunk } from '@reduxjs/toolkit'

import { getResultsFilter, IResultFilter } from '@/shared/api/filter';
import { ErrorType, RejectedDataType } from '@/shared/types';

interface IFetchFilter {
  readonly filters: string[]
}

export const fetchFilter = createAsyncThunk<
  IResultFilter,
  IFetchFilter,
  { readonly rejectValue: RejectedDataType }
>('filter/FetchFilter', async ({ filters }, thunkAPI) => {
  try {
    const resp = await getResultsFilter(filters)
    return resp
  } catch (err: unknown) {
    const error = err as ErrorType
    return thunkAPI.rejectWithValue({
      messageError: error.message,
      status: error.response?.status
    })
  }
});