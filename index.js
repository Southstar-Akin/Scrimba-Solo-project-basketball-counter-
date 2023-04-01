/** @type {HTMLElement} */
const home = document.querySelector('span#home')
const away = document.querySelector('span#away')
const newGame = document.querySelector('button#new-Btn')
const buttsHome = document.querySelector('div.butts.home')
const buttsAway = document.querySelector('div.butts.away')

let mins = document.querySelector('span#min')
let secs = document.querySelector('span#sec')

let homeScore = 0
let awayScore = 0

let minutes = '00'
let seconds = '00'

away.textContent = awayScore
home.textContent = homeScore
mins.textContent = minutes
secs.textContent = seconds


function go(){

    buttsAway.children[0].addEventListener("click", () => {
        addAway(1)
        render()
    })
    
    buttsAway.children[1].addEventListener("click", () => {
        addAway(2)
        render()
    })
    
    buttsAway.children[2].addEventListener("click", () => {
        addAway(3)
        render()
    })
    
    buttsHome.children[0].addEventListener("click", () => {
        addHome(1)
        render()
    })
    
    buttsHome.children[1].addEventListener("click", () => {
        addHome(2)
        render()
    })
    
    buttsHome.children[2].addEventListener("click", () => {
        addHome(3)
        render()
    })
    
    }


function addAway(a){
    awayScore += a
}

function addHome(a){
    homeScore += a
}

function render(){
    away.textContent = awayScore
    home.textContent = homeScore
    highlightLeader()
}

function highlightLeader(){
    if (homeScore > awayScore) {
        home.style.textShadow = "-1px -1px 4px greenyellow"
        away.style.textShadow = "-1px -1px 4px #6f1d1b"
    }else if (homeScore < awayScore) {
        away.style.textShadow = "-1px -1px 4px greenyellow"
        home.style.textShadow = "-1px -1px 4px #6f1d1b"
    }else{
        home.style.textShadow = "-1px -1px 4px #6f1d1b"
        away.style.textShadow = "-1px -1px 4px #6f1d1b"

    }
}

newGame.addEventListener("click", () => {
    render()
})


go()


function countdown(minutes) {

  let seconds = 60
  let w = minutes
    if ( w >= 0 && seconds > 0)
    {   
    let timer = setInterval(
    () => {
      seconds--;
      secs.textContent = seconds
      mins.textContent = w
    if (seconds <= 1) {
        seconds = 60
        w--
    }else if(w < 0)
    {
        secs.textContent = "00"
        mins.textContent = "00"
        for( let i = 0; i < buttsHome.children.length; i++){ 
        buttsHome.children[i].setAttribute("disabled", false)
        buttsAway.children[i].setAttribute("disabled", false)
        alert("Game's over")
        clearInterval(timer)
        }
      };
    }, 1000)}
  }
  

function timing() {
setTimeout( () => { 
    let minutes = prompt("How long is this game to last? (in Minutes)", "")
    if ( minutes === null){
        alert("To specify a time limit, hit the 'Refresh/New game' button and try again")
    }
    else if (minutes === String || minutes === Symbol || minutes === Boolean || minutes === undefined){
alert( `Can only take numerical values. Hit the 'Refresh/New game' button and try again`)
    }else{
        countdown(minutes - 1);
    }
  }, 3000
)
}

timing()