const API_KEY = 'CQP9dthjPXqIe7ApjGu3SzKFu5V4QuaK';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';

async function fetchEvent(event, page, country) {
  const response = await fetch(
    `${BASE_URL}/events?countryCode=${country}&keyword=${event}&page=${page}&size=20&locale=*&apikey=${API_KEY}`,
  );
  const events = await response.json();
  return events;
}

export default fetchEvent;
// CQP9dthjPXqIe7ApjGu3SzKFu5V4QuaK
// vUlU4BB7NuakA06DxGebwYsl0aXUn0iA
