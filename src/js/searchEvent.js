import fetchEvent from './apiService';

const states = {
  page: 1,
  query: '',
};

export default function onSearchEvent(e) {
  e.preventDefault();
  states.query = e.currentTarget.elements.query.value;
  const searchEvent = states.query;
  states.page = 1;

  console.log(searchEvent);

  fetchEvent(searchEvent)
    .then(events => console.log(events)) // успешно получаем 20 events
    .catch();
}
