import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/buttons/Button';
import { useGetNextPageQuery } from '../../store/api/pokemonSlice';
import styles from './PokemonsPage.module.scss';

const imgBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const PokemonsPage = () => {
  const [limit, setLimit] = useState(20);
  const { data, isLoading, isSuccess } = useGetNextPageQuery(limit);
  const navigate = useNavigate();

  return (
    <div className={styles.page__container}>

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
        <Button onClick={() => setLimit(limit + 20)}>See more pokemon</Button>
      </div>

    </div>
  );
};

export default PokemonsPage;
