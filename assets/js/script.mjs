import { fetchStarWars2 } from "./fetchAPI.mjs";
import { cardPersonaje, renderizarCartas } from "./cardsPersonajes.mjs";


/* document.addEventListener("DOMContentLoaded", async () => {
  try {
    const app = document.getElementById('app')
    // renderizarCartas(HTMLPersonajes, app)
    
    // [{}, {}, {}]
    let dataPersonaje = await fetchStarWars2()
    
    let nuevaCard = dataPersonaje.map(function (personaje) {
      return cardPersonaje(personaje)
    })
    
    renderizarCartas(nuevaCard, app)
    console.log(nuevaCard)

  } catch (error) {
    console.error(error)
  }
}) */


document.addEventListener("DOMContentLoaded", async () => {
  try {
    const app = document.getElementById('app');
    
    // Suponiendo que fetchStarWars2() devuelve una lista de personajes [{name, mass, height}, ...]
    let dataPersonaje = await fetchStarWars2(); 

    // Obtener la función generadora con los personajes y el contenedor
    const generadorCartas = renderizarCartas(dataPersonaje, app);

    // Evento de click en la primera card para generar nuevas cards
    app.addEventListener('click', function() {
      generadorCartas.next();  // Genera la siguiente card
    });

  } catch (error) {
    console.error(error);
  }
});