// opdracht 1.1

// A

// let letoefening = 'let tekst';
// let letoefening = 'let tekst twee';
// console.log(letoefening);

// B
// let letoefening = 'let tekst';
// console.log(letoefening);

// letoefening = 'let tekst twee';
// console.log(letoefening);

// C
// opdrachten.js:17 Uncaught SyntaxError: Identifier 'letoefening' has already been declared
// const letoefening = 'Const Tekst';
// console.log(constOefening);

// constoefening = 'Const Tekst Twee';
// console.log(constOefening);

// D
// varoefening = 'Var Tekst';
// console.log(constOefening);

// var varoefening = 'Var Tekst Twee';
// console.log(constOefening);

// var varoefening = 'Const Tekst Drie';
// console.log(constOefening);

// opdracht 1.2

let typeQuestion = true
console.log(
  'This is a ' + typeof typeQuestion + ', with the value:' + typeQuestion
)
// Wat zie je in de console? Was dat wat je verwachtte?

// Ik zie de de type variabele en de inhoud van de variabele

// opdracht 1.3

// let someNumber = 5
// let anotherNumber = 5
// console.log(someNumber !== anotherNumber)

// Wat komt hier uit?
5
// Wat komt er uit als je van beiden een number maakt?

// Wat komt er uit als je de + vervangt door:
// ==
true
// ===
true
// !=
false
// !==
false

// opdracht 1.4

let increment = 1
console.log(increment++)
console.log(++increment)

// Wat komt er uit als je de console.log() hierboven omdraait?
// 1 en 3

let modulo = 24 % 10
console.log(modulo)

let division = 24 / 10
console.log(division)

// C wat komt er uit het volgende ?
// uit line 78 komt 4 en uit line 81 komt 2.4 uit

//  D wat komt er uit het volgende

// FALSE

// let someNumber = Undefined
// console.log(!someNumber)

// Wat komt er uit bovenstaand als je someNumber verandert in:
// 5
// antwoord: FALSE
// Boolean
// antwoord: FALSE

// false
// antwoord: FALSE

// “false”
// antwoord: TRUE;

// true
// antwoord: FALSE

// “true”
// antwoord: FALSE

// null
// antwoord: TRUE

// Undefined
// opdrachten.js:86 Uncaught ReferenceError: Undefined is not defined
//     at

// Zoek op of experimenteer wat += doet. Werkt deze ook met Strings? Weet je hoe je deze anders kan schrijven?

// += telt de waarden van de variabelen open.
// -= telt de waarden van de variabelen af.
// *= vermenigtvuldigt de waarden van de variabelen.
// /= deelt de waarden van de variabelen.
// **= brekent de exponent.

// STRING METHODS

// opdracht 2.1
let someKittens =
  'De poes van de buurman heeft kittens gehad! Hij vraagt of hij nog kittens willen'

let kitten1 = someKittens.slice(0, 40)
let kitten2 = someKittens.slice(40, 80)
console.log(kitten1)
console.log(kitten2)

// Splits de string op in 2 aparte zinnen. Stop beiden in een aparte variabele.

var twoKittens = kitten1 + kitten2

// Zo’n geweldig nieuws verdient upper case. Zet someKittens om naar hoofdletters.

let someKittensUpperCase = someKittens.toUpperCase()

console.log(someKittensUpperCase)

// Geef de eerste en laatste index van KITTENS.

var kittens = 'KITTENS'
console.log(someKittens.indexOf('kittens'))

console.log(someKittens.lastIndexOf('kittens'))

// Gebruik charAt() op beiden. Welk teken krijg je terug?

console.log(someKittens.charAt('kittens'))
console.log(kittens.charAt('kittens'))

// Opdracht 2.2:

// Wat doet substring() als het eerste getal hoger is dan het tweede getal?
console.log(someKittens.substring(0, 10))

// ik krijg een foutmelding bij de onderstaande code
console.log(someKittens.slice(5, 1))

// Wat doet substring() bij negatieve waardes?

console.log(someKittens.substring(-4, -10))

// ik krijg geen waardes getoond

// Wat doet slice() bij negatieve waardes?

console.log(someKittens.slice(-1, -6))

// ik krijg geen waardes getoond

// Opdracht 2.3:
// ebruik split() om alle woorden apart in een Array te zetten.

let someKittens1 = 'Die nieuwe kittens zijn zo schattig!'

