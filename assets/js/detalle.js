const climaClassMap = {
  "Soleado": "place-card--clear",
  "Nublado": "place-card--cloudy",
  "Lluvioso": "place-card--rainy",
  "Tormenta": "place-card--storm"
};

// Obtener ID desde la URL
const params = new URLSearchParams(window.location.search);
const lugarId = parseInt(params.get("id"));

// Buscar lugar
const lugar = lugares.find(item => item.id === lugarId);

// Validación
if (!lugar) {
  document.body.innerHTML = "<p>Error: Lugar no encontrado</p>";
  throw new Error("Lugar no encontrado");
}

// ===============================
// ELEMENTOS DEL DOM
// ===============================
const titulo = document.getElementById("titulo");
const pronosticoContainer = document.getElementById("pronostico");
const estadisticasContainer = document.getElementById("estadisticas");

// ===============================
// TITULO
// ===============================
titulo.textContent = `Clima en ${lugar.nombre}`;

// ===============================
// PRONÓSTICO SEMANAL
// ===============================
lugar.pronosticoSemanal.forEach(dia => {
  const card = document.createElement("div");
  card.className = "col-sm-6 col-md-4 mb-3";

 const climaClass = climaClassMap[dia.estado] || "";

card.innerHTML = `
  <div class="place-card ${climaClass}">
    <h5>${dia.dia}</h5>
    <p>🌡️ ${dia.min}°C / ${dia.max}°C</p>
    <p>${dia.estado}</p>
  </div>
`;

  pronosticoContainer.appendChild(card);
});

// ===============================
// ESTADÍSTICAS
// ===============================
function calcularEstadisticas(pronostico) {
  let min = Infinity;
  let max = -Infinity;
  let suma = 0;

  const conteoClima = {};

  pronostico.forEach(dia => {
    if (dia.min < min) min = dia.min;
    if (dia.max > max) max = dia.max;

    suma += dia.max;

    conteoClima[dia.estado] = (conteoClima[dia.estado] || 0) + 1;
  });

  return {
    min,
    max,
    promedio: Math.round(suma / pronostico.length),
    conteoClima
  };
}

const stats = calcularEstadisticas(lugar.pronosticoSemanal);

// ===============================
// MOSTRAR ESTADÍSTICAS
// ===============================
estadisticasContainer.innerHTML = `
  <h4>📊 Estadísticas semanales</h4>
  <ul>
    <li>🌡️ Temperatura mínima: ${stats.min}°C</li>
    <li>🔥 Temperatura máxima: ${stats.max}°C</li>
    <li>📈 Temperatura promedio: ${stats.promedio}°C</li>
  </ul>
`;

// ===============================
// RESUMEN AUTOMÁTICO
// ===============================
let resumen = "Semana con clima variado.";

if (stats.conteoClima["Soleado"] >= 4) {
  resumen = "Semana mayormente soleada ☀️";
} else if (stats.conteoClima["Lluvioso"] >= 4) {
  resumen = "Semana mayormente lluviosa 🌧️";
}

const resumenEl = document.createElement("p");
resumenEl.className = "mt-3 fw-bold";
resumenEl.textContent = resumen;

estadisticasContainer.appendChild(resumenEl);
