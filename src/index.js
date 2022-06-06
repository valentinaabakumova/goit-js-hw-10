import './css/styles.css';
// import Notiflix from 'notiflix';

import API from './js/api-service';
import getRefs from './js/get-refs';

import countryCardTpl from './templates/country-card.hbs';

const DEBOUNCE_DELAY = 300;

const ref = getRefs();

ref.inputCountry.addEventListener('input', event => {
  const name = event.currentTarget.value;
  // console.log(name);

  API.fetchCountries(name)
    .then(renderCountryCard)
    .catch(onFetchError)
    .finally(() => form.reset());

  ///

  const r = fetch(`https://restcountries.com/v2/${name}?fields=name,capital,currencies`).then(
    response => response.json(),
  );
  console.log('...... r ...... ', r);
});

function renderCountryCard(country) {
  const markup = countryCardTpl(country);
  console.log('country ', country);
  console.log('name ', country.name);
  ref.countryInfoContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert('some error');
  // Notiflix.Notify.success('Sol lucet omnibus');
}

// ref.inputCountry.addEventListener(
//   'input',
//   _.debounce(event => {
//     const name = event.currentTarget.value;
//     console.log(name);
//     fetchCountries(name);
//   }, DEBOUNCE_DELAY),
// );
