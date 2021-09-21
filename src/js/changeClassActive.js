import { refs } from './getRefs';
import { states } from './getStates';

function changeClassActive() {
  const foundPage = states.page;
  const foundIndex = states.array.indexOf(foundPage);
  if (states.array.length > 1) {
    const activePageRef = refs.paginationRef.querySelector(
      `.pagination span:nth-child(${foundIndex + 1})`,
    );
    activePageRef.classList.add('number-of-page_active');
  }
}

export default changeClassActive;
