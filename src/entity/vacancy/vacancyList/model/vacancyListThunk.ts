import { createAsyncThunk } from "@reduxjs/toolkit";

import { ErrorType, RejectedDataType } from "@/shared/types";
import { getVacancyList, IVacancyDescription } from "@/shared/api/vacancy";

interface IFetchVacancyList {
  readonly currentVacancyList: IVacancyDescription[]
}

export const fetchVacancyList = createAsyncThunk<
  IVacancyDescription[],
  IFetchVacancyList,
  { readonly rejectValue: RejectedDataType }
>('vacancyList/FetchVacancyList', async ({ currentVacancyList }, thunkAPI) => {
  try {
    const resp = await getVacancyList(currentVacancyList)
    return resp
  } catch (err: unknown) {
    const error = err as ErrorType
    return thunkAPI.rejectWithValue({
      messageError: error.message,
      status: error.response?.status
    })
  }
});