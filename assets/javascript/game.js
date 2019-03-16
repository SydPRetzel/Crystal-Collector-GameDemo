
// JavaScript function that wraps everything
$(document).ready(function () {

    // GLOBALS
    var TIMEOUT_MS = 1; // Pause the code execution for window to render.
    var MIN_TARGET_NUM = 19;
    var MAX_TARGET_NUM = 120;
    var MIN_CRYSTAL_NUM = 1;
    var MAX_CRYSTAL_NUM = 12;
    var targetNumber = 0;
    var playerTotal = 0;
    var wins = 0;
    var losses = 0;
    var redCrystalValue = 0;
    var blueCrystalValue = 0;
    var yellowCrystalValue = 0;
    var greenCrystalValue = 0;

    // FUNCTIONS
    function initializeGame() {
        // Compute new target number.
        targetNumber = Math.floor(Math.random() * (MAX_TARGET_NUM - MIN_TARGET_NUM)) + MIN_TARGET_NUM;
        updateTargetNumber();

        // Initialize player total.
        playerTotal = 0;
        updatePlayerTotal();


        // Update the wins and losses.
        updateWins();
        updateLosses();

        // Compute new crystal values.
        redCrystalValue = Math.floor(Math.random() * (MAX_CRYSTAL_NUM - MIN_CRYSTAL_NUM)) + MIN_CRYSTAL_NUM;
        blueCrystalValue = Math.floor(Math.random() * (MAX_CRYSTAL_NUM - MIN_CRYSTAL_NUM)) + MIN_CRYSTAL_NUM;
        yellowCrystalValue = Math.floor(Math.random() * (MAX_CRYSTAL_NUM - MIN_CRYSTAL_NUM)) + MIN_CRYSTAL_NUM;
        greenCrystalValue = Math.floor(Math.random() * (MAX_CRYSTAL_NUM - MIN_CRYSTAL_NUM)) + MIN_CRYSTAL_NUM;
    }

    // Update Target Number
    function updateTargetNumber() {
        console.log("targetNumber : " + targetNumber);
        console.log($("#targetNumber").text(targetNumber));
    }

    // Update Player Total
    function updatePlayerTotal() {
        console.log("playerTotal : " + playerTotal);
        console.log($("#playerTotal").text(playerTotal));
    }

    // Update Wins
    function updateWins() {
        console.log("wins : " + wins);
        console.log($("#wins").text(wins));
    }

    // Update Losses
    function updateLosses() {
        console.log("losses : " + losses);
        console.log($("#losses").text(losses));
    }

    // Process the turn using the crystal value.
    function processTurn(crystalValue) {
        // Increment player total
        playerTotal += crystalValue;
        updatePlayerTotal();

        // Check for overflow, underflow or match and update wins/losses appropriately.
        // Returns true for new game.
        if (checkNumbers()){
            // Initialize game.
            initializeGame();
        }        
    }

    // Check for overflow, underflow or match and update wins/losses appropriately.
    function checkNumbers() {
        var newGame = false; // Start a new game?

        if (playerTotal > targetNumber) { // Overflow
            // Increment losses.
            losses++;
            updateLosses();
            newGame = true;
            setTimeout(function () { alert("You Lost"); }, TIMEOUT_MS);
        }
        else if (playerTotal === targetNumber) { // Match
            // Increment wins.
            wins++;
            updateWins();
            newGame = true;
            setTimeout(function () { alert("You Won!"); }, TIMEOUT_MS);
        }

        return newGame;
    }

    // CALLBACKS

    // Crystal Buttons
    // RED
    $("#redCrystal").on("click", function () {
        console.log("redCrystalValue : " + redCrystalValue);
        processTurn(redCrystalValue);
        console.log($("#redCrystal"));
    });

    // BLUE
    $("#blueCrystal").on("click", function () {
        console.log("blueCrystalValue : " + blueCrystalValue);
        processTurn(blueCrystalValue);
    });

    // YELLOW
    $("#yellowCrystal").on("click", function () {
        console.log("yellowCrystal : " + yellowCrystalValue);
        processTurn(yellowCrystalValue);
    });

    // GREEN
    $("#greenCrystal").on("click", function () {
        console.log("greenCrystal : " + greenCrystalValue);
        processTurn(greenCrystalValue);
    });

    // RUN CODE
    initializeGame();

});
