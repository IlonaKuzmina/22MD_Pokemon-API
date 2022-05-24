import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/buttons/Button';
import { useGetAllPokemonsQuery } from '../../store/api/pokemonSlice';
import styles from './PokemonsPage.module.scss';

const imgBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const PokemonsPage = () => {
  const { data, isLoading, isSuccess } = useGetAllPokemonsQuery();
  const navigate = useNavigate();
  console.log(data);

  return (
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
              // height="50"
             
            />
            <Button
              onClick={() => navigate(`/pokemon/${name}`)}
            >
              {name.toUpperCase()}
            </Button>

          </div>
        );
      })}
      <br />
      <div>
        <Button onClick={() => { }}>See more pokemon</Button>
      </div>

    </div>
  );
};

export default PokemonsPage;
