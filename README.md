# 🌦️ App de Clima – Módulo 3

## 📌 Descripción del proyecto

Esta aplicación web muestra información climática de distintas ciudades del mundo, permitiendo visualizar el **clima actual** en una vista principal (Home) y acceder a una **vista de detalle** con información ampliada y un pronóstico simplificado.

El proyecto corresponde a la iteración del **Módulo 3**, cuyo foco está en la **interfaz, estilos y experiencia de usuario**, manteniendo la funcionalidad base desarrollada previamente.

---

## 🎯 Temática

App de clima orientada a mostrar el estado meteorológico de **ciudades nacionales e internacionales**, utilizando una interfaz clara, responsiva y visualmente coherente con la temática climática.

---

## 🧩 Estructura de la aplicación

- **Home (`index.html`)**  
  Grilla de cards con el clima actual de distintas ciudades.

- **Detalle (`detalle.html`)**  
  Vista con información ampliada del clima de la ciudad seleccionada y pronóstico semanal simplificado, incluyendo un botón de navegación para volver al inicio.

---

## 🎨 Metodología de estilos

Se utilizó la metodología **BEM (Block, Element, Modifier)** para la organización de clases CSS, permitiendo:

- Nombres de clases claros y semánticos
- Reutilización de componentes
- Mayor mantenibilidad del código

**Ejemplos:**
- `.place-card`
- `.place-card__title`
- `.place-card--clear`

Bootstrap se utiliza en conjunto con BEM para el layout y componentes base.

---

## 🛠️ SASS y estructura de estilos

Los estilos fueron refactorizados utilizando **SASS (SCSS)**, con una estructura modular:

```
assets/
├── scss/
│   ├── base/
        └── _mixins.scss         // Reutiliza efecto hover en las cards
│   │   └── _variables.scss      // Variables de colores, fuentes y breakpoints
│   ├── layout/
│   │   └── _layout.scss         // Estilos globales y estructura base
│   ├── components/
│   │   ├── _navbar.scss         // Navbar
│   │   ├── _place-card.scss     // Cards de clima (BEM)
│   │   └── _footer.scss         // Footer
│   └── main.scss                // Importa todos los parciales
│
├── css/
│   └── main.css                 // CSS compilado
```

### Características utilizadas:
- Variables (`$colors`, `$fonts`, `$breakpoints`)
- Anidamiento
- Mixins reutilizables
- Media queries

---

## 📱 Responsividad y layout

- Se utilizó el **sistema de grillas de Bootstrap** (`col-12`, `col-md-6`, `col-lg-4`).
- En pantallas pequeñas, las cards se muestran en una sola columna.
- En pantallas grandes, se organizan en múltiples columnas con espaciado consistente.

---

## ♿ Accesibilidad y experiencia de usuario

- Se mejoró el **contraste de colores** según el tipo de clima para asegurar una correcta legibilidad.
- Se incorporó un **botón de navegación** en la vista de detalle para facilitar el retorno al inicio. (<- Volver a Ciudades)

---

## 🔧 Tecnologías utilizadas

- HTML5
- CSS3 / SASS (SCSS)
- JavaScript (Vanilla)
- Bootstrap 5
- API OpenWeatherMap

---

## 📂 Repositorio

🔗 **Repositorio GitHub:** *(https://github.com/DayneVidal88/weather-frontend-m3)*

🔗 https://daynevidal88.github.io/weather-frontend-m3/index.html

---

## 👤 Autor

**Dayne Vidal**  
Portafolio Módulo 3-Bootcamp Desarrollo de Aplicaciones

---


