const buttons = document.createElement("DIV");
document.body.appendChild(buttons);


const startBtn = document.createElement("BUTTON");
const startText = document.createTextNode("Start");
startBtn.classList.add("goGo");
startBtn.appendChild(startText);
buttons.appendChild(startBtn);

const resetBtn = document.createElement("BUTTON");
const resetText = document.createTextNode("Reset");
resetBtn.classList.add("resetSet");
resetBtn.append(resetText);
buttons.appendChild(resetBtn);

let secTen = document.querySelector("#secondTens");
let secOne = document.querySelector("#secondOnes");
let msHundred = document.querySelector("#msHundreds");
let msTen = document.querySelector("#msTens");

function startTimer(){
    secTen.textContent = 0;
    secOne.textContent = 0;
    msHundred.textContent = 0;
    msTen.textContent = 0;
    beginCounting(); 
};

let interval;
function beginCounting() { 
    interval = setInterval(counter,10)
};
function stopTimer() {
    clearInterval(interval);
};

let ms10 = 0;
let ms100 = 0;
let ones = 0;
let tens = 0;
function counter(){
    if (ms10 === 10){
        ms10 = 0;
        msTen.textContent = ms10;
        ms100 += 1;
        msHundred.textContent = ms100;
        if(ms100 === 10){
            ms100 = 0;
            msHundred.textContent = ms100;
            ones += 1;
            secOne.textContent = ones;
            if(ones === 10){
                ones = 0;
                secOne.textContent = ones;
                tens += 1;
                secTen.textContent = tens;
                stopTimer();
                secTen.classList.toggle("redDigit");
                secOne.classList.toggle("redDigit");
                msHundred.classList.toggle("redDigit");
                msTen.classList.toggle("redDigit");
            }else{
                secOne.textContent = ones;
            }
        }else{
            msHundred.textContent = ms100;
        }
    }else{
        msTen.textContent = ms10;
        ms10 += 1;
    }
    
}

const buttonBtnStart = document.querySelector(".goGo");
buttonBtnStart.addEventListener("click", startTimer, {once : true});
const buttonBtnReset = document.querySelector(".resetSet");
buttonBtnReset.addEventListener("click", reset);

function reset(){
    clearInterval(interval);
    ms10 = 0;
    ms100 = 0;
    ones = 0;
    tens = 0;
    secTen.classList.remove("redDigit");
    secOne.classList.remove("redDigit");
    msHundred.classList.remove("redDigit");
    msTen.classList.remove("redDigit");
    secTen.textContent = "-";
    secOne.textContent = "-";
    msHundred.textContent = "-";
    msTen.textContent = "-";
    buttonBtnStart.removeEventListener("click", startTimer, {once : true});
    buttonBtnStart.addEventListener("click", startTimer, {once : true});
}