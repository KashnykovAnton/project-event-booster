// import {states} from './getStates'

const API_KEY = 'vUlU4BB7NuakA06DxGebwYsl0aXUn0iA';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';

async function fetchEvent(event, page, country, size = 24) {
  const response = await fetch(
    `${BASE_URL}/events?countryCode=${country}&keyword=${event}&page=${page}&size=${size}&locale=*&apikey=${API_KEY}`,
  );
  const events = await response.json();
  return events;
}

async function fetchEventById(id) {
  const response = await fetch(`${BASE_URL}/events.json?&apikey=${API_KEY}&locale=*&id=${id}`);
  const ev = await response.json();
  return ev;
}

async function fetchByEventAndCountry(event,country, page = 0, size = 24) {
  const response = await fetch(
    `${BASE_URL}/events.json?countryCode=${country}&keyword=${event}&page=${page}&size=${size}&locale=*&apikey=${API_KEY}`);
  const events = await response.json();
  return events;
}

// fetchEvent('', 0, 'US').then(data => {states.totalPages = data.page.totalPages
// console.log(states.totalPages)})

export { fetchEvent, fetchEventById, fetchByEventAndCountry };
// CQP9dthjPXqIe7ApjGu3SzKFu5V4QuaK
// vUlU4BB7NuakA06DxGebwYsl0aXUn0iA
