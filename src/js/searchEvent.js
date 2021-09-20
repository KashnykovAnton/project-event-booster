import fetchEvent from "./apiService";
import { refs } from "./getRefs";
import { states } from "./getStates";
import { fetchAndMarkup, createMarkup } from "./fetchAndMarkup";
import { showAlert, showError, showNotify } from "./pnotify";

refs.formRef.addEventListener("submit", submitFormHandler);
refs.inputForm.addEventListener("change", inputFormChanged);
refs.selectByCountry.addEventListener("change", selectFormChanged);
refs.logo.addEventListener("click", logoClickResetForm);

function submitFormHandler(e) {
  e.preventDefault();
  // const event = refs.inputForm.value.trim();
  // const country = refs.selectByCountry.value;
  // if (event && country.length === 2) {
  //   fetchEvent.fetchByEventAndCountry(event, country)
  //     .then((data) => checkedData(data))
  //     // .then(data=>createMarkup(data))
  //     .catch((err) => console.log(err));
  // }
}

function inputFormChanged(e) {
  const event = e.target.value.trim();
  const country = refs.selectByCountry.value;
// console.log(event);
// console.log(country);
  if (event.length === 0) {
    clearMarkup();
    showError();
    return;
  }

  // if (event && country.length > 0) {
  //   clearMarkup();
  //   showError();
  //   return;
  // }
  if (event && country.length === 2) {
    fetchEvent.fetchByEventAndCountry(event, country)
      .then((data) => checkedData(data))
      // .then(data=>createMarkup(data))
      .catch((err) => console.log(err));
  }

  fetchEvent.fetchByEvent(event)
    .then((data) => checkedData(data))
    .catch((err) => console.log(err));
}

function selectFormChanged(e) {
  const country = e.target.value;
  const event = refs.inputForm.value.trim();
  console.log(event);
console.log(country);
  
  if (country) {
    fetchEvent.fetchCountry(country)
      .then((data) => checkedData(data))
      // .then(data=>createMarkup(data))
      .catch((err) => console.log(err));
  }

  if (event && country) {
    fetchEvent.fetchByEventAndCountry(event, country)
      .then((data) => checkedData(data))
      // .then(data=>createMarkup(data))
      .catch((err) => console.log(err));
  }
}
function checkedData(data) {
  if (data.page.totalElements === 0) {
    // refs.formRef.reset();
    showError();
    clearMarkup();
    return;
  }
  createMarkup(data);
}

function logoClickResetForm(e) {
  refs.formRef.reset();
  clearMarkup();
  let pageRandom = random(1,10);
  fetchEvent.fetchRandom(pageRandom)
    .then((data) => createMarkup(data))
    .catch((err) => console.log(err));
  showNotify();
}

const random = (min = 1, max = 10) => {
  let num = Math.random() * (max - min) + min;

  return Math.round(num);
};

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

function resetPage() {
  states.page = 1;
}

function incrementPage() {
  states.page += 1;
}

function clearMarkup() {
  refs.mainListRef.innerHTML = "";
}

// export {onSearchEvent}
