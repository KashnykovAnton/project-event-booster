import modalTpl from "../templates/modal.hbs";
import fetchEvent from "../js/apiService";
import {onSearchEvent, onTestNextPage, states } from './searchEvent';
import getRefs from './getRefs';


const refs = getRefs();
// import { states } from "./searchEvent";

const ref = {
  galleryList: document.querySelector(".main-list"),
  modalBackdrop: document.querySelector(".backdrop"),
  closeBtn: document.querySelector(".js-close-btn"),
  modalMainContainer: document.querySelector(".modal__main-container"),
  inputForm: document.querySelector('#js-input'),
  };
let elId=null;
let author;

// ====================================================
ref.galleryList.addEventListener("click", clickListener);
ref.closeBtn.addEventListener("click", closeModal);
ref.modalBackdrop.addEventListener("click", closeModalOverlay);

window.addEventListener("keydown", closeModalESC);


//====================================================
function clickListener(e) {
  const cards = document.querySelectorAll(".main-item");
  cards.forEach((el) => el.addEventListener("click", openModalHandler));

  // console.log(cards);
}

function openModalHandler(e) {
    ref.modalBackdrop.classList.remove("is-hidden");
    document.body.classList.toggle("modal-open");

    elId = e.currentTarget.getAttribute("id");
    // console.log(elId);

    responseByIdAndRender();
 }



function modalShowMoreBtnHandler(e) {
    e.preventDefault();
   
    closeModal();

    ref.inputForm.value = author;


    //запрос по инпуту из формы
    // states.query = ref.inputForm.value;
    // states.page = 1;

 }


//  function createMarkup(data) {

//     data._embedded.events.map(el => {
//       refs.mainListRef.innerHTML(
//         `<li class="main-item" id="${el.id}" ><a htef="#" id="${el.id}">
//           <img class="main-poster" src="${el.images[2].url}" alt="">
//           <h2 class="main-name">${el.name}</h2>
//           <p class="main-date">${el.dates.start.localDate}</p>
//           <p class="main-location">${el.dates.timezone}</p>
//           </a></li>`,
//       );
//     });
//   }


async function responseByIdAndRender(){
    const response = await fetchEvent(states.query, states.page)
    .then((data) => data._embedded.events)
    .then((data) => filter(data))
    .then((data) => createMarkupForModal(data['0']));

    return response;
}

// data.filter((el) => el.id === elId)


function filter(data) {
   const dataEl= data.filter((el) => el.id === elId);
    return dataEl;
}


function createMarkupForModal(data) {
    author = data.name;
    console.log(author);
  const renderEl = modalTpl(data);

  //
  ref.modalMainContainer.innerHTML = renderEl;
  const  showInfo = document.querySelector('.modal__more-info-link');
  showInfo.addEventListener('click', modalShowMoreBtnHandler);
  console.log(showInfo);
//   console.log(renderEl);


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

  ref.modalBackdrop.classList.toggle("is-hidden");
}

function clearModalMarkup() {
    ref.modalMainContainer.innerHTML = ''; 
}


// ====================================================

// import modalTpl from '../templates/modal.hbs';
// import fetchEvent from '../js/apiService';
// import * as basicLightbox from 'basiclightbox';
// import { states } from './searchEvent';

// const ref = {
//     galleryList: document.querySelector('.main-list'),
//     modalBackdrop: document.querySelector('.backdrop'),
//     closeBtn: document.querySelector('.js-close-btn'),
//     modalLightBox: document.querySelector('.modal__main-container'),
// }
// // ====================================================
// ref.galleryList.addEventListener('click', handleListener);
// // ref.closeBtn.addEventListener('click', closeModal);
// // ref.modalBackdrop.addEventListener('click', closeModalOverlay);
// // window.addEventListener('keydown', closeModalESC);

// //====================================================
// function handleListener(e) {
//     const cards = document.querySelectorAll('.main-item');
// cards.forEach(el=>el.addEventListener('click', onModalOpen));
// // console.log(cards);
// }

//  function onModalOpen(e) {
//     if (e.target.nodeName !== 'IMG') {
//         return;
//       }
//     // e.preventDefault();
// //     document.body.classList.add('modal-open');
// // ref.modalBackdrop.classList.toggle('is-hidden');

// // const id = e.currentTarget.getAttribute('id');

// let elId = e.currentTarget.getAttribute('id');
// console.log(elId);

// const response = fetchEvent(states.query, states.page)
// .then(data => data._embedded.events)
// .then(data=>data.filter(el => el.id === elId))
// .then(data=> createMarkupModal(data['0']));

// const aaa= response;

// const instance = basicLightbox.create(`${aaa}`);

// instance.show();
// }

// function createMarkupModal(data) {
//     // const renderEl = modalTpl(response['0']);
// const aaa= modalTpl(data);
// console.log(aaa);
// // return aaa;

// }

// // const bbb= onModalOpen();
// // const instance = basicLightbox.create(bbb);

// // instance.show();

// // const instance = basicLightbox.create(createMarkupModal);
// // // ref.modalLightBox.innerHTML = modalTpl(data);
// // instance.show();
// // instance.show();
// // instance.show();
// // function closeModalESC(event) {
// //     if (event.key === 'Escape') {
// //         closeModal(event);
// //     }
// // };

// // function closeModalOverlay(event) {
// //     if (event.target === event.currentTarget) {
// //         closeModal();
// //     }
// // };

// // function closeModal() {
// //     document.body.classList.toggle('modal-open');
// //     ref.modalBackdrop.classList.toggle('is-hidden');
// // };
// // ====================================================

