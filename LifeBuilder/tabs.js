function openTab(tabId) {
    // Hide all content sections
    var contents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }

    //// Deactivate all tab buttons
    //var buttons = document.getElementsByClassName('tab-button');
    //for (var i = 0; i < buttons.length; i++) {
    //    buttons[i].classList.remove('active');
    //}

    // Show the selected tab content
    var selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');

    //// Activate the selected tab button
    //var selectedButton = document.querySelector('.tab-button[data-tab="' + tabId + '"]');
    //selectedButton.classList.add('active');
}
