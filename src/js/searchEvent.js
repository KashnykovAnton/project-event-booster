import fetchEvent from './apiService';
// import { createMarkup } from './fetchAndMarkup';
import {refs} from './getRefs';
import {states} from './getStates';
import {fetchAndMarkup, createMarkup} from './fetchAndMarkup'
import clickListener from'./modal'; 

refs.formRef.addEventListener('submit',submitFormHandler);
refs.inputForm.addEventListener('change', inputFormChanged);
refs.selectByCountry.addEventListener('change', selectFormChanged);
refs.logo.addEventListener('click', logoClickResetForm);

function inputFormChanged(e) {
  const event = e.target.value.trim();

  if(event) {
    fetchEvent.fetchByEvent(event)
    .then(data=>createMarkup(data))
    .catch(err=>console.log(err));
  }
  // clickListener();
}

function selectFormChanged(e) {
  const country = refs.selectByCountry.value;
  const event = e.target.value.trim();
  // console.log(country);
  if(country) {
    fetchEvent.fetchCountry(country)
    .then(data=>createMarkup(data))
    .catch(err=>console.log(err));
  }
  if (event && country) {
    fetchEvent.fetchByEventAndCountry(event, country)
    .then(data=>createMarkup(data))
    .catch(err=>console.log(err));
   }

  //  clickListener();
}

function logoClickResetForm(e) {
  // refs.inputForm.value = '';
  // refs.selectByCountry.value = 'US';
  refs.formRef.reset();
  clearMarkup ();
  let pageRandom = 3;
  fetchEvent.fetchRandom(pageRandom)
  .then(data=>createMarkup(data))
  .catch(err=>console.log(err));
  
}
function submitFormHandler() {
  e.preventDefault();
  // inputFormChanged();
  // selectFormChanged();
}


// function onSearchEvent(e) {
//   e.preventDefault();
//   states.query = e.currentTarget.elements.query.value;
//   console.log(states.query);
//   clearMarkup();
//   resetPage();
//   fetchAndMarkup()
//   incrementPage();
  
//   clickListener();
// }
  
function resetPage(){
  states.page = 1;
}

function incrementPage(){
    states.page += 1;
}

function clearMarkup (){
  refs.mainListRef.innerHTML = '';
}

// export {onSearchEvent}

