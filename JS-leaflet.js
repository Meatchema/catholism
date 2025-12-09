<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>

// Initialize the map
const map = L.map('map').setView([20, 0], 2); // Center on the world

// Add a tile layer (map background)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Example data for clickable points 
const locations = [
  {
    name: "Écône, Switzerland",
    coords: [46.229, 7.352],
    info: "<strong>SSPX Headquarters</strong><br>Founded by Archbishop Lefebvre.<br>Major European base of operations."
  },
  {
    name: "Kansas City, USA",
    coords: [39.0997, -94.5786],
    info: "<strong>SSPX USA Headquarters</strong><br>Oversees American district operations."
  },
  {
    name: "Rome, Italy",
    coords: [41.9028, 12.4964],
    info: "<strong>Rome</strong><br>Frequent site of dialogue with Vatican officials."
  }
];

// Add circles for each location
locations.forEach(loc => {
  const circle = L.circleMarker(loc.coords, {
    radius: 8,
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.6
  }).addTo(map);

  circle.bindPopup(loc.info); // Info box when clicked
});
