import getRefs from './getRefs';
import { states } from './searchEvent';

const refs = getRefs();

function changeClassActive() {
  const foundPage = states.page;
  const foundIndex = states.array.indexOf(foundPage);
  const activePageRef = refs.paginationRef.querySelector(
    `.pagination span:nth-child(${foundIndex + 1})`,
  );
  activePageRef.classList.add('number-of-page_active');
}

export default changeClassActive;
