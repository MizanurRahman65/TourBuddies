// /* eslint-disable */
// export const displayMap = locations => {
//   mapboxgl.accessToken =
//   'pk.eyJ1IjoibWl6YW51ci1yYWhtYW4iLCJhIjoiY2toa3FmMW50MDVsMTJycnQzb2M1b3lydiJ9.rAO00RXiJoybxK6SvIuJVg';

//   var map = new mapboxgl.Map({
//     container: 'map',
//     style: '://styles/mmapboxapmapbox://styles/mizanur-rahman/ckhkrubu401ln19nczfwqv4ma',
//     scrollZoom: false
//     // center: [-118.113491, 34.111745],
//     // zoom: 10,
//     // interactive: false
//   });

//   const bounds = new mapboxgl.LngLatBounds();

//   locations.forEach(loc => {
//     // Create marker
//     const el = document.createElement('div');
//     el.className = 'marker';

//     // Add marker
//     new mapboxgl.Marker({
//       element: el,
//       anchor: 'bottom'
//     })
//       .setLngLat(loc.coordinates)
//       .addTo(map);

//     // Add popup
//     new mapboxgl.Popup({
//       offset: 30
//     })
//       .setLngLat(loc.coordinates)
//       .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
//       .addTo(map);

//     // Extend map bounds to include current location
//     bounds.extend(loc.coordinates);
//   });

//   map.fitBounds(bounds, {
//     padding: {
//       top: 200,
//       bottom: 150,
//       left: 100,
//       right: 100
//     }
//   });
// };