const refs = {
  //форма
  formRef: document.querySelector("#js-form"),
  inputForm: document.querySelector("#js-input"),
  selectByCountry: document.querySelector("#js-select"),
  logo: document.querySelector('.logo-link'),

  mainListRef: document.querySelector(".main-list"),

  backToTopBtn: document.querySelector(".back-to-top"),
  paginationRef: document.querySelector(".pagination"),

  selectedRef: document.querySelector(".number-of-page_active"),

  //============== for modal=========================
  modalBackdrop: document.querySelector(".backdrop"),
  closeBtn: document.querySelector(".js-close-btn"),
  modalMainContainer: document.querySelector(".modal__main-container"),
};

export { refs };
