const minutesEl = document.querySelector ("#minutes");
const secondsEl = document.querySelector ("#seconds");
const millisecondsEl = document.querySelector ("#milliseconds");
const pauseBtn = document.querySelector ("#pauseBtn");
const startBtn = document.querySelector ("#startBtn");
const resumeBtn = document.querySelector ("#resumeBtn");
const resetBtn = document.querySelector ("#resetBtn");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener ("click", startTimer)

function startTimer(){
    isPaused = false;

    interval = setInterval(() => {
        

        if(!isPaused){
            milliseconds += 10;

            if (milliseconds === 1000){
                seconds++;
                milliseconds = 0;
            }
            if(seconds === 60){
                minutes++;
                seconds = 0;
            }

            minutesEl.textContent = minutes;
            secondsEl.textContent = seconds;
            millisecondsEl.textContent = milliseconds;
        }

        if(milliseconds <= 99){
            millisecondsEl.innerHTML = '0' + milliseconds;
        }
        if(seconds <= 0){
            secondsEl.innerHTML = '0' + seconds;
        }
        if(minutes <= 9){
            minutesEl.innerHTML = '0' + minutes;
        }
        else{
            return startTimer
        }
    } ,10)
        startBtn.style.display = "none";
        pauseBtn.style.display = "block";
}
function pauseTimer(){
    isPaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}
function resumeTimer(){
    isPaused = false;
    pauseBtn.style.display = "block"
    resetBtn.style.display - "none"
    resumeBtn.style.display = "none";
}
function resetTimer(){
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 000;


    minutesEl.textContent = "00"
    secondsEl.textContent = "00"
    millisecondsEl.textContent = "000"

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none"
}