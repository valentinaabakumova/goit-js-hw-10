import './css/styles.css';
// import Notiflix from 'notiflix';

import countryCardTpl from './templates/country-card.hbs';

const DEBOUNCE_DELAY = 300;

const ref = {
  inputCountry: document.querySelector('#search-box'),
  countryInfoContainer: document.querySelector('.country-info'),
};

function fetchCountries(name) {
  fetch(`https://restcountries.com/v2/name/${name}`)
    .then(response => {
      // console.log(response);
      return response.json();
    })
    .then(renderCountryCard)
    .catch(error => {
      console.log(error);
    });
}

function renderCountryCard(country) {
  const markup = countryCardTpl(country);
  console.log(country);
  ref.countryInfoContainer.innerHTML = markup;
}

// ref.inputCountry.addEventListener(
//   'input',
//   _.debounce(event => {
//     const name = event.currentTarget.value;
//     console.log(name);
//     fetchCountries(name);
//   }, DEBOUNCE_DELAY),
// );

ref.inputCountry.addEventListener('input', event => {
  const name = event.currentTarget.value;
  console.log(name);
  fetchCountries(name);
});

// function renderPokemonCard(pokemon) {
//   const markup = pokemonCardTpl(pokemon);
//   ref.cardContainer.innerHTML = markup;
// }

/// ...........example ......... /////

// import './css/common.css';
// import pokemonCardTpl from './templates/pokemon-card.hbs';
// import API from './js/api-service';
// import getRefs from './js/get-refs';

// const refs = getRefs();

// refs.searchForm.addEventListener('submit', onSearch);

// function onSearch(e) {
//   e.preventDefault();

//   const form = e.currentTarget;
//   const searchQuery = form.elements.query.value;

//   API.fetchPokemon(searchQuery)
//     .then(renderPokemonCard)
//     .catch(onFetchError)
//     .finally(() => form.reset());
// }

// function renderPokemonCard(pokemon) {
//   const markup = pokemonCardTpl(pokemon);
//   refs.cardContainer.innerHTML = markup;
//   // Notiflix.Notify.success('Sol lucet omnibus');
// }

// function onFetchError(error) {
//   alert('Упс, что-то пошло не так и мы не нашли вашего покемона!');
// }

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
