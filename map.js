document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([51.505, -0.09], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var marker3 = L.marker([55.80333861300149, 37.409907497317356]).addTo(map);
    marker3.bindPopup("<b>Молодец!</b><br>Я тута.").openPopup();

    var marker2 = L.marker([7.93123809460827, 98.32667234059166]).addTo(map);
    marker2.bindPopup("<b>Ищешь меня?</b><br>И я даже не здесь!").openPopup();

    var marker1 = L.marker([51.5, -0.09]).addTo(map);
    marker1.bindPopup("<b>Привет! </b><br>Я, увы, не здесь.").openPopup();

});
