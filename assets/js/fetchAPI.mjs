/* async function fetchStarWars () {
  try {
      const response = await fetch ('https://swapi.dev/api/people/')

      if(!response.ok){
          throw new Error('No se pudo conectar a la API')
      }

      const data = await response.json()
      return data
  } catch (error) {
      console.error(error);
      
  }
} */


async function fetchStarWars2() {
  try {
    const response = await fetch ('https://swapi.dev/api/people/')

    if(!response.ok) {
      throw new Error('No se pudo conectar a la API')
    }
    const data = await response.json()
    const personajesData = data.results.map(personajes => ({
      name: personajes.name,
      height: personajes.height,
      mass: personajes.mass
    }));

    return personajesData
  } catch (error) {
    console.error(error)
  }
}

export { fetchStarWars2 }