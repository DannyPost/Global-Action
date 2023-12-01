function coinGame(){

	var bTryAgain=true;  //needs attention
	
	while(bTryAgain){    //needs attention
		
		//array of coin flip choices
		var flipChoices=["heads" , "tails"];    //works from here 
		
		var randomIndex= Math.floor(Math.random()*2);
		//testing line
		//alert(flipChoices[randomIndex]);
		
		var compF; //variable computer's flip
		var score = [0,0]; //zero index= user's score, one index computer's score
		var message;
		
		//user data
		var userF = prompt("Select heads or tails").toLowerCase(); //.toLowerCase makes all letters lower case 
		
		compF = flipChoices;   //needs attention
		
		//comp data
		compF = flipChoices[randomIndex];
		
		document.getElementById("game").innerHTML = message;
		
		if (userF === compF){
			message = "You have won";
			score[0]++;
			
		}else{
			message = "You have lost";
			score[1]++;
		}
	}
	
		if (sRepeat .toLowerCase() === "no");{  //needs attention
			bTryAgain=false;
		}
	
	
}//end of function 