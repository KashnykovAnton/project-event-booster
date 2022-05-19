import { fetchEvent } from './apiService';
import { createMarkup } from './fetchAndMarkup';
import { states } from './getStates';
import { refs } from './getRefs';
import { hideLoader } from './loader';

const GEO_KEY = 'AntonMail';
const API_KEY = '0cc70647f413003b02de263750cf9a3e';

window.onload = geolocate();

function geolocate() {
  navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);
}

function onGetPositionError() {
  refs.mainListRef.innerHTML =
    '<div class="error_Geo animate__animated animate__zoomInDown"><h2>Sorry, but we could not access your geolocation :(</h2> <h3>Please select your country :)</h3></div>';
  hideLoader();
}

async function onGetPositionSuccess(position) {
  try {
    const response = await fetch(
      // `https://api.ipapi.com/api/check?access_key=${API_KEY}`,
      `https://api.ipapi.com/api/check?access_key=${API_KEY}`,
      // `http://api.geonames.org/countryCodeJSON?lat=${position.coords.latitude}&lng=${position.coords.longitude}&username=${GEO_KEY}`,
    );
    const data = await response.json();
    console.log(data);
    // return fetchEventWithGeolocation(data.countryCode);
    return fetchEventWithGeolocation(data.country_code);
  } catch (error) {
    console.log(error);
    onGetPositionError();
  }
}

function fetchEventWithGeolocation(country) {
  fetchEvent(states.query, states.page, country)
    .then(createMarkup)
    .then((states.country = country))
    .then(selectCountry())
    .catch(absenceEventInCountry)
    .finally(hideLoader);
}

function selectCountry() {
  refs.selectOptionsRefs.forEach((item, index) => {
    if (item.value === states.country) {
      refs.formSelect.options[index + 2].selected = true;
    }
  });
}

function absenceEventInCountry() {
  refs.mainListRef.innerHTML =
    '<div class="error_Geo animate__animated animate__zoomInDown"><h2>No events found in your country :(</h2> <h3>Please select another country :)</h3></div>';
}

export { geolocate };

// -----OLD version with geolocator-----
//
// geolocator.config({
//   language: 'en',
//   google: {
//     version: '3',
//     key: 'AIzaSyCEr9xJ0UNo6Ex4o3aCIPlAqtOFHGI7T4Y',
//   },
// });

// function geolocate() {
//   var options = {
//     enableHighAccuracy: true,
//     timeout: 0,
//     maximumWait: 0, // max wait time for desired accuracy
//     maximumAge: 0, // disable cache
//     desiredAccuracy: 30, // meters
//     fallbackToIP: true, // fallback to IP if Geolocation fails or rejected
//     addressLookup: true, // requires Google API key if true
//     timezone: true, // requires Google API key if true
//     // map: "map-canvas",      // interactive map element id (or options object)
//     staticMap: true, // get a static map image URL (boolean or options object)
//   };

//   geolocator.locate(options, function (err, location) {
//     if (err) {
//       userCancelGeo();
//     }
//     const country = location.address.countryCode;
//     console.log('внутри геолокоции', country);
//     fetchEvent(states.query, states.page, country)
//       .then(createMarkup)
//       .then((states.country = country))
//       .catch(absenceEventInCountry)
//       .finally(hideLoader);
//   });
// }

// window.onload = geolocate();

// function userCancelGeo() {
//   refs.mainListRef.innerHTML =
//     '<div class="error_Geo animate__animated animate__zoomInDown"><h2>Sorry, but we could not access your geolocation :(</h2> <h3>Please select your country :)</h3></div>';
// }

// function absenceEventInCountry() {
//   refs.mainListRef.innerHTML =
//     '<div class="error_Geo animate__animated animate__zoomInDown"><h2>No events found in your country :(</h2> <h3>Please select another country :)</h3></div>';
// }

// export { geolocate };
