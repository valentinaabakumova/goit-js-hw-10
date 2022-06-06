import './css/styles.css';
// import pokemonCardTpl from './templates/pokemon-card.hbs';

// const DEBOUNCE_DELAY = 300;

// const ref = {
//   cardContainer: document.querySelector('.js-card-container'),
// };

// function fetchPokemon(searchQuery) {
//   fetch('https://pokeapi.co/api/v2/pokemon/98/')
//     .then(response => {
//       return response.json();
//     })
//     .then(renderPokemonCard)
//     .catch(error => {
//       console.log(error);
//     });
// }

// function renderPokemonCard(pokemon) {
//   const markup = pokemonCardTpl(pokemon);
//   ref.cardContainer.innerHTML = markup;
// }

/// ...........example ......... /////

// import './css/common.css';
import pokemonCardTpl from './templates/pokemon-card.hbs';
import API from './js/api-service';
import getRefs from './js/get-refs';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  API.fetchPokemon(searchQuery)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert('Упс, что-то пошло не так и мы не нашли вашего покемона!');
}

// // =========================================

// const url = 'https://newsapi.org/v2/everything?q=cars';
// const options = {
//   headers: {
//     Authorization: '4330ebfabc654a6992c2aa792f3173a3',
//   },
// };

// fetch(url, options)
//   .then(r => r.json())
//   .then(console.log);
