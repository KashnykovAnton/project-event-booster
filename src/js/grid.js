import fetchEvent from "../js/apiService";

const mainListRef = document.querySelector(".main-list");

function createMarkup(data) {
  console.log(data.events[0].images);
  data.events.map((el) => {
    mainListRef.insertAdjacentHTML(
      "beforeend",
      `<li class="main-item">
        <img class="main-poster" src="${el.images[0].url}" alt="">
        <h2 class="main-name">${el.name}</h2>
        <p class="main-date">${el.dates.start.localDate}</p>
        <p class="main-location">${el.dates.timezone}</p>
        </li>`
    );
  });
}

fetchEvent().then(createMarkup);
