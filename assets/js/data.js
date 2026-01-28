// ===============================
// MODELO DE DATOS
// ===============================

const lugares = [
  {
    id: 1,
    nombre: "Santiago",
    tempActual: 24,
    estadoActual: "Soleado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 15, max: 25, estado: "Soleado" },
      { dia: "Martes", min: 14, max: 23, estado: "Soleado" },
      { dia: "Miércoles", min: 13, max: 22, estado: "Nublado" },
      { dia: "Jueves", min: 14, max: 24, estado: "Soleado" },
      { dia: "Viernes", min: 16, max: 26, estado: "Soleado" }
    ]
  },
  {
    id: 2,
    nombre: "Quilpué",
    tempActual: 21,
    estadoActual: "Soleado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 16, max: 19, estado: "Nublado" },
      { dia: "Martes", min: 15, max: 17, estado: "Nublado" },
      { dia: "Miércoles", min: 10, max: 19, estado: "Nublado" },
      { dia: "Jueves", min: 15, max: 20, estado: "Nublado" },
      { dia: "Viernes", min: 16, max: 24, estado: "Soleado" }
    ]
  },
  {
    id: 3,
    nombre: "Valparaíso",
    tempActual: 20,
    estadoActual: "Nublado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 16, max: 21, estado: "Nublado" },
      { dia: "Martes", min: 15, max: 20, estado: "Nublado" },
      { dia: "Miércoles", min: 14, max: 19, estado: "Lluvioso" },
      { dia: "Jueves", min: 15, max: 20, estado: "Nublado" },
      { dia: "Viernes", min: 16, max: 22, estado: "Soleado" }
    ]
  },
  {
    id: 4,
    nombre: "Buenos Aires",
    tempActual: 26,
    estadoActual: "Soleado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 18, max: 27, estado: "Soleado" },
      { dia: "Martes", min: 19, max: 28, estado: "Soleado" },
      { dia: "Miércoles", min: 20, max: 29, estado: "Soleado" },
      { dia: "Jueves", min: 19, max: 26, estado: "Nublado" },
      { dia: "Viernes", min: 18, max: 25, estado: "Lluvioso" }
    ]
  },
  {
    id: 5,
    nombre: "Londres",
    tempActual: 16,
    estadoActual: "Lluvioso",
    pronosticoSemanal: [
      { dia: "Lunes", min: 10, max: 16, estado: "Lluvioso" },
      { dia: "Martes", min: 11, max: 17, estado: "Nublado" },
      { dia: "Miércoles", min: 9, max: 15, estado: "Lluvioso" },
      { dia: "Jueves", min: 10, max: 16, estado: "Lluvioso" },
      { dia: "Viernes", min: 12, max: 18, estado: "Nublado" }
    ]
  },
  {
    id: 6,
    nombre: "Tokio",
    tempActual: 28,
    estadoActual: "Soleado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 22, max: 30, estado: "Soleado" },
      { dia: "Martes", min: 23, max: 31, estado: "Soleado" },
      { dia: "Miércoles", min: 21, max: 29, estado: "Nublado" },
      { dia: "Jueves", min: 22, max: 30, estado: "Soleado" },
      { dia: "Viernes", min: 24, max: 32, estado: "Soleado" }
    ]
  }
];
