let workInterval;
let studyInterval;
let isWorking = false;
let isStudying = false;
let isDoingAction = false;
let workProgress = 0

function toggleWork() {
    if (isWorking) {
        clearInterval(workInterval);
        isWorking = false;
    } else {
        workInterval = setInterval(function () {
            // Increment work by value
            workProgress += 10;
            // Increase progress bar by %
            document.getElementById('work-progress').style.width = workProgress + '%';

            // Checks if bar is full, if true then execute code
            if (workProgress >= 100) {
                workProgress = 0;                                               // Reset progress bar to 0%
                money = parseInt(document.getElementById('money').innerText);   // Retrieve html element 'money' for use in javascript
                money += 10;                                                    // Increment money by 10
                checkBuyTent();                                                 // Check if user can make purchases
                document.getElementById('money').innerText = money;             // Paste new value of 'money' to html
            }
        }, 100);
        isWorking = true;
    }
}


/* Reincarnation Code */

//function startReincarnationTimer() {
//    setTimeout(function () {
//        if (confirm("Congratulations! You can now reincarnate and start over with improved bonuses to your skills. Would you like to reincarnate?")) {
//            // Reset skills and bonuses here
//            resetSkills();
//        }
//    }, 60000); // 60 seconds in milliseconds
//}

//function resetSkills() {
//    // Reset skills and bonuses logic here
//    document.getElementById('money').innerText = '1000';
//    document.getElementById('intelligence').innerText = '50';
//    document.getElementById('charisma').innerText = '50';
//    document.getElementById('fitness').innerText = '50';

//    // Restart the reincarnation timer
//    startReincarnationTimer();
//}

//// Start the reincarnation timer when the page loads
//document.addEventListener('DOMContentLoaded', function () {
//    startReincarnationTimer();
//});


/* Progress bar code */

const progressBars = document.getElementsByClassName("progress-bar");

for (let i = 0; i < progressBars.length; i++) {
    progressBars[i].addEventListener('click', function () {
        toggleWork();
    });
}

//document.getElementById('work-button').addEventListener('click', function () {
//    toggleWork();

//    /*document.getElementById('work-button').innerText = isWorking ? 'Work' : 'Stop Work';*/
//});
