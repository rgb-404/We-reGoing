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
        
    }


    ) 
}






function pauseTimer() {
    
}

function snoozeTimer() {
    
}
