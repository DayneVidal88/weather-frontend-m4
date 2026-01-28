# 🌦️ Weather Frontend – Módulo 4

## 📌 Descripción del proyecto
Aplicación web de clima desarrollada con **HTML, SASS y JavaScript puro**, que permite visualizar el estado del clima y un pronóstico semanal por ciudad.

En este módulo, la aplicación **NO consume APIs externas**. Toda la información climática se encuentra **modelada localmente en JavaScript**, cumpliendo con los requisitos del Módulo 4.

El objetivo principal del proyecto es aplicar correctamente:
- Modelado de datos en arreglos y objetos
- Manipulación del DOM
- Uso de funciones, ciclos y condicionales
- Cálculo de estadísticas a partir de datos

---

## 🎯 Objetivos del Módulo 4
- Renderizar información dinámica desde datos locales
- Separar datos, lógica y presentación
- Calcular estadísticas semanales de clima
- Generar un resumen automático según los datos
- Mantener una estructura de código clara y ordenada

---

## 🗂️ Estructura del proyecto

```
weather-frontend-m4/
│
├── index.html          # Vista principal (ciudades)
├── detalle.html        # Vista detalle por ciudad
│
├── assets/
│   ├── css/            # CSS compilado desde SASS
│   ├── scss/           # Archivos SASS
│   └── js/
│       ├── data.js     # Modelo de datos climáticos
│       ├── main.js     # Lógica de la vista principal
│       └── detalle.js  # Lógica de la vista detalle y estadísticas
│
└── README.md
```

---

## 🧠 Modelo de datos
Los datos del clima se encuentran definidos en el archivo `data.js` mediante un arreglo de objetos llamado `lugares`.

Cada lugar contiene:
- `id`
- `nombre`
- `tempActual`
- `estadoActual`
- `pronosticoSemanal` (arreglo con días, temperaturas y estado del clima)

Ejemplo simplificado:

```js
{
  id: 1,
  nombre: "Santiago",
  tempActual: 24,
  estadoActual: "Soleado",
  pronosticoSemanal: [
    { dia: "Lunes", min: 15, max: 25, estado: "Soleado" }
  ]
}
```

---

## 🖥️ Funcionamiento de la aplicación

### Vista principal (Home)
- Muestra una tarjeta por cada ciudad
- Renderiza nombre, temperatura actual y estado del clima
- Permite navegar al detalle mediante un botón

### Vista detalle
- Muestra el pronóstico semanal completo
- Calcula automáticamente:
  - Temperatura mínima
  - Temperatura máxima
  - Temperatura promedio
- Genera un resumen textual según el clima predominante
- Incluye botón para volver a la vista principal

---

## 📊 Estadísticas
Las estadísticas se calculan dinámicamente usando funciones y ciclos en JavaScript, sin datos predefinidos en el HTML.

Ejemplo de estadísticas mostradas:
- 🌡️ Temperatura mínima semanal
- 🔥 Temperatura máxima semanal
- 📈 Temperatura promedio
- 📝 Resumen automático del clima

---

## 🛠️ Tecnologías utilizadas
- HTML5
- SASS (SCSS)
- JavaScript (ES6)
- Bootstrap (estructura y layout)

---

## 🚫 Restricciones del módulo
- ❌ No se utilizan APIs externas
- ❌ No se consumen datos dinámicos desde internet
- ✅ Todos los datos son locales y manipulados con JavaScript

---

## 👨‍💻 Autor
**Dayne Vidal**  
Portafolio Módulo 4-Bootcamp Desarrollo de Aplicaciones

---

## 📎 Notas finales
Este proyecto reutiliza la base visual del Módulo 3, adaptando completamente la lógica JavaScript para cumplir con los requerimientos del Módulo 4.

El foco principal está en la correcta manipulación de datos, cálculo de estadísticas y renderizado dinámico del DOM.

## 📂 Repositorio

🔗 **Repositorio GitHub:** *(https://github.com/DayneVidal88/weather-frontend-m4)*

🔗 https://daynevidal88.github.io/weather-frontend-m4/index.html
