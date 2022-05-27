/* eslint-disable max-len */
import { spawn } from 'child_process';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/buttons/Button';
import {
  useGetPokemonByIdQuery,
} from '../../store/api/pokemonSlice';
import styles from './SinglePokemon.module.scss';

const imgBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const SinglePokemon = () => {
  const { id } = useParams();
  const { data: onePokemon } = useGetPokemonByIdQuery(Number(id));

  const navigate = useNavigate();

  return (
    <div className={styles.container}>

      <div className="row center-xs">
        <div className="col-xs-10">
          <div className={styles.title}>
            <h1>{onePokemon?.name.toUpperCase()}</h1>
          </div>
        </div>
      </div>

      <div className="row center-xs middle-xs">
        <div className="col-xs-1">
          <button
            disabled={onePokemon?.id === 1}
            className={styles.card__arrow}
            onClick={() => {
              navigate(`/pokemon/${Number(id) - 1}`);
            }}
          >
            <svg width="32" height="50" viewBox="0 0 32 50" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.08058 20.5806C-0.360194 23.0214 -0.360194 26.9786 2.08058 29.4194L20.8306 48.1694C23.2714 50.6102 27.2286 50.6102 29.6694 48.1694C32.1102 45.7286 32.1102 41.7714 29.6694 39.3306L15.3388 25L29.6694 10.6694C32.1102 8.22864 32.1102 4.27136 29.6694 1.83058C27.2286 -0.610194 23.2714 -0.610194 20.8306 1.83058L2.08058 20.5806Z"
              />
            </svg>
          </button>
        </div>

        <div className="col-xs-10 col-md-3">
          <div className={styles.image__container}>
            <img
              className={styles.image}
              src={`${imgBaseUrl}${onePokemon?.id}.png`}
              alt="nav Bildes vēl"
            />
          </div>
        </div>

        <div className="col-xs-10 col-md-2">
          <div className="info__container">
            <h2>Main info:</h2>
            <br />
            <span>
              Base experience:
              {' '}
              {onePokemon?.base_experience}
            </span>
            <br />
            <span>
              Height:
              {' '}
              {onePokemon?.height}
              {' '}
              cm
            </span>
            <br />
            <span>
              Weight:
              {' '}
              {onePokemon?.weight}
              {' '}
              kg
            </span>

          </div>
        </div>

        <div className="col-xs-10 col-md-5">
          <div className="moves__container">
            <h2>All moves:</h2>

            {onePokemon && onePokemon.moves.map((move) => (
              <span>{ move.move.name}</span>
            ))}

          </div>
        </div>

        <div className="col-xs-1">
          <button
            disabled={onePokemon?.id === 898}
            className={styles.card__arrow}
            onClick={() => {
              navigate(`/pokemon/${Number(id) + 1}`);
            }}
          >
            <svg width="32" height="50" viewBox="0 0 32 50" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.9194 20.5806C32.3602 23.0214 32.3602 26.9786 29.9194 29.4194L11.1694 48.1694C8.72864 50.6102 4.77136 50.6102 2.33058 48.1694C-0.110194 45.7286 -0.110194 41.7714 2.33058 39.3306L16.6612 25L2.33058 10.6694C-0.110192 8.22864 -0.110192 4.27136 2.33058 1.83058C4.77136 -0.610194 8.72864 -0.610194 11.1694 1.83058L29.9194 20.5806Z"
              />
            </svg>
          </button>
        </div>

      </div>

      <div className="row center-xs">
        <div className="col-xs-10">
          <div className={styles.title}>
            <Button onClick={() => { navigate('/'); }}>Back to all!</Button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SinglePokemon;
