//let money = 400; // Initial amount of money


//function test() {
//    setTimeout(function () {
//        //console.log("Money:", money);
//        checkBuyTent();
//        test();
//    }, 1000); // 60 seconds in milliseconds
//}
//document.addEventListener('DOMContentLoaded', function () {
//    test();
//});


// Update the money display when it changes
function updateMoneyDisplay() {
    console.log("MoneyDisplay:", gameState.money);
    document.getElementById('money').innerText = gameState.money;
    checkBuyTent(); // Check if the player can buy the tent
}

// Function to check if the player can buy the tent
function checkBuyTent() {
    console.log("Checking if player can buy tent...");
    const tentPrice = 500; // Price of the shabby tent

    // If the player has enough money, enable the buy button
    if (gameState.money >= tentPrice) {
        document.getElementById('buy-tent-button').disabled = false;
    } else {
        document.getElementById('buy-tent-button').disabled = true;
    }
}

// Function to handle buying the shabby tent
function buyTent() {
    console.log("Button clicked!");
    const tentPrice = 500; // Price of the shabby tent

    if (gameState.money >= tentPrice) {
        console.log("Money after purchase:", money);
        gameState.money -= tentPrice; // Deduct the cost of the tent from the player's money
        updateMoneyDisplay(); // Update the displayed money
        alert('Congratulations! You have purchased a shabby tent.');
    }
}

// Add an event listener to the buy button
document.getElementById('buy-tent-button').addEventListener('click', buyTent);
