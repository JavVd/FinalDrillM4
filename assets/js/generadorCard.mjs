/* // Función para generar una tarjeta HTML con los datos de un personaje
function createCard(person) {
  const card = document.createElement("div");
  card.className = "col-3"; // Tamaño de columna para adaptarse al diseño
  card.innerHTML = `
    <div class="card shadow rounded-3">
      <div class="card-body">
        <h5 class="card-title fw-bold">${person.name}</h5>
          <span class="circle green"></span>
        <p class="card-text">Estatura: ${person.height} cm</p>
        <p class="card-text">Peso: ${person.mass} kg</p>
      </div>
    </div>
  `;
  return card;
}


export { createCard };
 */

// Función para determinar el color del círculo según el rango
function getCircleColor(id) {
  if (id >= 1 && id <= 5) {
    return "red";
  } else if (id >= 6 && id <= 10) {
    return "green";
  } else if (id >= 11 && id <= 15) {
    return "blue";
  }
  return ""; // Default (por si el ID está fuera de los rangos esperados)
}

// Función para generar una tarjeta HTML con los datos de un personaje
function createCard(person, id) {
  const circleColor = getCircleColor(id); // Determinar el color del círculo

  const card = document.createElement("div");
  card.className = "col-3"; // Clases Bootstrap para columnas

  card.innerHTML = `
    <div class="card shadow rounded-3">
      <div class="card-body">
        <h5 class="card-title fw-bold">${person.name}</h5>
        <span class="circle ${circleColor}"></span>
        <p class="card-text">Estatura: ${person.height} cm</p>
        <p class="card-text">Peso: ${person.mass} kg</p>
      </div>
    </div>
  `;

  return card;
}

export { createCard };
