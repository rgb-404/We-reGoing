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
    sessionStorage.setItem('eggType', eggType);
    window.location.href = eggType + ".html"
    resetTimer(eggType)
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


window.onload = function() {
    const eggType = sessionStorage.getItem('eggType');
    if (eggType) {
        resetTimer(eggType);
    }

    playPauseBtn.addEventListener('click', toggleTimerBtn)
};


// timer functionality:

function toggleTimer() {    
    // if the timer is running, otherwise needa pause
    if (started) {
        // a constant updater for the time
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
        case 'halfboiled':
            minsLeft = 7;
            secsLeft = 0;
            document.getElementById("mins").textContent = "07";
            document.getElementById("secs").textContent = "00";
            break;
        case 'softboiled':
            minsLeft = 8;
            secsLeft = 0;
            document.getElementById("mins").textContent = "08";
            document.getElementById("secs").textContent = "00";
            break;
        case 'hardboiled':
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
