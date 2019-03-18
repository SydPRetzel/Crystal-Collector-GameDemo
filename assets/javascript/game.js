
// JavaScript function that wraps everything
$(document).ready(function () {

    // GLOBALS
    var TIMEOUT_MS = 1; // Pause the code execution for window to render.
    var MIN_TARGET_NUM = 19;
    var MAX_TARGET_NUM = 120;
    var MIN_CRYSTAL_NUM = 1;
    var MAX_CRYSTAL_NUM = 12;

    // Indices into crystal value array.
    var RED_IDX = 0;
    var BLUE_IDX = 1;
    var YELLOW_IDX = 2;
    var GREEN_IDX = 3;
    var crystalValues = [0,0,0,0];

    var targetNumber = 0;
    var playerTotal = 0;
    var wins = 0;
    var losses = 0;

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

        // Reset all crystal values.
        for (var i=0; i<crystalValues.length; i++)
        {
            crystalValues[i] = 0;
        }
        // Compute a unique random number for each crystal.
        for (var i=0; i<crystalValues.length; i++)
        {
            var myRandNum = 0;
            // Keep generating random numbers until a unique one is found.
            while (crystalValues.indexOf(myRandNum)!=-1)
            {
                myRandNum = Math.floor(Math.random() * (MAX_CRYSTAL_NUM - MIN_CRYSTAL_NUM)) + MIN_CRYSTAL_NUM;
            }
            console.log("New unique crystal num : " + myRandNum);
            crystalValues[i] = myRandNum;
        }
        console.log("crystalValues : " + crystalValues);
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
        console.log("crystalValues : " + crystalValues);
        console.log("crystalValues[RED_IDX] : " + crystalValues[RED_IDX]);
        processTurn(crystalValues[RED_IDX]);
        console.log($("#redCrystal"));
    });

    // BLUE
    $("#blueCrystal").on("click", function () {
        console.log("crystalValues : " + crystalValues);
        console.log("crystalValues[BLUE_IDX] : " + crystalValues[BLUE_IDX]);
        processTurn(crystalValues[BLUE_IDX]);
    });

    // YELLOW
    $("#yellowCrystal").on("click", function () {
        console.log("crystalValues : " + crystalValues);
        console.log("yellowCrystal : " + crystalValues[YELLOW_IDX]);
        processTurn(crystalValues[YELLOW_IDX]);
    });

    // GREEN
    $("#greenCrystal").on("click", function () {
        console.log("crystalValues : " + crystalValues);
        console.log("greenCrystal : " + crystalValues[GREEN_IDX]);
        processTurn(crystalValues[GREEN_IDX]);
    });

    // RUN CODE
    initializeGame();

});
