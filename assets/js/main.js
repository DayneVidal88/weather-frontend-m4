const contenedor = document.getElementById("ciudades-container");

// Verificación de seguridad
if (!contenedor) {
  console.error("No se encontró el contenedor de lugares");
}

// Renderizar lugares
lugares.forEach(lugar => {
  const card = document.createElement("div");
  card.className = "col-sm-6 col-md-4 mb-4";

  // Determinar clase según clima
  const climaClass =
    lugar.estadoActual === "Soleado" ? "place-card--clear" :
    lugar.estadoActual === "Nublado" ? "place-card--cloudy" :
    lugar.estadoActual === "Lluvioso" ? "place-card--rainy" :
    lugar.estadoActual === "Tormenta" ? "place-card--storm" :
    "";

  card.innerHTML = `
    <div class="place-card ${climaClass}">
      <h3 class="place-card__title">${lugar.nombre}</h3>
      <p class="place-card__temp">${lugar.tempActual}°C</p>
      <p class="place-card__state">${lugar.estadoActual}</p>

      <a 
        href="detalle.html?id=${lugar.id}" 
        class="btn btn-light mt-3"
      >
        Ver detalle
      </a>
    </div>
  `;

  contenedor.appendChild(card);
});
