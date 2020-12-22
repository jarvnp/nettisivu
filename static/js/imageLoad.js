function imageLoader(id, image) {
  if(document.getElementById(id) !== null){
    window.addEventListener('load', function() {
        loadHighResImage(document.getElementById(id), image)
    })
  }
}

var elements = document.getElementsByTagName("img");
var widths = [];
for(var i = 0; i< elements.length; i++){
    widths[i] = elements[i].style.width;
    imageLoader(elements[i].id, elements[i].src.replace("-small",""));
}

reSizeImages();
window.addEventListener("resize", reSizeImages);

function loadHighResImage(elem, highResUrl) {
    let image = new Image()
    image.addEventListener('load', () => elem.src = highResUrl)
    image.src = highResUrl
}


function reSizeImages(){
  var elements = document.getElementsByTagName("img");
  for(var i = 0; i< elements.length; i++){
    if(elements[i].width > parseInt(widths[i].replace("px",""))+150){
      elements[i].style.width = widths[i];
    }
    if((elements[i].parentElement.offsetWidth - elements[i].width) < 150){
      elements[i].style.width = "100%";
    }
  }
}
