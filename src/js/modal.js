import modalTpl from "../templates/modal.hbs";
import fetchEvent from "../js/apiService";
import {onSearchEvent, onTestNextPage, states } from './searchEvent';
import getRefs from './getRefs';

//================================================================
const refs = getRefs();

let elId = null;
let author;

// ====================================================
refs. mainListRef.addEventListener("click", clickListener);
refs.closeBtn.addEventListener("click", closeModal);
refs.modalBackdrop.addEventListener("click", closeModalOverlay);
window.addEventListener("keydown", closeModalESC);


//====================================================
function clickListener(e) {
  const cards = document.querySelectorAll(".main-item");
  cards.forEach((el) => el.addEventListener("click", openModalHandler));
}

function openModalHandler(e) {
    refs.modalBackdrop.classList.remove("is-hidden");
    document.body.classList.toggle("modal-open");
    elId = e.currentTarget.getAttribute("id");;
    responseByIdAndRender();
 }



function modalShowMoreBtnHandler(e) {
    e.preventDefault();
   
    closeModal();
    refs.inputForm.value = author;

    //запрос по инпуту из формы
    // states.query = ref.inputForm.value;
    // states.page = 1;

 }


async function responseByIdAndRender(){
    const response = await fetchEvent(states.query, states.page)
    .then((data) => data._embedded.events)
    .then((data) => filter(data))
    .then((data) => createMarkupForModal(data['0']));

    return response;
}

function filter(data) {
   const dataEl= data.filter((el) => el.id === elId);
    return dataEl;
}

function createMarkupForModal(data) {
    author = data.name;
    console.log(author);
  const renderEl = modalTpl(data);

  
  refs.modalMainContainer.innerHTML = renderEl;
  const  showInfo = document.querySelector('.modal__more-info-link');
  showInfo.addEventListener('click', modalShowMoreBtnHandler);
  console.log(showInfo);


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
  document.body.classList.toggle("modal-open");
  refs.modalBackdrop.classList.toggle("is-hidden");
}

function clearModalMarkup() {
    refs.modalMainContainer.innerHTML = ''; 
}