// instead of 'onclick' in html, keeping a constant works more reliably
const playPauseBtn = document.getElementById('playPause-img');

// flag for play/pause; true means play visible, false means pause visible
let toStart = true;

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
        case 'hard':
            window.location.href = 'hardboiled.html';
            break;
        case 'fried':
            window.location.href = 'fried.html';
            break;
        case 'scrambled':
            window.location.href = 'scrambled.html';
            break;
        case 'poached':
            window.location.href = 'poached.html';
            break;
    }
}


function backPage(backFrom) {
    if (backFrom == 'landing') {
        window.location.href = 'index.html';
    } else {
        resetStartBtnImg();
        window.location.href = 'landing.html';
    } 
}


function resetStartBtnImg() {
    toStart = true;
    playPauseBtn.src = "assets/start.png";
}

function toggleTimerBtn() {
    toStart = !toStart;
    if (toStart) {
        playPauseBtn.src = "assets/start.png";
    } else {
        playPauseBtn.src = "assets/pause.png"
    }
}

playPauseBtn.addEventListener('click', toggleTimerBtn)