// Инициализация карты
var mymap = L.map('map').setView([51.505, -0.09], 2.5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(mymap);

L.marker([55.803688377351406, 37.41016499204887]).addTo(mymap)
    .bindPopup('Я тута')
    .openPopup();

L.marker([7.957632284101993, 98.33758940527918]).addTo(mymap)
    .bindPopup('И даже не здесь!')
    .openPopup();

L.marker([51.51, -0.2]).addTo(mymap)
    .bindPopup('Привет! Я, увы, не здесь.')
    .openPopup();

    