let arrayOfKittens = someKittens1.split(' ')

console.log(arrayOfKittens)

// Opdracht 3.1:

// Wat is het verschil tussen == en ===?

// Bij == word alleen de waardes vergeleken en bij === worden de waardes en de datatype gechecked.

// Wat is het verschil tussen > en >=? En tussen < en <=?

// teken > betekent groter dan
// teken >= betekent groter of gelijk aan
// teken < betekent lager dan
// teken <= betekent lager of gelijk aan

// C) Schrijf de If conditie zo, dat je alleen Results ziet als x==4 en y==8
// let x = 4
// let y = 8
// if ((x == 4) && (y == 8)) {
//   console.log('Result')
// }

// D) Schrijf het nu zo dat je alleen Results ziet als x==4 OF y==8

// let x = 4
// let y = 8
// if ((x == 4) || (y == 8)) {
//   console.log('Result')
// }

// Kan je het vorige antwoord ook geven zonder || te gebruiken?

// let x = 4
// let y = 8
// if (x == 4 ) {
//   console.log('Result')
// } else{
//  console.log('Result')
// }

// Log het in je console als de waarde groter dan 5 EN kleiner dan 10 is.

let value = 34

if (value > 5 && value < 10) {
  console.log('true')
}
if (value >= 11 && value <= 20) {
  console.log('value is between 11 and 20')
}
if (value == 21 || value == 23) {
  console.log('value is 21 and 23')
}
if (value < 35 || value >= 40 || value <= 45) {
  console.log('value is under 35 or between 40 and 45')
}

// Opdracht 3.2:

// Schrijf een If/Else blok die een eigen variabele controleert:
// Gelijk aan 3?

// Groter dan 4?

// Groter dan 11?

// Kleiner dan 3?

let value1 = 5

if (value1 == 3) {
  console.log('value is 3')
}
if (value1 > 4) {
  console.log('value is greater then 4')
}
if (value1 > 11) {
  console.log('value is greater then 11')
}
if (value1 < 3) {
  console.log('value is smaller then 3')
}

// Test je variabele met 2, 3, 4, 5 en 20. Gebeurt er iets onverwachts?

// bij 5 krijg ik geen output

// Schrijf een If/Else die een variabele op numerieke waarde controleert, en de passende maand in je console logt.Januari

var month = 5

if (month == 1) {
  console.log('januari')
}
if (month == 2) {
  console.log('februari')
}
if (month == 3) {
  console.log('maart')
}
if (month == 4) {
  console.log('april')
}
if (month == 5) {
  console.log('mei')
}
if (month == 6) {
  console.log('juni')
}
if (month == 7) {
  console.log('juli')
}
if (month == 8) {
  console.log('augustus')
}
if (month == 9) {
  console.log('september')
}
if (month == 10) {
  console.log('oktober')
}
if (month == 11) {
  console.log('november')
}
if (month == 12) {
  console.log('december')
}

// Bouw nu opdracht C met een Switch/case.

var month = 4
var monthName
switch (month) {
  case 1:
    monthName = 'Januari'
    break
  case 2:
    monthName = 'Februari'
    break
  case 3:
    monthName = 'Maart'
    break
  case 4:
    monthName = 'April'
    break
  case 5:
    monthName = 'Mei'
    break
  case 6:
    monthName = 'Juni'
    break
  case 7:
    monthName = 'Juli'
    break
  case 8:
    monthName = 'Augustus'
    break
  case 9:
    monthName = 'September'
    break
  case 10:
    monthName = 'Oktober'
    break
  case 11:
    monthName = 'November'
    break
  case 12:
    monthName = 'December'
    break
  default:
    monthName = 'Geen geldige maand!'
}

console.log(monthName)

// E) Herschrijf dit als een Ternary Operator.

// ternary-formule:
// variable_name = (condition) ? value_if_true : value_if false;

let x = 6

var results = x <= 4 && x >= 0 ? (result = 2) : (result = 5)

console.log(results)

// Functions - Opdrachten

// Maak een button en verbind er een functie aan. Zorg ervoor dat de functie in de console “Hello World” logt.

function pressButton() {
  console.log('hello world')
}

// Maak een input element en geef het een bepaald ID. Sla dat ID op in een variabele via document.GetElementByID().

let input = document.getElementById('opdracht4.1b')

