import { createAsyncThunk } from "@reduxjs/toolkit";

import { ErrorType, RejectedDataType } from "../../../../shared/types";
import { getVacancyList, IVacancyDescription } from "../../../../shared/api/vacancy";

interface IFetchVacancyList {
  readonly currentVacancyList: IVacancyDescription[]
}

export const fetchVacancyList = createAsyncThunk<
  IVacancyDescription[],
  IFetchVacancyList,
  { readonly rejectValue: RejectedDataType }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
>('vacancyList/FetchVacancyList', async ({ currentVacancyList }, thunkAPI) => {
  try {
    const resp = await getVacancyList()
    return resp
  } catch (err: unknown) {
    const error = err as ErrorType
    return thunkAPI.rejectWithValue({
      messageError: error.message,
      status: error.response?.status
    })
  }
});