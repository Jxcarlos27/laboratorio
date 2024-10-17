function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
  
    if (nombre === '' || email === '' || mensaje === '') {
      alert('Por favor, completa todos los campos.');
      return false;
    }
  
    // Aquí puedes agregar más validaciones, como verificar el formato del correo electrónico
  
    return true;
  }