// var parameterInput = 5;

function getElement(x) {
  console.log(x)
}

getElement('opdracht4.1b')

// D) Geef je functie een return waarde, bijvoorbeeld de parameter * 2. Maak vervolgens een nieuwe variabele “result”. Roep je functie op met een getal als parameter en wijs de return waarde toe aan “result”. Log de variabele daarna in je console.

function withReturn(x) {
  return x * 2
}
var results = withReturn(5)

console.log(results)

// Opdracht 4.2

// Onderzoek de volgende DOM methodes en gebruik ze in een voorbeeld:
// document.getElementsByClassName

var elements = document.getElementsByClassName('btn')

// document.getElementsByTagName

// var x = document.getElementsByTagName('INPUT')

// document.querySelector
// element = document.querySelector(h1)
// document.querySelectorAll
// element = document.querySelectorAll(h3)
// element.innerHTML
// document.getElementById('demo').innerHTML = 'Paragraph changed!'

// element.innerText
// var x = document.getElementById('heading').innerText

// Bij opdracht 4.1c heb je een input als parameter meegegeven. Roep die functie nu aan met een oninput ipv onchange, en console.log() de parameter.value ipv de parameter. Zie je het verschil in beide gevallen?

// Opdracht 4.3:
// Maak een functie randomNumber() en verbindt die aan een button. Zorg dat de functie Math.random() in de console logt. Wat merk je op als je deze meerdere keren gebruikt?

// Ik krijg elke keer een andere uitkomst

function randomNumber(x) {
  Math.floor(Math.random())
}

// Verander je functie nu dat hij een parameter x gebruikt, en zorg dat hij het volgende in je console logt: Math.floor(Math.random() * x). Test nu je functie met verschillende waardes voor x. Valt iets je op?
// Ik krijg elke keer een andere uitkomst

function randomNumber() {
  return Math.floor(Math.random() * 5 + 1)
}

console.log(randomNumber())

// Er zijn nog 2 belangrijke Math methods die handig zijn om te kennen. Onderzoek wat Math.min() en Math.max() doen. Kan je van beide al een voorbeeld geven?

// Math.max functie selecteert de grootste getal;

console.log(Math.max(600, 50))

// Math.min functie selecteert de kleinste getal.

console.log(Math.min(600, 50))

// Opdracht 4.4:

// We eindigen deze oefeningen met een lastige:

// Schrijf een functie waar je een naam aan mee kan geven. Laat de naam vergelijken met de namen van mensen in je groepje. Wanneer je functie de naam wel/niet herkent moet dat als boodschap teruggegeven worden.

// Schrijf een 2e functie die de eerste functie aanroept, en vervolgens de teruggegeven boodschap in een div element op je pagina toont. Denk aan de DOM methods!

// Schrijf nu het bovenstaande nogmaals, maar gebruik dit keer Arrow Functions. Als het niet overal lukt is dat niet erg!

// var names = document.getElementById('names').value

// document.getElementById('demo').innerHTML = x

function compareStr(names) {
  // naam  word verkregen door input element en opgeslagen in de names variabel

  var names = document.getElementById('names').value

  // namen die vooraf zijn opgeslagen in een ARRAY

  const namesArray = ['izzet', 'chantalle', 'tunahan', 'frankie']

  // methode om de namen te vegerlijken

  let resultaat = namesArray.includes(names)

  // code die de resultaat in de console en op de webpagina weergeeft
  document.getElementById('showName').innerHTML = 'Naam komt  overeen!'

  if (resultaat === true) {
    return console.log('Naam komt overeen!')
  }

  // code die de resultaat in de console en op de webpagina weergeeft

  document.getElementById('showName').innerHTML = 'Naam komt niet overeen!'

  if (resultaat === false) {
    return console.log('naam komt niet overeen!')
  }
}

// showName()

function showName() {
  compareStr(result)

  // if (resultaat) {
  //   document.getElementById('showName').innerHTML = 'Naam komt  overeen!'
  // }
}

//  C) Schrijf nu het bovenstaande nogmaals, maar gebruik dit keer Arrow Functions. Als het niet overal lukt is dat niet erg!

