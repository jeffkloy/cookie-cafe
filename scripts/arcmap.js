var map, pictureMarkerSymbol;

require(["esri/symbols/PictureMarkerSymbol", "esri/graphic", "esri/map", "dojo/domReady!"], function(Map, PictureMarkerSymbol) {
    map = new Map("map", {
        basemap: "streets-navigation-vector",
        center: [-122.45, 37.75], // longitude, latitude
        zoom: 17
    });

    pictureMarkerSymbol = new PictureMarkerSymbol("/images/cookie.png", 25, 25);
    var graphic = new Graphic(evt.geometry, pictureMarkerSymbol);
    map.graphics.add(graphic);
    
});