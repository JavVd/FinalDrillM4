// Función para obtener la lista completa de personas (si es necesario)
async function fetchSwapi() {
  try {
    const response = await fetch('https://swapi.py4e.com/api/people/');
    if (!response.ok) {
      throw new Error('No se pudo conectar a la API');
    }
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error(err);
  }
}

// Función para obtener información de una persona específica por ID
async function fetchPersonById(id) {
  try {
    const response = await fetch(`https://swapi.py4e.com/api/people/${id}/`);
    if (!response.ok) {
      throw new Error('No se pudo conectar a la API');
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export { fetchSwapi, fetchPersonById };
