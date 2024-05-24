function confirmarCierre(event) {
    // Prevenir el cierre inmediato de la ventana
    event.preventDefault();
  
    // Crear el HTML del formulario
    var formularioHTML = `
      <div id="modalOpinion" class="modal">
        <div class="modal-contenido">
          <h2>¡Gracias por tu visita!</h2>
          <p>Antes de irte, nos gustaría saber tu opinión sobre la página web.</p>
          <form id="formularioOpinion">
            <label for="calificacion">¿Cómo calificas tu experiencia? (1-5 estrellas):</label>
            <input type="number" id="calificacion" name="calificacion" min="1" max="5" required>
            <br>
            <label for="comentario">¿Tienes algún comentario o sugerencia para mejorar?:</label>
            <textarea id="comentario" name="comentario"></textarea>
            <br>
            <button type="submit">Enviar opinión</button>
          </form>
        </div>
      </div>
    `;
  
    // Agregar el HTML al body
    var body = document.getElementsByTagName('body')[0];
    body.innerHTML += formularioHTML;
  
    // Mostrar el modal
    var modal = document.getElementById('modalOpinion');
    modal.style.display = 'block';
  
    // Agregar evento submit al formulario
    var formulario = document.getElementById('formularioOpinion');
    formulario.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Recolectar datos del formulario
      var calificacion = document.getElementById('calificacion').value;
      var comentario = document.getElementById('comentario').value;
  
      // Enviar los datos al servidor (reemplazar con tu lógica)
      console.log("Calificación:", calificacion);
      console.log("Comentario:", comentario);
  
      // Cerrar el modal y permitir el cierre de la ventana
      modal.style.display = 'none';
      event.target.submit(); // Permite el cierre de la ventana
    });
  }
  
  // Agregar evento antes de cerrar la ventana
  window.addEventListener('beforeunload', confirmarCierre);
  