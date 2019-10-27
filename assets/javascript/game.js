// the Crystal Collector Game JS //


//------varables------//

//varables for counting the wins and losses//
var wins = 0;
var losses = 0;

//varables for each crystal random number for turn//
    //red, blue, yellow, green//
var redCrystalOptions = ["1","2","3"];
var blueCrystalOptions = ["4","5","6"];
var purpleCrystalOptions = ["7","8","9"];
var greenCrystalOptions = ["10","11","12"];

var redCrystal = " ";
var blueCrystal = " ";
var purpleCrystal = " ";
var greenCrystal = " ";
//varable for matching number //
    //computerChoice, computerOptions//
var matchNumberOptions = [ "19", "20", "21", "22", "23", "24"," 25", "26",
    "27", "28", "29", "30", "31", "32", "33", "34","35", "36", "37", "38",
    "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
    "51", "52", "53"," 54", "55", "56", "57", "58", "59", "60", "61", "62",
    "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", 
    "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", 
    "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98",
    "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109",
    "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"]
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