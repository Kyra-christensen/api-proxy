import React from 'react';
import Pokemon from './Pokemon';

export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map((pokemon, i) => <Pokemon key={`${pokemon._id}-${i}`} pokemon={pokemon} />)}
    </div>
  );
}
