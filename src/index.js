function getRefs() {
  return {
    formRef: document.querySelector(''), //ссылка на будуйщую форму
  };
}

const refs = getRefs();

const API_KEY = 'CQP9dthjPXqIe7ApjGu3SzKFu5V4QuaK';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';

async function fetchEvent(event) {
  const response = await fetch(
    `${BASE_URL}/events.json?keyword=${event}&page=1&source=universe&countryCode=US&apikey=${API_KEY}`,
  );
  const dataResponse = await response.json();
  const events = await dataResponse._embedded;
  return events;
}

refs.formRef.addEventListener('submit', onSearchEvent);

function onSearchEvent(e) {
  e.preventDefault();
  refs.formRef.query = e.currentTarget.elements.query.value;
  const searchEvent = e.currentTarget.elements.query.value;

  fetchEvent(searchEvent)
    .then(events => console.log(events)) // успешно получаем 20 events
    .catch();
}
