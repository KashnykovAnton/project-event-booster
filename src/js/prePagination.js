import fetchEvent from "./apiService";
import { states } from "./getStates";

function prePagination() {
  fetchEvent(states.query, states.page, states.country, 200)
    .then(data => {
      if (data._embedded) {
        console.log(data._embedded.events.length);
        states.totalPages = data._embedded.events.length;
      }
    })
    .catch(error => console.log(error));

  if (states.totalPages === 200) {
    fetchEvent(states.query, states.page + 1, states.country, 200)
      .then(data => {
        if (data._embedded) {
          states.totalPages += data._embedded.events.length;
        }
      })
      .catch(error => console.log(error));
  }

  if (states.totalPages === 400) {
    fetchEvent(states.query, states.page + 2, states.country, 200)
      .then(data => {
        if (data._embedded) {
          states.totalPages += data._embedded.events.length;
        }
      })
      .catch(error => console.log(error));
  }

  if (states.totalPages === 600) {
    fetchEvent(states.query, states.page + 3, states.country, 200)
      .then(data => {
        if (data._embedded) {
          states.totalPages += data._embedded.events.length;
        }
      })
      .catch(error => console.log(error));
  }

  // if (states.totalPages ===800) {
  //   fetchEvent(states.query, states.page + 4, states.country, 200)
  //     .then(data => {
  //       if (data._embedded) {
  //         states.totalPages += data._embedded.events.length;
  //       }
  //     })
  //     .catch(error => console.log(error));
  // }

  states.totalPages = Math.round(states.totalPages / 24);
}

export default prePagination;