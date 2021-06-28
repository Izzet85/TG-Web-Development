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
let indexNumber = 1

volgendeButton.onclick = function () {
  console.log(questionNumber)
  questionNumber++
  indexNumber++

  showIndexNumber(questionNumber)
  showQuestion()
  checkAnswer()

  // }
}
vorigeButton.onclick = function () {
  questionNumber--
  indexNumber--
  showIndexNumber(questionNumber)

  console.log(questionNumber)
  showQuestion()
}

// }
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
      let vraag1Antwoorden = [170, 150, 200, 250, 300]

      for (let i = 0; i < 5; i++) {
        {
          let li = document.createElement('li')
          li.className = 'antwoord'

          var a = document.createElement('button')

          a.innerHTML = vraag1Antwoorden[i]
          // a.classList.add('antwoordVraag1-' + [i])

          li.appendChild(a)
          ul.appendChild(li)
        }
      }

      ul.classList.add('antwoorden')
      button.classList.add('antwoord1')
      console.log(vraag1Antwoorden)
      button.onclick = function checkAnswer() {
        console.log('cliked on answer')
      }

      break
    case 2:
      indexNumber++

      let vraag2Antwoorden
      var question2 = 'What is 500 -  150'
      vraagContainer.innerText = question2
      // vraagContainer.innerText = question2
      let ul2 = document.createElement('ul')
      div.appendChild(ul2)
      vraag2Antwoorden = [370, 510, 220, 250, 350]

      for (let i = 0; i < 5; i++) {
        {
          let li = document.createElement('li')
          li.className = 'antwoord'

          var a = document.createElement('button')

          a.innerHTML = vraag2Antwoorden[i]

          li.appendChild(a)
          ul2.appendChild(li)
        }
      }
      ul2.classList.add('antwoorden')

      console.log(vraag2Antwoorden)

      break
    case 3:
      let vraag3Antwoorden
      var question3 = 'What is 400 -160'
      vraagContainer.innerText = question3
      // vraagContainer.innerText = question2
      let ul3 = document.createElement('ul')
      div.appendChild(ul3)
      vraag3Antwoorden = [170, 150, 200, 240, 300]

      for (let i = 0; i < 5; i++) {
        {
          let li = document.createElement('li')
          li.className = 'antwoord'

          var a = document.createElement('button')
          a.classList.add('antwoorden-3' + [i])

          a.innerHTML = vraag3Antwoorden[i]

          li.appendChild(a)
          ul3.appendChild(li)
        }
      }
      ul3.classList.add('antwoorden')
      console.log(vraag3Antwoorden)

      break
    case 4:
      let vraag4Antwoorden
      var question4 = 'What is 560 + 80'
      vraagContainer.innerText = question4
      // vraagContainer.innerText = question2
      let ul4 = document.createElement('ul')
      div.appendChild(ul4)
      vraag4Antwoorden = [170, 650, 400, 640, 570]

      for (let i = 0; i < 5; i++) {
        {
          let li = document.createElement('li')
          li.className = 'antwoord'

          var a = document.createElement('button')

          a.innerHTML = vraag4Antwoorden[i]

          li.appendChild(a)
          ul4.appendChild(li)
        }
      }
      ul4.classList.add('antwoorden')
      console.log(vraag4Antwoorden)

      break
    case 5:
      let vraag5Antwoorden
      var question5 = 'What is 190 + 30'
      vraagContainer.innerText = question5
      // vraagContainer.innerText = question2
      let ul5 = document.createElement('ul')
      div.appendChild(ul5)
      vraag5Antwoorden = [270, 190, 200, 220, 300]

      for (let i = 0; i < 5; i++) {
        {
          let li = document.createElement('li')
          li.className = 'antwoord'

          var a = document.createElement('button')

          a.innerHTML = vraag5Antwoorden[i]

          li.appendChild(a)
          ul5.appendChild(li)
        }
      }
      ul5.classList.add('antwoorden')
      console.log(vraag5Antwoorden)

      break
    case 6:
      let vraag6Antwoorden
      var question6 = 'What is 300 + 230'
      vraagContainer.innerText = question6
      // vraagContainer.innerText = question2
      let ul6 = document.createElement('ul')
      div.appendChild(ul6)
      vraag6Antwoorden = [370, 350, 400, 450, 530]

      for (let i = 0; i < 5; i++) {
        {
          let li = document.createElement('li')
          li.className = 'antwoord'

          var a = document.createElement('button')

          a.innerHTML = vraag6Antwoorden[i]

          li.appendChild(a)
          ul6.appendChild(li)
        }
      }
      ul6.classList.add('antwoorden')
      break
  }
}
let indexQuestion = document.createElement('p')
indexQuestion.classList.add('indexNumber')

function showIndexNumber(indexNumber) {
  indexQuestion.innerText = '' + indexNumber + '/6'

  console.log(indexQuestion.innerText)
  document.body.append(indexQuestion)

  console.log(indexNumber)
}

function checkAnswer() {
  console.log('antwoord clicked')
}

// console.log(vraag1Antwoorden)
// console.log(vraag2Antwoorden)
// console.log(vraag3Antwoorden)

// console.log(vraag4Antwoorden)

// console.log(vraag5Antwoorden)

// manipulate elements

// styling elements via addClasses

// 'element.classList.add("my-class");'

// element.classList.remove('my-class')

window.onload = function () {
  var button = document.getElementsByTagName('button')
  for (var i = 0; i < anchors.length; i++) {
    var button = anchors[i]
    button.onclick = function () {
      alert('ho ho ho')
    }
  }
}
console.log(button)
