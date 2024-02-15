let time = document.getElementById("clock");
let timer = null;
let starttime = 0;
let elapsedtime = 0;
let isrunning = false;

function start() {
    if (!isrunning) {
        starttime = Date.now() - elapsedtime;
        timer = setInterval(update, 10);
        isrunning = true;
    }
}

function stop(){
    if(isrunning){
    clearInterval(timer);
    elapsedtime = Date.now() - starttime;
    isrunning = false;
    }
}

function reset(){

        clearInterval(timer);
        time.textContent= `00:00:00:00`;
        
        isrunning =false;
        elapsedtime = 0;
}

function update() {
    const currenttime = Date.now();
    elapsedtime = currenttime - starttime;
    let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
    hours = String(hours).padStart(2, 0);
    let minutes = Math.floor(elapsedtime / (1000 * 60) % 60);
    minutes = String(minutes).padStart(2, 0);
    let seconds = Math.floor(elapsedtime / (1000) % 60);
    seconds = String(seconds).padStart(2, 0);
    let miliseconds = Math.floor(elapsedtime % 1000 / 10);
    miliseconds = String(miliseconds).padStart(2, 0);
    time.textContent =  `${hours}:${minutes}:${seconds}:${miliseconds}`;
}