let workInterval;
let isWorking = false;

var gameState = {
    money: 0,
    level: 5,
    // Add more data as needed
};

// Define an object to keep track of progress for each job
let jobProgress = {
    'beggar': 0,
    'recycler': 0,
    'performer': 0,
    'oddjobsworker': 0,
    'daylabourer': 0
};

function toggleWork(job) {
    const progress = document.getElementById(`${job}-progress`);
    //const isActive = progress.classList.contains("active");

    if (isWorking) {
        clearInterval(workInterval);
        //progress.classList.remove("active");
        isWorking = false;
        toggleWork(job);
    } else {
        workInterval = setInterval(function () {
            // Increment work by value
            //workProgress += 10;
            jobProgress[job] += 1 * !game.paused;

            // Increase progress bar by %
            //progress.style.width = workProgress + '%';
            document.getElementById(job + '-progress').style.width = jobProgress[job] + '%';

            // Checks if bar is full, if true then execute code
            if (jobProgress[job] >= 100) {
                jobProgress[job] = 0;                                                     // Reset progress bar to 0%
                gameState.money += 470;                                                    // Increment money by 10
                checkBuyTent();                                                           // Check if user can make purchases
                document.getElementById('money').innerText = gameState.money;             // Paste new value of 'money' to html
            }
        }, 100);
        //progress.classList.add("active");
        isWorking = true;
    }
}

/* Reincarnation Code */
function startReincarnationTimer() {
    setTimeout(function () {
        if (confirm("Congratulations! You can now reincarnate and start over with improved bonuses to your skills. Would you like to reincarnate?")) {
            // Reset skills and bonuses here
            resetSkills();
        }
    }, 60000); // 60 seconds in milliseconds
}

function resetSkills() {
    // Reset skills and bonuses logic here
    document.getElementById('money').innerText = '0';

    // Restart the reincarnation timer
    startReincarnationTimer();
}

// Start the timers when the page loads
document.addEventListener('DOMContentLoaded', function () {
    //startReincarnationTimer();
});

/* Progress bar code */
const progressBars = document.getElementsByClassName("progress-bar");

for (let i = 0; i < progressBars.length; i++) {
    progressBars[i].addEventListener('click', function () {
        const job = this.dataset.job; // Extract the job type from data attribute
        toggleWork(job);
    });
}

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