let homescore = 0
let btnh1 = document.getElementById("btnh1")
let homepoints = document.getElementById("homepoints")
let btnh2 = document.getElementById("btnh2")
let btnh3 = document.getElementById("btnh3")
let guestpoints = document.getElementById("guestpoints")
let guestscore = 0
let btng1 = document.getElementById("btng1")
let btng2 = document.getElementById("btng2")
let btng3 = document.getElementById("btng3")


function increment1(){
    homescore += 1
    homepoints.textContent = homescore
   console.log(homescore)
    
}

function increment2(){
    homescore += 2
    homepoints.textContent = homescore
   console.log(homescore)
    
}

function increment3(){
    homescore += 3
    homepoints.textContent = homescore
   console.log(homescore)
    
}


function incrementg3(){
    guestscore += 3
    guestpoints.textContent = guestscore
   console.log(guestscore)
    
}

function incrementg1(){
    guestscore += 1
    guestpoints.textContent = guestscore
   console.log(guestscore)
    
}

function incrementg2(){
    guestscore += 2
    guestpoints.textContent = guestscore
   console.log(guestscore)
    
}

