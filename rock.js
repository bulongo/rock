//this is a simple rock, paper, scissors game

let choices = ['rock','paper','scissors'];
let playGame = confirm("Would you like to play rock paper scissors?");

function game(){
if(playGame){
	//let the user and the computer both enter values
	let playerChoice = prompt("Enter either rock,paper or scissors: ");
	let computerChoice = choices[Math.floor(Math.random() * 3)];
	//if you enter something invalid this will run
	if(choices.indexOf(playerChoice) === -1){
		alert("Please enter a valid value.");
		game();
	}
	//the same choice runs this part
	if(playerChoice === computerChoice){
		alert('You and the computer have chose the same item,try again.');
		game();
	}else if((playerChoice === 'paper' && computerChoice === 'scissors') 
		|| (playerChoice === 'rock' && computerChoice === 'paper') 
		|| (playerChoice === 'scissors' && computerChoice === 'rock'))
	{	
		alert('The computer wins, it chose ' + computerChoice);
	}else if((playerChoice === 'scissors' && computerChoice === 'paper') 
		|| (playerChoice === 'paper' && computerChoice === 'rock')
	  || (playerChoice ==='rock' && computerChoice === 'scissors'))
	{
		alert("Congratulations, you win. You chose " + playerChoice + " while the computer chose " + computerChoice);
	}
}
else{
	alert("okay, we are exiting now");
	}
}

game();
