// create elements

let divContainer = document.querySelector('button')
// divContainer.

var button = document.createElement('button')
button.innerHTML = 'Start'

var div = document.getElementsByTagName('div')[0]
div.appendChild(button)

button.addEventListener('click', function () {
  div.classList.add('hide')
})

// manipulate elements

// styling elements via addClasses

// 'element.classList.add("my-class");'
// element.classList.remove('my-class')
