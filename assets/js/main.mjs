import { fetchPersonById } from "./fetchSwapi.mjs";
import { createCard } from "./generadorCard.mjs";

// Mapeo para seguir el ID actual de cada sección
const sectionRanges = {
  "1,5": { currentId: 1, endId: 5 },
  "6,10": { currentId: 6, endId: 10 },
  "11,15": { currentId: 11, endId: 15 },
};

// Función para manejar el evento del mouse
async function handleSectionHover(event) {
  const target = event.currentTarget;
  const range = target.dataset.range;
  const rangeData = sectionRanges[range];

  // Evitar exceder el rango definido para cada sección
  if (rangeData.currentId > rangeData.endId) return;

  try {
    // Obtener datos del personaje correspondiente al ID actual
    const person = await fetchPersonById(rangeData.currentId);

    // Generar una nueva card
    const newCard = createCard(person);

    // Insertar la card a la derecha de la card inicial
    target.parentElement.appendChild(newCard);

    // Incrementar el ID actual para la próxima interacción
    rangeData.currentId++;
  } catch (err) {
    console.error("Error al generar la card:", err);
  }
}

// Añadir eventos a las secciones con data-card-generator
document.querySelectorAll("[data-card-generator]").forEach((section) => {
  section.addEventListener("mouseenter", handleSectionHover);
});