// The egg times (in seconds)
let halfboilTime = 450;
let softboilTime = 450;
let medboilTime = 450;
let hardboilTime = 450;
let steamTime = 450;
let poachTime = 450;

// misc
let timer;
let secsRemaining;
let isTimerRunning = false; 


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


// initialise the timer
function startTimer(eggType) {
    // initialise the time
    switch(eggType) {
        case 'half':
            secsRemaining = halfboilTime;
            break;
        case 'soft':
            secsRemaining = softboilTime;
            break;
        case 'med':
            secsRemaining = medboilTime;
            break;
        case 'hard':
            secsRemaining = hardboilTime;
            break;
        case 'steam':
            secsRemaining = steamTime;
            break;
        case 'poach':
            secsRemaining = poachTime;
            break;
        default:
            secsRemaining = 0;
            break;
    }

    updateTimerDisplay();

    // pause timer if already running
    if (isTimerRunning) {
        pauseTimer();
    } else {
        // start the timer if running
        isTimerRunning = true;
        document.getElementById("timerControlButton").textContent = "Pause"; // change text to pause
        startCountdown();
    }
}

// start the actual countdown, so timer going up and down
function startCountdown() {
    timer = setInterval(function() {
        if (secsRemaining > 0) {
            secsRemaining--;
            updateTimerDisplay();
        } else {
            clearInterval(timer); // clear timer at 0
            isTimerRunning = false;
            document.getElementById("timerControlButton").textContent = "Snooze"; // change text to "snooze"
        }
    }, 1000); // update every 1000ms/1s
}

// pause timer upon press
function pauseTimer() {
    clearInterval(timer); // stop the countdown
    isTimerRunning = false;
    document.getElementById("timerControlButton").textContent = "Start"; // Change button text back to "Start"
}

// Function to update the timer display (MM:SS format)
function updateTimerDisplay() {
    let minutes = Math.floor(secsRemaining / 60);
    let seconds = secsRemaining % 60;
    
    document.getElementById("timerDisplay").textContent = 
        (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}
