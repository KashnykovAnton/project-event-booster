import { getRefs } from './getRefs';
import { fetchEvent } from './apiService';

const refs = getRefs();

function onSearchEvent(e) {
  e.preventDefault();
  refs.formRef.query = e.currentTarget.elements.query.value;
  const searchEvent = e.currentTarget.elements.query.value;

  fetchEvent(searchEvent)
    .then(events => console.log(events)) // успешно получаем 20 events
    .catch();
}
