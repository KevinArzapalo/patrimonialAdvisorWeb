// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_c42lhu3';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Solicitar información';
      Swal.fire(
        'Solicitud enviada con éxito',
        'Estaré en contacto contigo muy pronto.',
        'success'
      )
      document.getElementById('nombre').value="";
      document.getElementById('apellido').value="";
      document.getElementById('telefono').value="";
      document.getElementById('correo').value="";
      document.getElementById('comentarios').value="";
      //alert('Sent!');
    }, (err) => {
      btn.value = 'Solicitar información';
      alert(JSON.stringify(err));
    });
});