compareStr = () => {
  // naam  word verkregen door input element en opgeslagen in de names variabel

  var names = document.getElementById('names').value

  // namen die vooraf zijn opgeslagen in een ARRAY

  const namesArray = ['izzet', 'chantalle', 'tunahan', 'frankie']

  // methode om de namen te vergelijken

  let resultaat = namesArray.includes(names)
  document.getElementById('showName').innerHTML = resultaat

  // code die de resultaat in de console en op de webpagina weergeeft
  document.getElementById('showName').innerHTML = 'Naam komt  overeen!'

  if (resultaat === true) {
    return console.log('Naam komt overeen!')
  }

  // code die de resultaat in de console en op de webpagina weergeeft

  document.getElementById('showName').innerHTML = 'Naam komt niet overeen!'

  if (resultaat === false) {
    return console.log('naam komt niet overeen!')
  }
}

showName = () => {
  compareStr(result)
}

// Arrays & Loops - Opdrachten

// Opdracht 5.1:

// A)Maak een array met 1 t/m 10 in willekeurige volgorde en log dit.

const cijfers = [1, 5, 6, 8, 10, 3, 2, 4, 7, 9]

console.log(cijfers)

// B) Maak een array met Appel, Aardbei en 3 andere fruitsoorten. Log dit.
const fruit = ['appel', 'aardbei', 'peer', 'banaan', 'mango']

console.log(fruit)

// C)  Gebruik de indexwaarde om Appel en Aardbei in de console te loggen.

// bepaling indexwaarde van appel

console.log(fruit[0])

// const indexAppel = fruit.indexOf('appel')

// const indexAardbei = fruit.indexOf('aardbei')

// bepaling indexwaarde van aardbei

console.log(fruit[1])

// Gebruik Math.random() en Math.floor() om een random indexwaarde van je array met getallen te selecteren. Gebruik dat getal vervolgens als index om een fruitsoort te selecteren en log dit.

let randomNumberArray = Math.floor(Math.random() * 9 + 1)

console.log(cijfers[randomNumberArray])

// E) Console log de length property van je fruitsoorten array.

console.log(fruit.length)

//  F)  Fix de vorige error met modulo en de lengte.

// G) Verander “Appel” naar “Peer”

// const fruit = ['appel', 'aardbei', 'peer', 'banaan', 'mango']

fruit[0] = 'Peer'
console.log(fruit)
// H)Verwissel “Peer” en “Aardbei” van positie. Kan je dit ook al met/zonder Array method?

// de variabel peer wordt tijdelijk opgeslagen
// var temp = fruit[0]

// fruit[0] == fruit['aardbei']
// fruit['aardbei'] == temp

//  [fruit[0], fruit[1]] = [fruit[1], fruit[0]]

//  [fruit[0], fruit[1]] = [fruit[1], fruit[0]]

// stap 1 fruit peer word tijdelijk in variabele b geparkeerd

let b = fruit['peer']

// stap 2  in index 0 waar eerder peer stond word fruit aardbei geplaatst

fruit[0] = fruit['aardbei']

// stap 3  in index 1 waar eerder aardbei stond word fruit peer geplaatst

b = fruit['aardbei']

// [(arr[0], arr[1])] = [arr[1], arr[0]]

console.log(fruit)

// const fruit = ['appel', 'aardbei', 'peer', 'banaan', 'mango']

// Opdracht 5.2

// Loop door het array heen en log de items 1 voor 1 in je console.

// B) Doe nu hetzelfde met een for...in en een for...of loop

const dutchSports = ['voetbal', 'Hockey', 'Schaatsen']

// loop vanaf index 0 tot en met de totale lengte van de dutchSports array.

for (let i = 0; i < dutchSports.length; i++) {
  console.log(dutchSports[i])
}

// B) Doe nu hetzelfde met een for...in en een for...of loop
let i = 0
while (i < dutchSports.length) {
  console.log(dutchSports[i])
  i++
}

// C) Maak een for loop die van de getallen 1 t/m 20 de even getallen logt.

for (let i = 0; i < 20; i++) {
  if (i % 2 == 0) {
    console.log(i)
  }
  for (let i = 0; i <= 10; i++) {
    console.log(i)
    for (let i = 0; i < 20; i++) {
      if (i % 2 == 0) {
        console.log(i)
      }

      // console.log(i)
    }
  }

  for (let i = 0; i < 20; i + 3) {
    console.log(i)
  }

  // console.log(i)
}

// Nu gaan we even oefenen met nested loops. Maak nu een for-loop aan die drie keer draait.
