function getRefs() {
  return {
    formRef: document.querySelector('#js-form'),
    btnTestRef: document.querySelector('.btn'), // ссылка на тестовую кнопку

    mainListRef: document.querySelector('.main-list'),

    backToTopBtn: document.querySelector('.back-to-top'),
    paginationRef: document.querySelector('.pagination'),
    selectedRef: document.querySelector('.number-of-page_active'),
  };
}

export default getRefs;
