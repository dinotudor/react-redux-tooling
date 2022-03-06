import { configureStore } from "@reduxjs/toolkit";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import counterReducer from '../feature/counter/counterSlice';
import { apiSlice } from '../feature/dogs/dogsApiSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

