const refs = {
  formRef: document.querySelector('#js-form'),
  formSelect: document.querySelector('#js-select'),
  mainListRef: document.querySelector('.main-list'),
  backToTopBtn: document.querySelector('.back-to-top'),
  paginationRef: document.querySelector('.pagination'),
  selectedRef: document.querySelector('.number-of-page_active'),
  selectCountry: document.querySelector('#js-select'),
  logoRef: document.querySelector('.logo-link'),
  loaderRef: document.querySelector('.box-loader'),

  //============== for modal=========================
  modalBackdrop: document.querySelector('.backdrop'),
  closeBtn: document.querySelector('.js-close-btn'),
  modalMainContainer: document.querySelector('.modal__main-container'),
  inputForm: document.querySelector('#js-input'),

  //============= for modal team ====================
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modalTeamBackdrop: document.querySelector('[data-modal]'),
};

export { refs };
