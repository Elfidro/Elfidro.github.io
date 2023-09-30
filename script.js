let workInterval;
let studyInterval;
let isWorking = false;
let isStudying = false;
let isDoingAction = false;
let workProgress = 0

function toggleWork() {
    if (isWorking || isDoingAction) {
        clearInterval(workInterval);
        isWorking = false;
    } else {
        workInterval = setInterval(function () {
            workProgress += 0.1;
            document.getElementById('work-progress').style.width = workProgress + '%';

            if (workProgress >= 100) {
                workProgress = 0;
            }

            money = parseInt(document.getElementById('money').innerText);
            console.log("Money:", money);
            checkBuyTent();
            money += 10;
            document.getElementById('money').innerText = money;
        }, 100);
        isWorking = true;
    }
}

function toggleStudy() {
    if (isStudying || isDoingAction) {
        clearInterval(studyInterval);
        isStudying = false;
    } else {
        let studyProgress = 0;
        document.getElementById('study-progress').style.width = '0%'; // Set initial width to 0%
        studyInterval = setInterval(function () {
            studyProgress += 1;
            document.getElementById('study-progress').style.width = studyProgress + '%';

            if (studyProgress >= 100) {
                clearInterval(studyInterval);
                isStudying = false;
            }

            let intelligence = parseInt(document.getElementById('intelligence').innerText);
            intelligence += 5;
            document.getElementById('intelligence').innerText = intelligence;
        }, 100);
        isStudying = true;
    }
}

/*
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
    document.getElementById('money').innerText = '1000';
    document.getElementById('intelligence').innerText = '50';
    document.getElementById('charisma').innerText = '50';
    document.getElementById('fitness').innerText = '50';

    // Restart the reincarnation timer
    startReincarnationTimer();
}

// Start the reincarnation timer when the page loads
document.addEventListener('DOMContentLoaded', function () {
    startReincarnationTimer();
});
*/

document.getElementById('work-button').addEventListener('click', function () {
    toggleWork();
    document.getElementById('work-button').innerText = isWorking ? 'Work' : 'Stop Work';
});

document.getElementById('study-button').addEventListener('click', function () {
    toggleStudy();
    document.getElementById('study-button').innerText = isStudying ? 'Study' : 'Stop Study';
});
