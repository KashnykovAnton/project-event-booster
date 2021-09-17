import { states } from './searchEvent';


function getNumberOfPage(e) {
  if (e.target.nodeName !== 'SPAN' || e.srcElement.outerText === '...') {
    return;
  }

  states.page = +e.srcElement.outerText;
}

export default getNumberOfPage;