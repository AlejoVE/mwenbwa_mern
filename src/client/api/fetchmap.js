

const map = async (displayMap) => {

    var map = L.map('map').setView([50.628709, 5.575633], 7); 
    
    L.tileLayer('https://tile.openstreetmap.be/osmbe/{z}/{x}/{y}.png', {
                attribution:
                '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors' +
                ', Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>',
                maxZoom: 18}).addTo(map);
    var marker = L.marker([50.628709, 5.575633]).addTo(map);
}
