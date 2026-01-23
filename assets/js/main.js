const ciudades = [
  "Santiago",
  "Valparaíso",
  "Quilpué",
  "Buenos Aires",
  "Londres",
  "París",
  "Roma",
  "Nueva York",
  "Tokio",
  "Sydney"
];

const apiKey = "437347debbfcbe7d1d65cfd7e0dc54ac";
const container = document.getElementById("ciudades-container");

document.addEventListener("DOMContentLoaded", () => {
  ciudades.forEach(ciudad => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const descripcion = data.weather[0].description.toLowerCase();

        let climaClase = "place-card--clear";

        if (descripcion.includes("nube")) climaClase = "place-card--cloudy";
        if (descripcion.includes("lluvia")) climaClase = "place-card--rainy";
        if (descripcion.includes("tormenta")) climaClase = "place-card--storm";

        const card = document.createElement("div");
        card.className = "col-12 col-md-6 col-lg-4 mb-4";

        card.innerHTML = `
          <div class="card place-card ${climaClase}">
            <div class="card-body text-center">
              <h5 class="place-card__title">${data.name}</h5>
              <img 
                class="place-card__icon"
                src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
                alt="${data.weather[0].description}"
              />
              <p class="place-card__temp">
                ${data.main.temp}°C – ${data.weather[0].description}
              </p>
              <a href="detalle.html?city=${data.name}" class="btn btn-primary">
                Ver detalle
              </a>
            </div>
          </div>
        `;

        container.appendChild(card);
      })
      .catch(err => {
        console.error("Error al obtener datos:", err);
      });
  });
});
