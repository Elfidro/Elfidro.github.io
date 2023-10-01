function openTab(tabId) {
    // Hide all content sections
    var contents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }

    // Show the selected tab content
    var selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');
}
