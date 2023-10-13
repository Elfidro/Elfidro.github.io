/* Toggles dark theme */
document.getElementById('dark-mode-checkbox').addEventListener('change', function () {
    document.body.classList.toggle('dark');
});

/* Debug mode */
//document.getElementById('debug-checkbox').addEventListener('change', function () {
//    var jobs = document.getElementsByClassName('hidden');
//    const length = jobs.length;
//    for (var i = 0; i < length; i++) {
//        jobs[0].classList.remove('hidden');
//    }
//});

document.getElementById('debug-checkbox').addEventListener('change', function () {
    var jobs = Array.from(document.getElementsByClassName('hidden'));
    for (var i = 0; i < jobs.length; i++) {
        jobs[i].classList.remove('hidden');
    }
});


// Save game state
function saveGame() {
    localStorage.setItem('gameState', JSON.stringify(gameState));
    console.log("Saving");
}

// Reset game State
function resetGame() {
    if (confirm("Are you sure you want to reset? This action cannot be undone.")) {
        localStorage.clear();
        location.reload();
    }
}

// Load game state
function loadGame() {
    const gameStateString = localStorage.getItem('gameState');

    console.log("Loading");
    if (gameStateString) {
        var gameSave = JSON.parse(gameStateString)
        console.log("Loading2");
        document.getElementById('money').innerText = gameSave.money;
        gameState = gameSave;
    }
}