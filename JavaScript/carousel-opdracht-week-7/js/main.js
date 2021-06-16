// 'js/mian.js'

// nodelist img element opgeslagen
var slider_img = document.querySelector('.slider-afbeelding')
console.log(slider_img)

// array aangemaakt met verwijzingen naar de afbeeldingen
var images = ['slide-1.jpg', 'slide-2.jpg', 'slide-3.jpg']

// huidige waarde van de afbeelding
var i = 0
console.log(images)

// vorige afbeelding recursieve functie  die gekoppeld is met de '<' button via de onclick event waarbij de setImg word aangeroepen
function prevButton() {
  if (i <= 0) i = images.length
  i--
  return setImg()
}
// volgende afbeelding recursieve functie die gekoppeld is met de '>' button via de onclick event waarbij de setImg word aangeroepen

function nextButton() {
  if (i >= images.length - 1) i = -1
  i++
  return setImg()
}

//
function setImg() {
  return slider_img.setAttribute('src', 'images/' + images[i])
}
