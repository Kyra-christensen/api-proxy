import React from 'react';


export default function PokemonList({ pokemonArr }) {
  return (
    <div>
      {pokemonArr.map((pokemon, i) => <div key={pokemon + i}>
        <h3>{pokemon.pokemon}</h3>
        <img src={pokemon.url_image} style={{ width: '200px' }} />
      </div>)}
    </div>
  );
}
