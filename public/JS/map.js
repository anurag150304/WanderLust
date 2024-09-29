const value = JSON.parse(coordinates);

mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: value, // starting position [lng, lat]
    zoom: 9, // starting zoom
});

// create the popup
const popup = new mapboxgl.Popup({ offset: 25 }).setText(place);

const el = document.createElement('div');
el.id = 'marker';
const logo = document.createElement('i');
logo.setAttribute('class', 'fa-solid fa-place-of-worship');
el.appendChild(logo);

// create the marker
new mapboxgl.Marker(el)
    .setLngLat(value)
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);