var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
var clutter = "";

for(var i = 1; i<65; i++){
    var rn =  Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
     var timerint = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
    }
    else {
        clearInterval(timerint)
        if(score>200){
              document.querySelector("#pbtm").innerHTML = `<h1>You won the Game🏆<br>Congratulations 🎇 <br> Your Score : ${score} </h1>`
    
        }
        else {
            document.querySelector("#pbtm").innerHTML = `<h1> Game over<br> You lost the game😢 <br>Your Score : ${score}</h1>`
        }
    }
     }, 1000);
}

document.querySelector("#pbtm")
.addEventListener("click", function (dets) {
     var clickednum = Number(dets.target.textContent);
     if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
     }
})


runTimer();
makeBubble();
getNewHit();
increaseScore();