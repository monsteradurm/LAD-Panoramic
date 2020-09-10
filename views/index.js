var PanoViewer = eg.view360.PanoViewer;
var container = document.getElementById("myPanoViewer");

var the_url = "images/MF_Equilateral.jpg"

var panoViewer = new PanoViewer(container,{
    projectionType: "equirectangular",
    image: the_url
});


PanoControls.init(container, panoViewer);
PanoControls.showLoading();

// create file input
var fileInput = document.getElementById("the-file-input");
fileInput.addEventListener("change", function (e) {
    PanoControls.showLoading();

    // generate a new FileReader object
    var reader = new FileReader();

    // inject an image with the src url
    reader.onload = function (event) {
        the_url = event.target.result;

        panoViewer.setImage(the_url, {projectionType: "equirectangular"});
        panoViewer.updateViewportDimensions();
    }

    // when the file is read it triggers the onload event above.
    reader.readAsDataURL(this.files[0]);
});