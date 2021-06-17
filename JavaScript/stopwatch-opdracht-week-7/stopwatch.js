// import van het div element om het later te kunnen bewerken.
const timer = document.getElementById('stopwatch')
// declaratie van de uren,minuten en seconden variabelen die alle 3 een '0' waarde krijgen
let hr = 0
let min = 0
let sec = 0

//  variabele met boolean waarde die bijhoudt of de stopwatch loopt of niet
let stoptime = true

// start functie die gekoppeld is aan de start button via de onclick property

function startTimer() {
  if (stoptime == true) {
    stoptime = false
    timerCycle()
  }
}

// stop functie die gekoppeld is aan de stop button via de onclick property

function stopTimer() {
  if (stoptime == false) {
    stoptime = true
  }
}

// De timerCycle zorgt voor de weergave van de timer

function timerCycle() {
  if (stoptime == false) {
    // de parseInt functie zorgt ervoor dat de string waarde geconverteerd word naar een int waarde
    sec = parseInt(sec)
    min = parseInt(min)
    hr = parseInt(hr)

    sec = sec + 1

    if (sec == 60) {
      min = min + 1
      sec = 0
    }
    if (min == 60) {
      hr = hr + 1
      min = 0
      sec = 0
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec
    }
    if (min < 10 || min == 0) {
      min = '0' + min
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr
    }

    timer.innerHTML = hr + ':' + min + ':' + sec

    setTimeout('timerCycle()', 5)
  }
}
// reset functie is gekoppeld aan de reset knop via de onclick methode
function resetTimer() {
  timer.innerHTML = '00:00:00'
}
