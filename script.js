function resizeImage() {
    var input = document.getElementById('imageInput');
    var width = document.getElementById('imageWidth').value;
    var height = document.getElementById('imageHeight').value;

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var img = new Image();
            img.src = e.target.result;

            img.onload = function () {
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');

                canvas.width = width;
                canvas.height = height;

                // Perform image resizing operation here

                ctx.drawImage(img, 0, 0, width, height);
                
                var dataURL = canvas.toDataURL('image/jpeg');
                document.getElementById('imagePreview').innerHTML = '<img src="' + dataURL + '">';
                document.getElementById('downloadLink').href = dataURL;
                document.getElementById('downloadLink').style.display = 'block';
            }
        }

        reader.readAsDataURL(input.files[0]);
    }
}
