function imageLoader(id, image) {
  if(document.getElementById(id) !== null){
    window.addEventListener('load', function() {
        loadHighResImage(document.getElementById(id), image)
    })
  }
}

imageLoader('profile-pic', '/img/profile-pic.jpg');
imageLoader('Led-kuutio-inside1', '/img/Led-kuutio-inside1.jpg');
imageLoader('Led-kuutio-inside2', '/img/Led-kuutio-inside2.jpg');
imageLoader('Led-kuutio', '/img/Led-kuutio.jpg');
imageLoader('quadcopter-new', '/img/quadcopter-new.jpg');
imageLoader('quadcopter-old', '/img/quadcopter-old.jpg');
imageLoader('globe', '/img/globe.jpg');
imageLoader('printer', '/img/printer.jpg');
imageLoader('boat','/img/boat.JPG');
imageLoader('printer-electronics', '/img/printer-electronics.JPG')
imageLoader('radio', '/img/radio.jpg')
imageLoader('radio-inside', '/img/radio-inside.jpg')
imageLoader('radio-inside2', '/img/radio-inside2.jpg')
imageLoader('bike-alarm', '/img/bike-alarm.jpg')
imageLoader('bike-alarm-inside', '/img/bike-alarm-inside.jpg')
imageLoader('bike-alarm-old-module', '/img/bike-alarm-old-module.jpg')
imageLoader('garage-remote', '/img/garage-remote.jpg')


function loadHighResImage(elem, highResUrl) {
    let image = new Image()
    image.addEventListener('load', () => elem.src = highResUrl)
    image.src = highResUrl
}
