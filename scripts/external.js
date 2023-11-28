function coinGame(){
	
	var bTryAgain=true;
	
	while(bTryAgain){
		
		//array of coin flip choices
		var flipChoices=["heads" , "tails"];
		
		var randomIndex= Math.floor(Math.random()*2);
		//testing line
		//alert(flipChoices[randomIndex]);
		
		var userF; //variable user's flip
		var compF; //variable computer's flip
		var score[0,0]; //zero index= user's score, one index computer's score
		var message;
		
		//user data
		userF=parseInt(prompt("Select heads or tails"));
		
		//comp data
		compF=randomIndex;
		
		if (userF==compF){
			message="You have won";
			score[0]++;
			
		}else{
			message="You have lost";
			score[1]++;
	}
	
	var sRepeat=prompt("Would you like to play again (Yes or No)?")
		if (sRepeat="No"||"no");{
			bTryAgain=false;
			{
	
	
}//end of function 