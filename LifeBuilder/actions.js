let workInterval;
let isWorking = false;

var gameState = {
    money: 0,
    jobProgress: {
        'beggar': { progress: 0, level: 0, income: 10 },
        'recycler': { progress: 0, level: 0, income: 20 },
        'performer': { progress: 0, level: 0, income: 30 },
        'oddjobsworker': { progress: 0, level: 0, income: 40 },
        'daylabourer': { progress: 0, level: 0, income: 50 },
    },
    // Add more data as needed
};

// Define an object to keep track of progress for each job

function toggleWork(job) {
    const jobData = gameState.jobProgress[job];

    if (isWorking) {
        clearInterval(workInterval);
        isWorking = false;
        toggleWork(job);
    } else {
        workInterval = setInterval(function () {
            // Increment work by value
            jobData.progress += 5 * !game.paused;

            // Increase progress bar by %
            document.getElementById(job + '-progress').style.width = jobData.progress + '%';

            // Checks if bar is full, if true then execute code
            if (jobData.progress >= 100) {
                jobData.progress = 0;                                                     // Reset progress bar to 0%
                gameState.money += jobData.income;                                        // Increment money by income
                jobData.level++;
                updateRows();
                checkBuyTent();                                                           // Check if user can make purchases
                document.getElementById('money').innerText = gameState.money;             // Paste new value of 'money' to html
            }
        }, 100);
        isWorking = true;
    }
}

// Iterate over the rows and update the income value
function updateRows() {
    const rows = document.querySelectorAll('#jobs tr[id^="row"]');
    rows.forEach(row => {
        const jobType = row.id.slice(4).toLowerCase(); // Extract job type from row ID
        const levelElement = row.querySelector('.level');
        const incomeElement = row.querySelector('.income');
        if (gameState.jobProgress[jobType]) {
            levelElement.textContent = gameState.jobProgress[jobType].level;
            incomeElement.textContent = gameState.jobProgress[jobType].income;
        }
    });
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

updateRows();