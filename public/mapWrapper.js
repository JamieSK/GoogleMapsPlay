let MapWrapper = function(container, centre, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: centre,
    zoom: zoom,
  });
  this.markers = [];
  this.addClickEvent();
};

MapWrapper.prototype = {
  addMarker: function(centre) {
    let marker = new google.maps.Marker({
      position: centre,
      map: this.googleMap,
      icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    });
    this.markers.push(marker);
  },
  addClickEvent: function() {
    google.maps.event.addListener(this.googleMap, 'click', (event) => {
      this.addMarker(event.latLng);
    });
  },
  bounceMarkers: function() {
    this.markers.forEach((marker) => {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    });
  },
  addInfoWindow: function(index) {
    let infowindow = new google.maps.InfoWindow({
      content: 'Here\'s where I buy coffee',
    });

    let marker = this.markers[0];
    infowindow.open(this.googleMap, marker);
  },
  centreOnThurso: function() {
    this.googleMap.setCenter({lat: 58.593566, lng: -3.52208});
  },
  whereAmI: function() {
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      this.googleMap.setCenter({lat, lng});
    }.bind(this));
  },
};
