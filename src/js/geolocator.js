import fetchEvent from '../js/apiService';
import { createMarkup } from '../js/grid';
import { states } from './searchEvent';

geolocator.config({
  language: 'en',
  google: {
    version: '3',
    key: 'AIzaSyCEr9xJ0UNo6Ex4o3aCIPlAqtOFHGI7T4Y',
  },
});

window.onload = function () {
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
      fetchEvent(states.query, states.page, states.country).then(createMarkup);
      return
    }
    const country = location.address.countryCode;
    console.log(country);
    fetchEvent(states.query, states.page, country)
      .then(createMarkup)
      .then((states.country = country))
      .catch(error =>
        fetchEvent(states.query, states.page, 'US')
          .then(createMarkup)
          .then((states.country = 'US')),
      );
  });
};
