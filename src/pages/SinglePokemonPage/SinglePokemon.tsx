import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/buttons/Button';
import {
  useGetPokemonByNameQuery,
} from '../../store/api/pokemonSlice';
import styles from './SinglePokemon.module.scss';

const imgBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const SinglePokemon = () => {
  const { name } = useParams();
  const { data, isLoading, isSuccess } = useGetPokemonByNameQuery(String(name));
  const navigate = useNavigate();

  console.log(data);
  return (
    <div className={styles.container}>
      <div className="row center-xs">
        <div className="col-xs-10">
          <div className="title">
            <h1>{name?.toUpperCase()}</h1>
          </div>
        </div>
      </div>

      <div className="row center-xs">
        <div className="col-xs-12 col-md-3">
          <div className="image__container">
            <img src="" alt="nav Bildes vēl" />
          </div>
        </div>

        <div className="col-xs-12 col-md-2">
          <div className="info__container">
            <h3>Main info:</h3>
            <br />
            <span>
              Base experience:
              {' '}
              {data?.base_experience}
            </span>
            <br />
            <span>
              Height:
              {' '}
              {data?.height}
              {' '}
              cm
            </span>
            <br />
            <span>
              Weight:
              {' '}
              {data?.weight}
              {' '}
              kg
            </span>

          </div>
        </div>

        <div className="col-xs-12 col-md-5">
          <div className="moves__container">
            <h3>All moves:</h3>
            {data && data.moves.map(({ move }) => (

              <span key={Math.random()}>
                {move.name}
                {', '}
              </span>

            ))}
          </div>
        </div>
      </div>

      <Button onClick={() => { navigate('/'); }}>Back to all!</Button>
    </div>
  );
};

export default SinglePokemon;
