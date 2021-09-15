import getRefs from './getRefs';

const refs = getRefs();

function changeClassActive(e) {
  if (refs.selectedRef) {
    refs.selectedRef.classList.remove('number-of-page__active');
    console.log('class removed');
  }
  refs.selectedRef = e.target;
  e.target.classList.add('number-of-page__active');
  console.log('class added');
}

export default changeClassActive;
