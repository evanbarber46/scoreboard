let homeScore = document.getElementById("homescore")
let guestScore = document.getElementById("guestscore")

let count1 = 0
let count2 = 0

function onehome() {  
    count1 = count1 + 1
    homeScore.textContent = count1
}

function twohome() {  
    count1 = count1 + 2
    homeScore.textContent = count1  
}

function threehome() {  
    count1 = count1 + 3
    homeScore.textContent = count1 
      
}

function oneguest() {  
    count2 = count2 + 1
    guestScore.textContent = count2   
}

function twoguest() {  
    count2 = count2 + 2
    guestScore.textContent = count2   
}

function threeguest() {  
    count2 = count2 + 3
    guestScore.textContent = count2   
}