import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/buttons/Button';
import { useGetAllPokemonsQuery, useGetNextPageQuery } from '../../store/api/pokemonSlice';
import styles from './PokemonsPage.module.scss';

const imgBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const PokemonsPage = () => {
  const { data, isLoading, isSuccess } = useGetAllPokemonsQuery();
  const navigate = useNavigate();
  console.log(data);

  return (
    <div className={styles.page__container}>
      <button
        onClick={() => navigate(`pokemon?offset=${20 - 20}&limit=20`)}
      >
        Prev

      </button>

      <button onClick={() => navigate(`pokemon?offset=${20 + 20}&limit=20`)}>
        Next

      </button>
      <div><h1>All pokemons</h1></div>
      <div className={styles.cards__container}>

        {data && data.results.map(({ name, url }) => {
          const arr = url.split('/');
          const id = arr[arr.length - 2];

          return (
            <div
              className={styles.container}
              key={Math.random()}
            >
              <img
                className={styles.image}
                src={`${imgBaseUrl}${id}.png`}
                alt="Nav bildes"
              />
              <Button
                onClick={() => navigate(`/pokemon/${id}`)}
              >
                {name.toUpperCase()}
              </Button>

            </div>
          );
        })}
      </div>

      <div>
        <Button onClick={() => { }}>See more pokemon</Button>
      </div>

    </div>
  );
};

export default PokemonsPage;
