const initialise = function() {
  let container = document.getElementById('main-map');
  let centre = {lat: 55.8570633, lng: -4.2440243};
  let zoom = 15;

  let mainMap = new MapWrapper(container, centre, zoom);

  let coffee = {lat: 55.856074, lng: -4.247226};
  mainMap.addMarker(coffee);
  mainMap.addInfoWindow();

  let bouncer = document.getElementById('bouncer');
  bouncer.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));

  let thurso = document.getElementById('thurso');
  thurso.addEventListener('click', mainMap.centreOnThurso.bind(mainMap));

  let where = document.getElementById('where');
  where.addEventListener('click', mainMap.whereAmI.bind(mainMap));
};

window.addEventListener('load', initialise);
