(function() {
  var map, marker;

  map = new GMaps({
    div: '#map',
    lat: 34.035977652,
    lng: -81.191806908
  });

  marker = map.addMarker({
    lat: 34.035977652,
    lng: -81.191806908,
    title: 'Wintergreen Woods',
    icon: 'http://www.google.com/intl/en_us/mapfiles/ms/micons/blue-dot.png',
    infoWindow: {
      content: '<h4>Wintergreen Woods</h4> <h5 class="address">1032 Corley Mill Rd.</h5> <h5 class="address">Lexington, SC 29072</h5>'
    }
  });

  google.maps.event.trigger(marker, 'click');

}).call(this);
