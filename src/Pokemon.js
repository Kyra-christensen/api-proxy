import React from 'react';

export default function Pokemon({ pokemon }) {
  return (
    <div>
      <h1>{pokemon.pokemon}</h1>
      <img src={pokemon.url_image} style={{ width: '200px' }} />
    </div>
  );
}
