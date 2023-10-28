// Obtener las frases favoritas
function obtenerFavoritos() {
    let favoritos = localStorage.getItem('frasesFavoritas');
    if (favoritos) {
      return JSON.parse(favoritos);
    } else {
      return [];
    }
  }
  
  function mostrarFrasesFavoritas() {
    const listaFavoritas = document.getElementById('frasesFavoritas');
    listaFavoritas.innerHTML = '';
  
    // Usar la función obtenerFavoritos para obtener las frases favoritas
    const frasesFavoritas = obtenerFavoritos();
  
    frasesFavoritas.forEach((frase, index) => {
      const itemLista = document.createElement('li');
      itemLista.textContent = frase;
      listaFavoritas.appendChild(itemLista);
  
      // Crear un botón para eliminar la frase favorita
      const botonEliminar = document.createElement('button');
      botonEliminar.textContent = 'Eliminar';
      botonEliminar.addEventListener('click', () => {
        eliminarFraseFavorita(index); // Llamar a la función eliminarFraseFavorita pasando el índice
      });
      itemLista.appendChild(botonEliminar);
    });
  }
  
  function eliminarFraseFavorita(index) {
    // Obtener las frases favoritas
    const frasesFavoritas = obtenerFavoritos();
  
    // Eliminar la frase favorita en el índice especificado
    frasesFavoritas.splice(index, 1);
  
    // Guardar las frases favoritas actualizadas en localStorage
    localStorage.setItem('frasesFavoritas', JSON.stringify(frasesFavoritas));
  
    // Volver a mostrar las frases favoritas actualizadas
    mostrarFrasesFavoritas();
  }
  
  document.addEventListener('DOMContentLoaded', (event) => {
    mostrarFrasesFavoritas();
  });