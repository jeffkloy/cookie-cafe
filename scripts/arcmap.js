var map;
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;
var pnt1,pnt2;
​
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 34.0599, lng: -118.3103},
      zoom: 18
    });
    pnt1 = map.getCenter();
​
    var trafficLayer = new google.maps.TrafficLayer();
  	trafficLayer.setMap(map);
​
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
​
      map.setCenter(pos);
    });
  }
​
  google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng, map);
    pnt2 = event.latLng;
  });
​
  addMarker(map.getCenter(), map);
​
  // Adds a marker to the map.
function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map
  });
}
}
