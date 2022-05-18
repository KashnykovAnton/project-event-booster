import { fetchEvent } from './apiService';
import { createMarkup } from './fetchAndMarkup';
import { states } from './getStates';
import { refs } from './getRefs';
import { hideLoader } from './loader';

geolocator.config({
  language: 'en',
  google: {
    version: '3',
    key: 'AIzaSyCEr9xJ0UNo6Ex4o3aCIPlAqtOFHGI7T4Y',
  },
});

function geolocate() {
  var options = {
    enableHighAccuracy: true,
    timeout: 0,
    maximumWait: 0, // max wait time for desired accuracy
    maximumAge: 0, // disable cache
    desiredAccuracy: 30, // meters
    fallbackToIP: true, // fallback to IP if Geolocation fails or rejected
    addressLookup: true, // requires Google API key if true
    timezone: true, // requires Google API key if true
    // map: "map-canvas",      // interactive map element id (or options object)
    staticMap: true, // get a static map image URL (boolean or options object)
  };

  geolocator.locate(options, function (err, location) {
    if (err) {
      userCancelGeo();
    }
    const country = location.address.countryCode;
    console.log('внутри геолокоции', country);
    fetchEvent(states.query, states.page, country)
      .then(createMarkup)
      .then((states.country = country))
      .catch(absenceEventInCountry)
      .finally(hideLoader);
  });
}

window.onload = geolocate();

function userCancelGeo() {
  refs.mainListRef.innerHTML =
    '<div class="error_Geo animate__animated animate__zoomInDown"><h2>Sorry, but we could not access your geolocation :(</h2> <h3>Please select your country :)</h3></div>';
}

function absenceEventInCountry() {
  refs.mainListRef.innerHTML =
    '<div class="error_Geo animate__animated animate__zoomInDown"><h2>No events found in your country :(</h2> <h3>Please select another country :)</h3></div>';
}

export { geolocate };
