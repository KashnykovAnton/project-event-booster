function getRefs() {
  return {
    formRef: document.querySelector('#js-form'),
    btnTestRef: document.querySelector('.btn'), // ссылка на тестовую кнопку

    mainListRef: document.querySelector('.main-list'),

    backToTopBtn: document.querySelector('.back-to-top'),
  };
}

export default getRefs;
