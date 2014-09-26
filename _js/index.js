//variables
var resultText = document.getElementById("result");
var coin = document.getElementById("coin");
var headsScore = 0;
var tailsScore = 0;
var headsCount = document.getElementById("headsResultPara");
var tailsCount = document.getElementById("tailsResultPara");


//create a coinFlip function
function coinFlip() {
  //Create a random numer
var randomNumber = Math.floor((Math.random() * 10) +1); 
  //if randomNumber is less than 10 heads else tails
  if (randomNumber >= 5) {
    coin.className="heads";
    headsScore ++;
    headsCount.innerHTML = headsScore;
  } else {
    coin.className="tails";
    tailsScore ++;
    tailsCount.innerHTML = tailsScore;
  }
  coinResult();
}

//ensures page loads a random side
/*coinFlip();*/

//add a click event listener to submit button to trigger coinFlip function
document.getElementById("flipButton").addEventListener("click", coinFlip);

//set Up an alert to say which side.
function coinResult() {
  if (coin.className === "heads") {
    resultText.innerHTML="Heads";
  } else {
    resultText.innerHTML="Tails";
  }
}

//reset button
  //declare var  
   document.getElementById("resetButton").addEventListener("click", reset);  

  function reset() {
    headsScore = 0;
    headsCount.innerHTML = headsScore;
    tailsScore = 0;
    tailsCount.innerHTML = tailsScore;
  }




