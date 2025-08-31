import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import { githubApi } from "../services/githubapi.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});
