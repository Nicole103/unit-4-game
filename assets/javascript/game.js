// the Crystal Collector Game JS //


//------varables------//

//varables for counting the wins and losses//
var wins = 0;
var looses = 0;

//varables for each crystal random number for turn//
    //red, blue, yellow, green//
var redCrystal = " ";
var blueCrystal = " ";
var yellowCrystal = " ";
var greenCrystal = " ";

//varable for matching number //
    //computerChoice, computerOptions//
var selectedMatchNumber = " ";

//varable for current count/sum of numbers//
var currentUserSum = 0;
var counter = 0;


//------functions-------//
//onclick function to take the value from the image to add to the sum//
$("#red-crystal").on("click", function() {

    alert("you clicked on the red crystal!");

});

//if function to continue until either the player over clicks or under clicks (if the sum is < the match number click again)//
//else if function - if the sum is === the match number mark wins and reset function//
//else function- if sum is > the match number mark looses and reset function//

//reset function//
    //reset the varables for each crystal to new random number//
    //computer choose a new match number//
    //reset sum counter to 0//

//randomization for each crystal for the turn//
//randomly select a number the user will try to match by clicking on the crystals//
    //computerchoice function//
//restart/reset function for the user to try again. this will reset the selected random numbers for all 5 fields//

