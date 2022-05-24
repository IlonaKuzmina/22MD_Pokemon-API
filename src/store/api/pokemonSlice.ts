import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PokemonApiResponse, PokemonsExtend } from '../../Modals/PokemonModals';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({

    getAllPokemons: builder.query<PokemonApiResponse, void>({
      query: () => 'pokemon',
    }),

    getPokemonByName: builder.query<PokemonsExtend, string>({
      query: (name) => `pokemon/${name}`,
    }),

  }),
});

export const { useGetPokemonByNameQuery, useGetAllPokemonsQuery } = pokemonApi;

export default pokemonApi;
