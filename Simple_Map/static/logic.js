console.log("this is working")

//create the map object with a center and zoom level
let map = L.map('mapid').setView([37.6214, -122.3790], 5);

//create tile layer that will be the background for the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_Key
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


//get data from cities
let cityData = cities

cityData.forEach(city => {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population /100000
    }).bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>").addTo(map)
})

// Coordinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085],
    [37.6214, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];


// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "yellow"
 }).addTo(map);