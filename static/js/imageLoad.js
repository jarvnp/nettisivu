window.addEventListener('load', function() {
    loadHighResImage(document.getElementById('Led-kuutio-inside1'), '/img/Led-kuutio-inside1.jpg')
})
window.addEventListener('load', function() {
    loadHighResImage(document.getElementById('Led-kuutio-inside2'), '/img/Led-kuutio-inside2.jpg')
})
window.addEventListener('load', function() {
    loadHighResImage(document.getElementById('Led-kuutio'), '/img/Led-kuutio.jpg')
})
window.addEventListener('load', function() {
    loadHighResImage(document.getElementById('quadcopter-new'), '/img/quadcopter-new.jpg')
})

function loadHighResImage(elem, highResUrl) {
    let image = new Image()
    image.addEventListener('load', () => elem.src = highResUrl)
    image.src = highResUrl
}
