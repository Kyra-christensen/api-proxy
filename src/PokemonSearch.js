import { useState } from 'react';
import json from 'superagent/lib/node/parsers/json';

export default function PokemonSearch() {
      // you'll need to track your pokemon search results, the loading state, and one form field: name. For this form field, set a real initial values (like 'pikachu') so the form populates with a default value.
  const [nameForm, setNameForm] = useState('Pikachu');
  const [isloading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState('');
  
  async function handlePokemonSubmit(e) {
    e.preventDefault();
      
        // set the loading state to true
    setIsLoading(true);
        // use fetch to make a request to your netlify pokemon function. Be sure to pass the pokemon name as a query param in the URL
    const response = await fetch(`/.netlify/functions/pokemon?pokemon=${nameForm}`);
        // put the jsonified data in state and set the loading state to false
    const json = await response.json();
    setPokemon(json);
    setIsLoading(false);
  }
      
  return (
    <section className='pokemon'>
      {/* make the fetch on submit */}
      <form>
            Search pokemon for a city
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <button>Get pokemon</button>
      </form>
      {/* Make a PokemonList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );

}
