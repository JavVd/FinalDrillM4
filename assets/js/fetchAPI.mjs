async function fetchStarWars () {
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
}


function arregloPersonajes() {
  let respuesta = fetchStarWars()
  
  let dataPersonajes = respuesta.results.map(personajes => personajes.name)
}



export { fetchStarWars, arregloPersonajes }