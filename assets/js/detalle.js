const apiKey = "437347debbfcbe7d1d65cfd7e0dc54ac";

// Obtener ciudad desde URL
const params = new URLSearchParams(window.location.search);
const ciudad = params.get("city") || "Quilpué";

// Título
document.getElementById("titulo").textContent = `${ciudad} – Detalle del Clima`;

// URLs
const urlActual = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

// ====================
// CLIMA ACTUAL
// ====================
fetch(urlActual)
  .then(res => res.json())
  .then(data => {
    document.getElementById("temp").textContent = `${data.main.temp}°C`;
    document.getElementById("estado").textContent = data.weather[0].description;
    document.getElementById("humedad").textContent = `Humedad: ${data.main.humidity}%`;
    document.getElementById("viento").textContent = `Viento: ${data.wind.speed} km/h`;

    const descripcion = data.weather[0].description.toLowerCase();
    const detalleCard = document.getElementById("detalle-card");

    detalleCard.classList.add("place-card");

    if (descripcion.includes("claro")) {
      detalleCard.classList.add("place-card--clear");
    } else if (descripcion.includes("nube")) {
      detalleCard.classList.add("place-card--cloudy");
    } else if (descripcion.includes("lluvia")) {
      detalleCard.classList.add("place-card--rainy");
    } else if (descripcion.includes("tormenta")) {
      detalleCard.classList.add("place-card--storm");
    }
  })
  .catch(err => console.error("Error clima actual:", err));

// ====================
// PRONÓSTICO
// ====================
fetch(urlForecast)
  .then(res => res.json())
  .then(data => {
    const pronosticoContainer = document.getElementById("pronostico");

    const dias = {};
    data.list.forEach(item => {
      const fecha = new Date(item.dt_txt);
      const dia = fecha.toLocaleDateString("es-ES", { weekday: "long" });
      if (!dias[dia]) dias[dia] = item;
    });

    Object.keys(dias).forEach(dia => {
      const info = dias[dia];
      const descripcion = info.weather[0].description.toLowerCase();

      let climaClase = "place-card--clear";
      if (descripcion.includes("nube")) climaClase = "place-card--cloudy";
      if (descripcion.includes("lluvia")) climaClase = "place-card--rainy";
      if (descripcion.includes("tormenta")) climaClase = "place-card--storm";

      const card = document.createElement("div");
      card.className = "col-12 col-md-4 mb-3";

      card.innerHTML = `
        <div class="card place-card ${climaClase}">
          <div class="card-body text-center">
            <h5 class="place-card__title">${dia}</h5>
            <img
              class="place-card__icon"
              src="https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png"
              alt="${info.weather[0].description}"
            />
            <p class="place-card__temp">
              ${info.main.temp}°C – ${info.weather[0].description}
            </p>
          </div>
        </div>
      `;

      pronosticoContainer.appendChild(card);
    });
  })
  .catch(err => console.error("Error pronóstico:", err));
