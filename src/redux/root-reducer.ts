import { combineReducers } from "@reduxjs/toolkit";
import uiDataSlice from "./uiData/slice";

export const rootReducer = combineReducers({
  uiDataSlice,
});

export type RootStateType = ReturnType<typeof rootReducer>;
