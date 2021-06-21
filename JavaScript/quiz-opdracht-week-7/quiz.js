// https://opentdb.com/api.php?amount=6&category=19&difficulty=easy&type=multiple

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

var mathProblemText = document.createElement('h1')
mathProblemText.innerHTML = 'Math Problem'
div.append(mathProblemText)
mathProblemText.classList.add('mathProblemText')

// mathProblemText.innerText('Math Problem')
// div.appendChild(mathProblemText)

//START VRAAG CONTAINER========================================================

var vraagContainer = document.createElement('h3')
vraagContainer.classList.add('vraag')

div.appendChild(vraagContainer)

// EINDE VRAAG CONTAINER================================================

// START ANTWOORDEN CONTAINER ==========================================
var quizContainer = document.createElement('div')

let ul = document.createElement('ul')
div.appendChild(ul)
let vraag1Antwoorden = ['1.  170', '2.  150', '3.  200', '4.  250', '5.  300']

for (let i = 0; i < 5; i++) {
  {
    let li = document.createElement('li')
    li.className = 'antwoord'

    var a = document.createElement('a')
    
    
    a.innerHTML = vraag1Antwoorden[i];

    li.appendChild(a)
    ul.appendChild(li)
  }
}
ul.classList.add('antwoorden')
// EINDE ANTWOORDEN CONTAINER====================================================

// START BUTTONS==========================================================

var vorigeButton = document.createElement('button')
vorigeButton.innerHTML = 'Vorige'
div.appendChild(vorigeButton)
// vorigeButton.setAttribute('vorigeButton')
vorigeButton.classList.add('vorigeButton')

var volgendeButton = document.createElement('button')
volgendeButton.innerHTML = 'Volgende'
div.append(volgendeButton)
// volgendeButton.classList.add('volgendeBtn')
volgendeButton.classList.add('volgendeButton')

// EINDE BUTTONS===============================================================

// let vraag1Antwoorden = [
//   '1.  170',
//   '2.  150',
//   '3.  200',
//   '4.  250',
//   '5.  300',
// ]
for (let i = 0; i < vraag1Antwoorden.length; i++) {
  const element = vraag1Antwoorden[i]
  console.log(element)
  a.innerHTML = element;
}



let randomQuestionNumber = Math.floor(Math.random() * 6 + 1)

console.log(randomQuestionNumber)

switch (randomQuestionNumber) {
  case 1:
    var question = 'What is 120 + 50'
    vraagContainer.innerText = question
     

    break
  case 2:
    var question = 'What is 20 + 30'
    vraagContainer.innerText = question
    a.innerHTML = vraag1Antwoorden[0]

    break
  case 3:
    var question = 'What is 560 + 70'
    vraagContainer.innerText = question
    a.innerHTML = vraag1Antwoorden[0]

    break
  case 4:
    var question = 'What is 220 + 80'
    vraagContainer.innerText = question
    a.innerHTML = vraag1Antwoorden[0]

    break
  case 5:
    var question = 'What is 50 + 30'
    vraagContainer.innerText = question
    a.innerHTML = vraag1Antwoorden[0]

    break
  case 6:
    var question = 'What is 20 + 30'
    vraagContainer.innerText = question
    a.innerHTML = vraag1Antwoorden[0]

    break

  default:
    break
}

// manipulate elements

// styling elements via addClasses

// 'element.classList.add("my-class");'

// element.classList.remove('my-class')
