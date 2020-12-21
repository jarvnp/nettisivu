function imageLoader(id, image) {
  if(document.getElementById(id) !== null){
    window.addEventListener('load', function() {
        loadHighResImage(document.getElementById(id), image)
    })
  }
}

var elements = document.getElementsByTagName("img");
for(var i = 0; i< elements.length; i++){
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
    var elementInfo = elements[i].outerHTML;
    var size = elementInfo.substring(elementInfo.search("width=")+7,elementInfo.search("px"))

    if(elements[i].width > parseInt(size)+150){
      elements[i].style.width = size+ "px";
    }
    if((elements[i].parentElement.offsetWidth - elements[i].width) < 150){
      elements[i].style.width = "100%";
    }
  }
}
