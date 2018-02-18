$(document).ready(function() {

//Variables
var Random=Math.floor(Math.random()*101+19)


  var gem1 = Math.floor(Math.random() * 11) +1;
  var gem2 = Math.floor(Math.random() * 11) +1;
  var gem3 = Math.floor(Math.random() * 11) +1;
  var gem4 = Math.floor(Math.random() * 11) +1;
  var wins =0;
  var losses =0;
  var userTotal =0;


//declarations
$('#numberWins').text(wins);
$('#numberLosses').text(losses);
$('#randomNumber').text(Random);

//functions
//reset function 
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 

//function for adding wins to the userTotal  
function win(){
  alert("You won!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  //function for adding losses to the userTotal
  function loss(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }

//sets up click function for gems
$('#one').on ('click', function(){
  userTotal = userTotal + gem1;
  console.log("New userTotal= " + userTotal);
  $('#finalTotal').text(userTotal); 
        //sets win/lose conditions
      if (userTotal == Random){
        win();
      }
      else if ( userTotal > Random){
        loss();
      }   
})  
$('#two').on ('click', function(){
  userTotal = userTotal + gem2;
  console.log("New userTotal= " + userTotal);
  $('#finalTotal').text(userTotal); 
      if (userTotal == Random){
        win();
      }
      else if ( userTotal > Random){
        loss();
      } 
})  
$('#three').on ('click', function(){
  userTotal = userTotal + gem3;
  console.log("New userTotal= " + userTotal);
  $('#finalTotal').text(userTotal);
//sets win/lose conditions
        if (userTotal == Random){
        win();
      }
      else if ( userTotal > Random){
        loss();
      } 
})  
$('#four').on ('click', function(){
  userTotal = userTotal + gem4;
  console.log("New userTotal= " + userTotal);
  $('#finalTotal').text(userTotal); 
    
        if (userTotal == Random){
        win();
      }
      else if ( userTotal > Random){
        loss();
      }
});   


});

