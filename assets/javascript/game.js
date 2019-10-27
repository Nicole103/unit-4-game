// the Crystal Collector Game JS //


//------varables------//

//varables for counting the wins and losses//
var wins = 0;
var losses = 0;

//varables for each crystal random number for turn//
    //red, blue, yellow, green//
var redCrystalOptions = ["1","2","3","4"];
var blueCrystalOptions = ["5","7","9","11"];
var purpleCrystalOptions = ["8","12","16","20"];
var greenCrystalOptions = ["25","30","35","40"];

var redCrystal = " ";
var blueCrystal = " ";
var purpleCrystal = " ";
var greenCrystal = " ";
//varable for matching number //
    //computerChoice, computerOptions//
var matchNumberOptions = ["75","77","84","81","99","100","101","113","120","127"]
var selectedMatchNumber = " ";


//varable for current count/sum of numbers//
// var currentUserSum = 0;
var counter = 0;


//------functions-------//
//start function//


var reset = function() {
    counter = 0;

    selectedMatchNumber = matchNumberOptions[Math.floor(Math.random()*matchNumberOptions.length)];
    document.querySelector("#match-number").innerHTML = selectedMatchNumber;
    console.log(selectedMatchNumber);
    

    redCrystal = redCrystalOptions[Math.floor(Math.random()*redCrystalOptions.length)];
    console.log(redCrystal);
    $("#red-crystal").attr(redCrystal);

    blueCrystal = blueCrystalOptions[Math.floor(Math.random()*blueCrystalOptions.length)];
    console.log(blueCrystal);
    $("#blue-crystal").attr(blueCrystal);
   

    purpleCrystal = purpleCrystalOptions[Math.floor(Math.random()*purpleCrystalOptions.length)];
    console.log(purpleCrystal);
    $("#purple-crystal").attr(purpleCrystal);
  

    greenCrystal = greenCrystalOptions[Math.floor(Math.random()*greenCrystalOptions.length)];
    console.log(greenCrystal)
    $("#green-crystal").attr(greenCrystal);
}   

$("#red-crystal").on("click", function() {
    redCrystal = parseInt(redCrystal);
    selectedMatchNumber = parseInt(selectedMatchNumber);
    counter += redCrystal;
    document.querySelector("#counter-number").innerHTML = counter;
    // alert("you clicked on the red crystal! Your total so far is: " + counter);

    if (counter === selectedMatchNumber) {
        // alert("You Win!");
        wins++;
        document.querySelector("#wins").innerHTML = "Wins:" + wins;
        reset();
    }
    else if (counter > selectedMatchNumber) {
        // alert("You lose...");
        losses++;
        document.querySelector("#losses").innerHTML = "Losses:" + losses;
        reset();
    }
});

$("#blue-crystal").on("click", function() {
    blueCrystal = parseInt(blueCrystal);
    selectedMatchNumber = parseInt(selectedMatchNumber);
    counter += blueCrystal;
    document.querySelector("#counter-number").innerHTML = counter;
    // alert("you clicked on the blue crystal! Your total so far is: " + counter);

    if (counter === selectedMatchNumber) {
        alert("You Win!");
        wins++;
        document.querySelector("#wins").innerHTML = "Wins:" + wins;
        reset();
    }
    else if (counter>selectedMatchNumber) {
        // alert("You lose...");
        losses++;
        document.querySelector("#losses").innerHTML = "Losses:" + losses;
        reset();
    }
});
$("#purple-crystal").on("click", function() {
    purpleCrystal = parseInt(purpleCrystal);
    selectedMatchNumber = parseInt(selectedMatchNumber);
    
    counter += purpleCrystal;
    document.querySelector("#counter-number").innerHTML = counter;
    // alert("you clicked on the purple crystal! Your total so far is: " + counter);

    if (counter === selectedMatchNumber) {
        // alert("You Win!");
        wins++;
        document.querySelector("#wins").innerHTML = "Wins:" + wins;
        reset();
    }
    else if (counter > selectedMatchNumber) {
        // alert("You lose...");
        losses++;
        document.querySelector("#losses").innerHTML = "Losses:" + losses;
        reset();
    }
});
$("#green-crystal").on("click", function() {
    greenCrystal = parseInt(greenCrystal);
    selectedMatchNumber = parseInt(selectedMatchNumber);
    counter += greenCrystal;
    document.querySelector("#counter-number").innerHTML = counter;
    // alert("you clicked on the purple crystal! Your total so far is: " + counter);

    if (counter === selectedMatchNumber) {
        // alert("You Win!");
        wins++;
        document.querySelector("#wins").innerHTML = "Wins:" + wins;
        reset();
    }
    else if (counter > selectedMatchNumber) {
        // alert("You lose...");
        losses++;
        document.querySelector("#losses").innerHTML = "Losses:" + losses;
        reset();
    }
});
reset();
// reset function//
//     reset the varables for each crystal to new random number//
//     computer choose a new match number//
//     reset sum counter to 0//

// randomization for each crystal for the turn//
// randomly select a number the user will try to match by clicking on the crystals//
//     computerchoice function//
// restart/reset function for the user to try again. this will reset the selected random numbers for all 5 fields//