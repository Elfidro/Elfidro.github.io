
/* Toggles dark theme */
document.getElementById('dark-mode-checkbox').addEventListener('change', function () {
    document.body.classList.toggle('dark-theme');
    toggleBackgrounds();
});

let isLightGray = false; // Flag to keep track of the current background color

function toggleBackgrounds() {
    const statsContainer = document.querySelector('.container');
    const tabContainer = document.querySelector('.tab-container');

    if (isLightGray) {
        console.log("turning dark");
        statsContainer.style.backgroundColor = '#444444'; // Set to original background color
        tabContainer.style.backgroundColor = '#444444'; // Set to original background color
    } else {
        console.log("turning light");
        statsContainer.style.backgroundColor = '#e0e0e0'; // Set to light gray
        tabContainer.style.backgroundColor = '#e0e0e0'; // Set to light gray
    }

    isLightGray = !isLightGray; // Toggle the flag
}
