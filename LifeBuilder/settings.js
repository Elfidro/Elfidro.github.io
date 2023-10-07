/* Toggles dark theme */
document.getElementById('dark-mode-checkbox').addEventListener('change', function () {
    document.body.classList.toggle('dark');
});

document.getElementById('debug-checkbox').addEventListener('change', function () {
    var jobs = document.getElementsByClassName('hidden');

    for (var i = 0; i < jobs.length; i++) {
        jobs[i].classList.remove('hidden');
    }
});
