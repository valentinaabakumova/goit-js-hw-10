//const BASE_URL = 'https://pokeapi.co/api/v2';
// https://restcountries.com/v3.1/name/{name}
const BASE_URL = 'https://restcountries.com/v3.1/name';

function fetchPokemon(pokemonId) {
  return fetch(`${BASE_URL}/name/${name}`).then(response => response.json());
}

export default { fetchPokemon };

//////////////////
