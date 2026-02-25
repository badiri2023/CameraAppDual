document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Cordova está listo');
    document.getElementById('btnFoto').addEventListener('click', tomarFoto);
}

function tomarFoto() {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,     
        correctOrientation: true                         
    });
}

function onSuccess(imageData) {
    var image = document.getElementById('miImagen');
    image.style.display = 'block';
    image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
    alert('Error o cancelado: ' + message);
}