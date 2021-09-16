function getRefs() {
  return {
    formRef: document.querySelector('#js-form'),

    mainListRef: document.querySelector('.main-list'),

    backToTopBtn: document.querySelector('.back-to-top'),
    paginationRef: document.querySelector('.pagination'),
    
  };
}

export default getRefs;
