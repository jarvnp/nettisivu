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
window.addEventListener('load', function() {
    loadHighResImage(document.getElementById('quadcopter-old'), '/img/quadcopter-old.jpg')
})
window.addEventListener('load', function() {
    loadHighResImage(document.getElementById('globe'), '/img/globe.jpg')
})
window.addEventListener('load', function() {
    loadHighResImage(document.getElementById('printer'), '/img/printer.jpg')
})
window.addEventListener('load', function() {
    loadHighResImage(document.getElementById('boat'), '/img/boat.JPG')
})
window.addEventListener('load', function() {
    loadHighResImage(document.getElementById('printer-electronics'), '/img/printer-electronics.JPG')
})

function loadHighResImage(elem, highResUrl) {
    let image = new Image()
    image.addEventListener('load', () => elem.src = highResUrl)
    image.src = highResUrl
}
