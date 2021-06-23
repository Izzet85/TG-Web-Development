// https://opentdb.com/api.php?amount=6&category=19&difficulty=easy&type=multiple

// create elements

let divContainer = document.querySelector('button')
// divContainer.

var button = document.createElement('button')
button.innerHTML = 'Start'

var div = document.getElementsByTagName('div')[0]
document.body.appendChild(button)

button.addEventListener('click', function () {
  div.style.display = 'block'
  showQuestion()
  div.classList.add()
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
let questionNumber = 1

volgendeButton.onclick = function () {
  console.log(questionNumber)
  questionNumber++
  showQuestion()
}
vorigeButton.onclick = function () {
  console.log(questionNumber)
  questionNumber--
  showQuestion()
}
// EINDE BUTTONS===============================================================

// let vraag1Antwoorden = [
//   '1.  170',
//   '2.  150',
//   '3.  200',
//   '4.  250',
//   '5.  300',
// ]
// for (let i = 0; i < vraag1Antwoorden.length; i++) {
//   const element = vraag1Antwoorden[i]
//   console.log(element)
//   a.innerHTML = element
// }
// let questionNumber = 2

// let = questionNumber = volgendeButton.addEventListener('click', volgende)
// function volgende() {
//   return (questionNumber = questionNumber += 1)
// questionNumber +=1;
// }
//  questionNumber = vorigeButton.addEventListener('click', vorige)
//        function vorige() {
//   return (questionNumber = questionNumber += 1)
// questionNumber +=1;
// }

function showQuestion() {
  switch (questionNumber) {
    case 1:
      var question = 'What is 120 + 50'
      vraagContainer.innerText = question

      let ul = document.createElement('ul')
      div.appendChild(ul)
      let vraag1Antwoorden = [
        '1. ' + ' ' + '  170',
        '2. ' + ' ' + '150',
        '3.' + ' ' + ' 200',
        '4. ' + ' ' + '250',
        '5. ' + '   ' + ' 300',
      ]

      for (let i = 0; i < 5; i++) {
        {
          let li = document.createElement('li')
          li.className = 'antwoord'

          var a = document.createElement('a')

          a.innerHTML = vraag1Antwoorden[i]

          li.appendChild(a)
          ul.appendChild(li)
        }
      }
      ul.classList.add('antwoorden')
      div = ''

      break
    case 2:
      let vraag2Antwoorden
      var question2 = 'What is 500 -  150'
      vraagContainer.innerText = question2
      // vraagContainer.innerText = question2
      let ul2 = document.createElement('ul')
      div.appendChild(ul2)
      vraag2Antwoorden = [
        '1. ' + ' ' + '  370',
        '2. ' + ' ' + '510',
        '3.' + ' ' + ' 220',
        '4. ' + ' ' + '250',
        '5. ' + '   ' + ' 350',
      ]

      for (let i = 0; i < 5; i++) {
        {
          let li = document.createElement('li')
          li.className = 'antwoord'

          var a = document.createElement('a')

          a.innerHTML = vraag2Antwoorden[i]

          li.appendChild(a)
          ul2.appendChild(li)
        }
      }
      ul2.classList.add('antwoorden')

      break
    case 3:
      let vraag3Antwoorden
      var question3 = 'What is 400 -160'
      vraagContainer.innerText = question3
      // vraagContainer.innerText = question2
      let ul3 = document.createElement('ul')
      div.appendChild(ul3)
      vraag3Antwoorden = [
        '1. ' + ' ' + '  170',
        '2. ' + ' ' + '150',
        '3.' + ' ' + ' 200',
        '4. ' + ' ' + '240',
        '5. ' + '   ' + ' 300',
      ]

      for (let i = 0; i < 5; i++) {
        {
          let li = document.createElement('li')
          li.className = 'antwoord'

          var a = document.createElement('a')

          a.innerHTML = vraag3Antwoorden[i]

          li.appendChild(a)
          ul3.appendChild(li)
        }
      }
      ul3.classList.add('antwoorden')

      break
    case 4:
      let vraag4Antwoorden
      var question4 = 'What is 560 + 80'
      vraagContainer.innerText = question4
      // vraagContainer.innerText = question2
      let ul4 = document.createElement('ul')
      div.appendChild(ul4)
      vraag4Antwoorden = [
        '1. ' + ' ' + '  170',
        '2. ' + ' ' + '650',
        '3.' + ' ' + ' 400',
        '4. ' + ' ' + '640',
        '5. ' + '   ' + ' 570',
      ]

      for (let i = 0; i < 5; i++) {
        {
          let li = document.createElement('li')
          li.className = 'antwoord'

          var a = document.createElement('a')

          a.innerHTML = vraag4Antwoorden[i]

          li.appendChild(a)
          ul4.appendChild(li)
        }
      }
      ul4.classList.add('antwoorden')

      break
    case 5:
      let vraag5Antwoorden
      var question5 = 'What is 190 + 30'
      vraagContainer.innerText = question5
      // vraagContainer.innerText = question2
      let ul5 = document.createElement('ul')
      div.appendChild(ul5)
      vraag5Antwoorden = [
        '1. ' + ' ' + '  270',
        '2. ' + ' ' + '190',
        '3.' + ' ' + ' 200',
        '4. ' + ' ' + '220',
        '5. ' + '   ' + ' 300',
      ]

      for (let i = 0; i < 5; i++) {
        {
          let li = document.createElement('li')
          li.className = 'antwoord'

          var a = document.createElement('a')

          a.innerHTML = vraag5Antwoorden[i]

          li.appendChild(a)
          ul5.appendChild(li)
        }
      }
      ul5.classList.add('antwoorden')

      break
    case 6:
      let vraag6Antwoorden
      var question6 = 'What is 300 + 230'
      vraagContainer.innerText = question6
      // vraagContainer.innerText = question2
      let ul6 = document.createElement('ul')
      div.appendChild(ul6)
      vraag6Antwoorden = [
        '1. ' + ' ' + '  370',
        '2. ' + ' ' + '350',
        '3.' + ' ' + ' 400',
        '4. ' + ' ' + '450',
        '5. ' + '   ' + ' 530',
      ]

      for (let i = 0; i < 5; i++) {
        {
          let li = document.createElement('li')
          li.className = 'antwoord'

          var a = document.createElement('a')

          a.innerHTML = vraag6Antwoorden[i]

          li.appendChild(a)
          ul6.appendChild(li)
        }
      }
      ul6.classList.add('antwoorden')
      break

    default:
      break
  }
}

// manipulate elements

// styling elements via addClasses

// 'element.classList.add("my-class");'

// element.classList.remove('my-class')
