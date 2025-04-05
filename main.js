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