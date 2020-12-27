import Geocode from "react-geocode";

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyB3ikzce_N3sxXJMCb4GWv-k-HxbsRJkwk");

// set response language. Defaults to english.
Geocode.setLanguage("en");

// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("it");

// Enable or disable logs. Its optional.
Geocode.enableDebug();

// Get address from latitude & longitude.
export function getAddressFromCoordinates(lat, lgn) {
    return Geocode.fromLatLng(lat, lgn).then(
        response => {
            const address = response.results[0].formatted_address;
            console.log(address);
        },
        error => {
            console.error(error);
        }
    );
}

// Get latitude & longitude from address.
export function getCoordinatesFromAddress(address) {
    console.log("address is: ", address)
    return Geocode.fromAddress(address).then(
        response => {
            const { lat, lng } = response.results[0].geometry.location;
            console.log(lat, lng);
            return {lat, lng}
        },
        error => {
            console.error(error);
        }
    );
}
