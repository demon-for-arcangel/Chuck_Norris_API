import { ChuckNorris } from './clases.js';

async function generarNuevaFrase() {
  const categoria = document.getElementById('categoria').value;
  const fraseContainer = document.getElementById('frase');
  fraseContainer.innerHTML = '';

  const frase = await ChuckNorris.getFrase(categoria);

  const fraseDiv = document.createElement('div');
  fraseDiv.textContent = frase;
  fraseContainer.appendChild(fraseDiv);
}

window.generarNuevaFrase = generarNuevaFrase;

// Añadir una frase a favoritos
function agregarFavorita() {
  // Obtener la frase del input
  let fraseDiv = document.getElementById('frase');
  let frase = fraseDiv.textContent

  // Verificar si la frase es válida
  if (frase !== "") {
    // Obtener las frases favoritas actuales
    let frasesFavoritas = localStorage.getItem('frasesFavoritas');
    if (frasesFavoritas) {
      frasesFavoritas = JSON.parse(frasesFavoritas);
    } else {
      frasesFavoritas = [];
    }

    // Añadir la nueva frase a favoritos
    frasesFavoritas.push(frase);

    // Guardar las frases favoritas en localStorage
    localStorage.setItem('frasesFavoritas', JSON.stringify(frasesFavoritas));
  } else {
    // Mostrar un mensaje de error o tomar alguna acción si la frase es inválida
    console.error("La frase es inválida.");
  }
}

window.agregarFavorita = agregarFavorita

// Obtener la categoría de la URL y cargar una frase al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const categoria = new URLSearchParams(window.location.search).get('categoria');
  document.getElementById('categoria').value = categoria;

  if (categoria) {
    generarNuevaFrase();
  }

  const botonVerFavoritos = document.getElementById('verFavoritas')
  botonVerFavoritos.addEventListener('click', () =>{
    window.location.href = 'favoritos.html'
  })
});
