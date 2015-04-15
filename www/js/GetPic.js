/****  Picking a Photo  ****/

function getPhoto(source) {
	navigator.camera.getPicture(onPhotoURISuccess, onFail, { 
	quality: 50,
	destinationType: navigator.camera.DestinationType.FILE_URI,
	correctOrientation: true,
	sourceType: source });
}

function onPhotoURISuccess(imageURI) {
	var largeImage = document.getElementById('largeImage');
	largeImage.style.display = 'block';
	largeImage.src = imageURI;
	window.resolveLocalFileSystemURL(imageURI, function(entry){
                var sharePath = entry.toURL();
                window.localStorage.setItem("sharePath", sharePath);
    }, function(e){
       });
}

function onFail(message) {
	//alert('Failed because: ' + message);
	console.log('Failed because: ' + message);
}

/****  taking a photo ****/

function capturePhoto() {
	var options = { 
            quality : 100,
            correctOrientation: true,
            saveToPhotoAlbum: true
    };

    navigator.camera.getPicture(onPhotoURISuccess, onFail, options);
}

function showAlert() {
        navigator.notification.alert(
            'The appearance of hyperlinks does not constitute endorsement by the U.S. Air Force of this website or the information, products or services contained therein. For other than authorized activities such as military exchanges and Morale, Welfare and Recreation sites, the U.S. Air Force does not exercise any editorial control over the information you may find at these locations. Such links are provided consistent with the stated purpose of this U.S. Air Force website.',
            callBack,
            'Disclaimer',
            'OK'
        );
}

function callBack() {
	console.log('ok');
}