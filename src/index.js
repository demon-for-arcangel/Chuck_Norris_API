import { ChuckNorris } from './clases.js';

async function cargarCategorias() {
  const categorias = await ChuckNorris.getCategorias();
  const tabla = document.getElementById('categorias');

  categorias.forEach((categoria) => {
    const fila = document.createElement('tr');
    const celda = document.createElement('td')
    const enlace = document.createElement('a')
    enlace.href = `frases.html?categoria=${categoria}`
    enlace.textContent = categoria
    celda.appendChild(enlace)
    fila.appendChild(celda)
    tabla.appendChild(fila)
  });
}

document.addEventListener('DOMContentLoaded', () => {
  cargarCategorias();

  const botonFraseAleatoria = document.getElementById('fraseAleatoria')
  botonFraseAleatoria.addEventListener('click', async () => {
    const categorias = await ChuckNorris.getCategorias();
    const categoriaAleatoria = categorias[Math.floor(Math.random() * categorias.length)];
    window.location.href = `frases.html?categoria=${categoriaAleatoria}`;
  })

  const botonVerFavoritos = document.getElementById('verFavoritas')
  botonVerFavoritos.addEventListener('click', () =>{
    window.location.href = 'favoritos.html'
  })
})

