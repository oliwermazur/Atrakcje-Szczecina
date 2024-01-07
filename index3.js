var map = L.map('map', {
    zoomControl: false,
}).setView([53.4285, 14.5528], 13);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
}).addTo(map);


var customDivIcon = L.divIcon({
    className: 'custom-div-icon',
    html: "<div></div>",
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAnchor: [0, -20]
});


var marker = L.marker([53.42380010536107, 14.549727895980077], {icon: customDivIcon}).addTo(map);


marker.bindPopup('<h3>Nowy Browar</h3><img src="nowyb.jpg" alt="Nowy Browar" style="width:100%;"><p>Partyzantów 2, 70-222</p>');

