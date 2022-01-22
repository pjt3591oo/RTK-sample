import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter';
import todoReducer from './todo';
import { pokemonApi } from './http/pokemon';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch