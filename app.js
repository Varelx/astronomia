// COUNTDOWN
function updateCountdown() {
  const target = new Date(ECLIPSE_DATE).getTime();
  const now = new Date().getTime();
  const diff = target - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("timer").innerHTML =
    `${days} días ${hours}h ${minutes}m`;
}

setInterval(updateCountdown, 1000);

// SEARCH CITY
function searchCity() {
  const city = document.getElementById("cityInput").value;
  const result = eclipseData[city];

  if (result) {
    document.getElementById("result").innerHTML =
      `Visibilidad: ${result.visibility} - Hora: ${result.time}`;
  } else {
    document.getElementById("result").innerHTML =
      "Ciudad no disponible aún";
  }
}

// EMAIL CAPTURE (simple demo)
function subscribe() {
  const email = document.getElementById("email").value;
  document.getElementById("msg").innerText =
    "Registrado correctamente (demo)";
}

// MAP
const map = L.map('map').setView([40, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// zonas ejemplo
L.circle([40.4, -3.7], {
  radius: 200000,
  color: "yellow"
}).addTo(map).bindPopup("Zona de visibilidad alta");
