var socket = io();


var socket = io();

socket.on('connect', function() {
    console.log('conectado al servidor');
});

// escuchar sucesos
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// emits son para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Jim',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Resouesta server: ', resp);
});

// Escuchar información

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});