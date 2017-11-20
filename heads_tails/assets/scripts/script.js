$(document).ready(function(){
	console.log("yo");

  // Coin Flip JavaScript
  // These variables are declared for us.
  var headsCount = 0;
  var tailsCount = 0;
  var wins = 0;
  var losses = 0;

  function flipThatCoin(result) {

    let randomNumber = Math.floor(Math.random()*2);
 
    if(randomNumber === 0){
      setTimeout(()=>{
        $('#coin-landed').html('<img class="coinImg" src="./assets/images/greyhoundhead.svg">');
      }, 400);
      
    } else {
      setTimeout(()=>{
        $('#coin-landed').html('<img class="coinImg" src="./assets/images/greyhoundtail.svg">');
      }, 400);
      
    }
    if(result === randomNumber){
      wins++;
      setTimeout(()=>{
        $("#wins").text(wins);
      }, 420);
      
    } else {
      losses++;
      setTimeout(()=>{
        $("#losses").text(losses);
      }, 420);
      
    }
  }

  $("#heads").on("click", function() {
    $('#coin-guess').html('<img class="coinImg" src="./assets/images/greyhoundhead.svg">');
    headsCount++;
    $("#heads-chosen").text(headsCount);
    $("#guess").html("<b>Noggin</b>");
    //because 0 is heads, pass heads in
    flipThatCoin(0);
    reset();
  });

  $("#tails").on("click", function() {
    $('#coin-guess').html('<img class="coinImg" src="./assets/images/greyhoundtail.svg">');
    headsCount++;
    $("#tails-chosen").text(tailsCount);
    $("#guess").html("<b>Booty</b>");
    //because 1 is tails, pass tails in
    flipThatCoin(1);
    reset();
  });
  function reset(){
    setTimeout(()=>{
      $('#coin-guess').html('<img class="coinImg" src="./assets/images/question.png">');
      $('#coin-landed').html('<img class="coinImg" src="./assets/images/question.png">');
      $('#win-lose').text("");
      $('#guess').text("...");
    }, 1500);
   }



});