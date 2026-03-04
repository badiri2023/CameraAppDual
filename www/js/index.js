document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    document.getElementById("btnTake").addEventListener("click", tomarFoto);
    document.getElementById("btnRepeat").addEventListener("click", cerrarDialogo);
}

function tomarFoto() {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI, 
        sourceType: Camera.PictureSourceType.CAMERA,
        correctOrientation: true,
        saveToPhotoAlbum: false
    });
}

function onSuccess(imageURI) {

    window.resolveLocalFileSystemURL(imageURI, function(entry) {
        
        let imagenMuestra = document.getElementById("previewImage");
        imagenMuestra.src = entry.toURL(); 
        
        // Mostramos la fhoto
        document.getElementById("dialog").classList.remove("dialog-hidden");
        
    }, function(error) {
        alert("ERRO PROCESING THE PHOTO");
    });
}

function onFail(message) {
    let msg = message.toLowerCase();
    if (msg.includes("cancelled") || msg.includes("no image")) {
        return; 
    }
    alert("Camera Error: " + message);
}

function cerrarDialogo() {
    document.getElementById("dialog").classList.add("dialog-hidden");
}