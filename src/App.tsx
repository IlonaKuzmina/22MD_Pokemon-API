import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import PokemonsPage from './pages/PokemonsPage/PokemonsPage';
import SinglePokemon from './pages/SinglePokemonPage/SinglePokemon';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<PokemonsPage />} />
      <Route path="/pokemon" element={<PokemonsPage />} />
      <Route path="/pokemon/:name" element={<SinglePokemon />} />
    </Routes>
  </Router>
);

export default App;
