function cardPersonaje(data) {
  return `<div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
            <div class="timeline-icon"><i class="fa fa-address-card" aria-hidden="true"></i></div>
            <div class="timeline-text">
              <h6>${data.name}</h6>
              <p>${data.mass}</p>
              <p>${data.height}</p>
            </div>
          </div>`
}

/* function renderizarCartas(cartas, app) {
  cartas.forEach(carta => {
    app.innerHTML += carta
  })
} */


/* function* renderizarCartas() {
  let cartaPersonajes = document.getElementById('app')
  while(true) {
    yield cartaPersonajes.addEventListener('click', function() {
      console.log('Funcion')
      // cartaPokemon.parentNode.innerHTML += generadorCarta //sobre escribe el HTML
      cardPersonajes.parentNode.insertAdjacentHTML("beforeend", cardPersonaje)
    })
  }
}
 */


function* renderizarCartas(personajes, container) {
  for (let personaje of personajes) {
    yield container.insertAdjacentHTML("beforeend", cardPersonaje(personaje));
  }
}




export { cardPersonaje, renderizarCartas }