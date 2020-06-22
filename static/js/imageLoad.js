window.addEventListener('load', function() {
    loadHighResImage(document.getElementById('Led-kuutio-inside1'), '/img/Led-kuutio-inside1.jpg')
})

function loadHighResImage(elem, highResUrl) {
    let image = new Image()
    image.addEventListener('load', () => elem.src = highResUrl)
    image.src = highResUrl
}
