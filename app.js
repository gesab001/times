
var multiples;
var interval;
var counter = 0;
var gameNotStarted = true;

function hideMainElements(){
	document.getElementById("main").style.display = "none";
	document.getElementById("userResponse").style.display = "none";	
	
}

function showMainElements(){
	document.getElementById("main").style.display = "flex";
	document.getElementById("userResponse").style.display = "flex";	
	
}
function answerCheckTyping(user_answer){
	 document.getElementById("correctAnswer").style.display = "block";
 document.getElementById("correctAnswer").style.color = "black";
  var correctAnswer = parseInt(document.getElementById("correctAnswer").innerHTML);
  console.log(user_answer);


  //document.getElementById("answer").textContent= ;

  if (user_answer===correctAnswer){
	  //alert("CORRECT");	
	  var totalCorrect = parseInt(document.getElementById("totalCorrect").innerHTML) + 1;
	  document.getElementById("totalCorrect").innerHTML = totalCorrect;
	  	  document.getElementById("correctAnswer").innerHTML = "CORRECT";
  }else{
	  var totalCorrect = parseInt(document.getElementById("totalCorrect").innerHTML) - 1;
	  document.getElementById("totalCorrect").innerHTML = totalCorrect;
	  document.getElementById("correctAnswer").innerHTML = "WRONG! THE CORRECT ANSWER IS: " + correctAnswer;
	  document.getElementById("correctAnswer").style.color = "red";
	  
  }	
}

function makeMultiples(){
  var f1 = document.getElementById("numberToPractice").value;//getRandomIntMinMax(1, 12);
  multiples = getMultiples(f1);	
  console.log(multiples);
  document.getElementById("answers").innerHTML = multiples;

}

function getRandomIntMinMax(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}	

function getRandomInt(max) {
		  return Math.floor(Math.random() * max);
		}

function getMultiples(number){

   var result = [];
   for (var x=1; x<=12; x++){
	  var product =  x;
	  result.push(product);
   }
   return result;
}	


function startNewGame(){
  clearInterval(interval);
  counter = 0;
  gameNotStarted = true;
}

function stopTimer() {
  clearInterval(interval);
  gameNotStarted = true;
}
function startTimer(){
	var el = document.getElementById("timer");
	counter = counter + 1;
	el.innerHTML = "TIMER: " + counter;
	var totalCorrect = parseInt(document.getElementById("totalCorrect").innerHTML);
	console.log("totalCorrect: " + totalCorrect);
    if (totalCorrect>119){
		  stopTimer();
		  console.log("stop timer: ");
		  hideMainElements();
	}
}


function createQuestion(){
		 document.getElementById("correctAnswer").style.display = "none";
	  document.getElementById("answer").innerHTML= ""	;

  var  multipleIndex = getRandomInt(multiples.length); 
  if (multiples.length>0){
    f2 = multiples[multipleIndex];
  }else{
	 makeMultiples();
     multipleIndex = getRandomInt(multiples.length); 
  }
  f1 = document.getElementById("numberToPractice").value;
  f2 = multiples[multipleIndex];	 
  var question = f1.toString() + " x  "  +f2.toString();
  document.getElementById("correctAnswer").innerHTML = f1 * f2;
  document.getElementById("question").innerHTML = question;

    console.log(multiples);

  multiples.splice(multipleIndex, 1);
  if (gameNotStarted){	  
     counter = 0;
	 stopTimer();
     interval = setInterval(startTimer, 1000);
	 gameNotStarted = false;
  }	 

  



}