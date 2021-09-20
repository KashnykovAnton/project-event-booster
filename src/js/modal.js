import modalTpl from "../templates/modal.hbs";
import gridTpl from "../templates/grid.hbs";
import fetchEvent from "./apiService";
import { onSearchEvent } from "./searchEvent";
import { fetchAndMarkup, createMarkup } from "./fetchAndMarkup";
import { refs } from "./getRefs";
import { states } from "./getStates";

//================================================================

let elId = null;
let author;
let countryEl;
let queryFromForm;

// ====================================================
refs.mainListRef.addEventListener("click", clickListener);
refs.closeBtn.addEventListener("click", closeModal);
refs.modalBackdrop.addEventListener("click", closeModalOverlay);
window.addEventListener("keydown", closeModalESC);

//====================================================
export default function clickListener(e) {
  const cards = document.querySelectorAll(".main-item");
  cards.forEach((el) => el.addEventListener("click", openModalHandler));
}

function openModalHandler(e) {
  refs.modalBackdrop.classList.remove("is-hidden");
  document.body.classList.toggle("is-open");
  elId = e.currentTarget.getAttribute("id");
  responseByIdAndRender();
}

function modalShowMoreBtnHandler(e) {
  e.preventDefault();
  //  console.log(e);
  closeModal();
  clearModalMarkup();
  //searching by the first word
  // const arrStr = author.split(" ");
  // queryFromForm = arrStr[0];

  // const arrStr = author;
  // queryFromForm = arrStr[0];
  // console.log("inputForm.value :>> ", queryFromForm);
  refs.inputForm.value = author; //author.slice(0,10); //.trim()

  // console.log('inputForm.value :>> ', states.queryFromForm);
  //запрос по инпуту из формы
  // states.query = refs.inputForm.value;
  states.page = 1;
  // states.country = 'US';
  // onSearchEvent(e);

  const response2 = fetchEvent.fetchByEvent(refs.inputForm.value)
  .then(data => createMarkup(data))
  .catch(error => console.log(error));
  states.page += 1;
}

async function responseByIdAndRender() {
  const response = await fetchEvent.fetchId(elId)
    .then((data) => data._embedded.events) //data._embedded.events
    .then((data) => createMarkupForModal(data["0"]));
  return response;
}

// function filter(data) {
//   const dataEl = data.filter((el) => el.id === elId);
//   return dataEl;
// }

function createMarkupForModal(data) {
  // countryEl = data._embedded.attraction['0'].locale;
  // console.log(countryEl);
  console.log(data);
  author = data._embedded.attractions[0].name
  // author = data.name;
  console.log(author);
  const renderEl = modalTpl(data);

  refs.modalMainContainer.innerHTML = renderEl;
  const showInfo = document.querySelector(".js-modal__more-info");
  showInfo.addEventListener("click", modalShowMoreBtnHandler);
  //console.log(showInfo);
}

function closeModalESC(event) {
  if (event.key === "Escape") {
    closeModal(event);
  }
}

function closeModalOverlay(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

function closeModal() {
  document.body.classList.toggle("is-open");
  refs.modalBackdrop.classList.toggle("is-hidden");
}

function clearModalMarkup() {
  refs.modalMainContainer.innerHTML = "";
}
