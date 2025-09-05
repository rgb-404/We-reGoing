// instead of 'onclick' in html, keeping a constant works more reliably
const playPauseBtn = document.getElementById('playPause-img');
const resetBtn = document.getElementById('reset-img');
const timerAmount = document.getElementById('actual-timer');

// flag for play/pause; false means not started so play visible to start it, true means timer started so means the pause is visible to pause the timer
var started = false;
var timer;
var minsLeft;
var secsLeft;

/*
egg cooking times

half = 7mins
scrambled = 4.5 mins
soft = 8 mins
hard = 10 mins
poached = 3 mins
fried = 3.5
*/



// changes the page based on the button that's clicked by the user
function EggPage(eggType) {
    switch(eggType) {
        case 'landing':
            window.location.href = 'landing.html';
            break;
        case 'half':
            window.location.href = 'halfboiled.html';
            minsLeft = 7;
            secsLeft = 0;
            break;
        case 'soft':
            window.location.href = 'softboiled.html';
            minsLeft = 8;
            secsLeft = 0;
            break;
        case 'hard':
            window.location.href = 'hardboiled.html';
            minsLeft = 10;
            secsLeft = 0;
            break;
        case 'fried':
            window.location.href = 'fried.html';
            minsLeft = 3;
            secsLeft = 30;
            break;
        case 'scrambled':
            window.location.href = 'scrambled.html';
            minsLeft = 4;
            secsLeft = 30;
            break;
        case 'poached':
            window.location.href = 'poached.html';
            minsLeft = 3;
            secsLeft = 0;
            break;
    }
}



// works for the back button exclusively
function backPage(backFrom) {
    if (backFrom == 'landing') {
        window.location.href = 'index.html';
    } else {
        resetStartBtnImg();
        window.location.href = 'landing.html';
    } 
}



// these three are for toggling the play-pause button image per click and context
function resetStartBtnImg() {
    started = false;
    playPauseBtn.src = "assets/start.png";
}

function toggleTimerBtn() {
    started = !started;

    toggleTimer();
    if (!started) {
        playPauseBtn.src = "assets/start.png";
    } else {
        playPauseBtn.src = "assets/pause.png"
    }
}





// timer functionality:

function toggleTimer() {    
    if (started) {
        timer = setInterval(function() {
            if (secsLeft === 0) {
                if (minsLeft ===0) {
                    // timer has ended
                    clearInterval(timer);
                    return;
                }
                
                // end of a minute
                minsLeft--;
                secsLeft = 59;
            } else {
                secsLeft--
            }
            
            document.getElementById("mins").textContent = formattedTime(minsLeft);
            document.getElementById("secs").textContent = formattedTime(secsLeft);
        }, 1000);
    } else {
        clearInterval(timer);
        started = false;
    }
    
}

function formattedTime(timeLeft) {
    return timeLeft < 10 ? "0" + timeLeft : timeLeft;
}

function resetTimer(currentEgg) {
    switch(currentEgg) {
        case 'half':
            minsLeft = 7;
            secsLeft = 0;
            document.getElementById("mins").textContent = "07";
            document.getElementById("secs").textContent = "00";
            break;
        case 'soft':
            minsLeft = 8;
            secsLeft = 0;
            document.getElementById("mins").textContent = "08";
            document.getElementById("secs").textContent = "00";
            break;
        case 'hard':
            minsLeft = 10;
            secsLeft = 0;
            document.getElementById("mins").textContent = "10";
            document.getElementById("secs").textContent = "00";
            break;
        case 'fried':
            minsLeft = 3;
            secsLeft = 30;
            document.getElementById("mins").textContent = "03";
            document.getElementById("secs").textContent = "30";
            break;
        case 'scrambled':
            minsLeft = 4;
            secsLeft = 30;
            document.getElementById("mins").textContent = "04";
            document.getElementById("secs").textContent = "30";
            break;
        case 'poached':
            minsLeft = 3;
            secsLeft = 0;
            document.getElementById("mins").textContent = "03";
            document.getElementById("secs").textContent = "00";
            break;
    }
}


playPauseBtn.addEventListener('click', toggleTimerBtn())