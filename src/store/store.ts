import { configureStore } from '@reduxjs/toolkit';
import pokemonApi from './api/pokemonSlice';

export default configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
});
