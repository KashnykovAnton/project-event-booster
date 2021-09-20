// import {states} from './getStates'

const API_KEY = 'CQP9dthjPXqIe7ApjGu3SzKFu5V4QuaK';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';

const fetchEvent = {
  async fetchByEventAndCountry(event,country, page = 0) {
    const response = await fetch(
      `${BASE_URL}/events.json?countryCode=${country}&keyword=${event}&page=${page}&size=24&locale=*&apikey=${API_KEY}`);
    const events = await response.json();
    return events;
  },
  async fetchByEvent(event, page = 0) {
    const response = await fetch(
      `${BASE_URL}/events.json?keyword=${event}&page=${page}&size=24&locale=*&apikey=${API_KEY}`);
    const events = await response.json();
    return events;
  },
  async fetchId(id) {
    const response = await fetch(
      `${BASE_URL}/events.json?&apikey=${API_KEY}&id=${id}`
    );
    const events = await response.json();
    return events;
  },
  async fetchCountry(country, page=0) {
    const response = await fetch(
      `${BASE_URL}/events.json?countryCode=${country}&page=${page}&size=24&locale=*&apikey=${API_KEY}`);
    const events = await response.json();
    return events;
  },
  async fetchRandom(page) {
    const response = await fetch(
      `${BASE_URL}/events.json?&apikey=${API_KEY}&page=${page}&size=24&sort=random`);
    const events = await response.json();
    return events;
  },
};
export default fetchEvent;



