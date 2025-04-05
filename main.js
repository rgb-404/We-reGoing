// the egg times
let halfboilTime = 450
let softboilTime = 450
let medboilTime = 450
let hardboilTime = 450
let steamTime = 450
let poachTime = 450


// misc variables
let timer;
let secsRemaining;
let timerOn = false;



// redirects the current window to the chosen egg timer
function EggPage(eggType) {
    switch(eggType) {
        case 'landing':
            window.location.href = 'landing.html';
            break;
        case 'half':
            window.location.href = 'halfboiled.html';
            break;
        case 'soft':
            window.location.href = 'softboiled.html';
            break;
        case 'med':
            window.location.href = 'mediumboiled.html';
            break;
        case 'hard':
            window.location.href = 'hardboiled.html';
            break;
        case 'steam':
            window.location.href = 'steamed.html';
            break;
        case 'poach':
            window.location.href = 'poached.html';
            break;
    }
}

function startTimer() {
    switch(eggType) {
        case 'half':
            secsRemaining = halfboilTime
            break;
        case 'soft':
            secsRemaining = softboilTime
            break;
        case 'med':
            secsRemaining = medboilTime
            break;
        case 'hard':
            secsRemaining = hardboilTime
            break;
        case 'steam':
            secsRemaining = steamTime
            break;
        case 'poach':
            secsRemaining = poachTime
            break;
        default:
            secsRemaining = 0
            break;
    }

    
    
    if (isTimerRunning) return;



    timer = setInterval(function() {
        if (secsRemaining > 0) {
            secsRemaining--;  // Decrease by 1 second
            updateTimerDisplay();
        } else {
            clearInterval(timer);
            isTimerRunning = false;
            document.getElementById("startButton").disabled = true; 
            document.getElementById("pauseButton").disabled = true;
            document.getElementById("snoozeButton").disabled = false;
        }
    }, 1000);
}







function pauseTimer() {
    clearInterval(timer);
    isTimerRunning = false;
    document.getElementById("startButton").disabled = false;
    document.getElementById("pauseButton").disabled = true;
}




function snoozeTimer() {
    secondsRemaining = 60;  // snooze for a minute
    updateTimerDisplay();
    startCountdown();  // restart the timer after snooze
}


function updateTimerDisplay() {
    let minutes = Math.floor(secsRemaining / 60);
    let seconds = secsRemaining % 60;

    document.getElementById("timerDisplay").textContent =
        (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}