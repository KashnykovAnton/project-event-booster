import { states } from './searchEvent';

// const refs = getRefs();


function getNumberOfPage(e) {
  if (e.target.nodeName !== 'SPAN') {
    return;
  }
  // console.log(e.srcElement.outerText);
  states.page = +e.srcElement.outerText;
}

export default getNumberOfPage;