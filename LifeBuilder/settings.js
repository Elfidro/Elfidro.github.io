
/* Toggles dark theme */
document.getElementById('dark-mode-checkbox').addEventListener('change', function () {
    document.body.classList.toggle('dark');
    //toggleBackgrounds();
});

//let isLightGray = false; // Flag to keep track of the current background color

//function toggleBackgrounds() {
//    const statsContainer = document.querySelector('.container');
//    const tabContainer = document.querySelector('.tab-container');
//    const selectedTabContainer = document.querySelector('.selected-tab-container');
//    const tabButton = document.querySelector('.tab-button');

//    if (isLightGray) {
//        console.log("turning dark");
//         // Set to dark gray background color
//        statsContainer.style.backgroundColor = '#444444';
//        tabContainer.style.backgroundColor = '#444444';
//        selectedTabContainer.style.backgroundColor = '#444444';
//        tabButton.style.backgroundColor = '#444444';
//        tabButton.style.color = '#fff';
//    } else {
//        console.log("turning light");
//         // Set to light gray background color
//        statsContainer.style.backgroundColor = '#e0e0e0';
//        tabContainer.style.backgroundColor = '#e0e0e0';
//        selectedTabContainer.style.backgroundColor = '#e0e0e0';
//        tabButton.style.backgroundColor = '#e0e0e0';
//        tabButton.style.color = '#000000';
//    }

//    isLightGray = !isLightGray; // Toggle the flag
//}
