import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { vacancyListReducer } from "@/entity/vacancy/vacancyList";
import { filterReducer } from "@/features/filter";

const rootReducer = combineReducers({
  vacancyList: vacancyListReducer,
  filter: filterReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export const store = setupStore()