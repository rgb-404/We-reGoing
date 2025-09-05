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