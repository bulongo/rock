//Exercises from the book eloquent javascript

/*
//EXERCISE ONE

let tri = '#';
let x = 0;


for(let x = 0;x < 7;x++){
	console.log(tri);
	tri = tri + '#';
}

//alternatively
//while(x < 7){
//	console.log(tri);
//	tri = tri + '#';
//	x++;
//}


//EXERCISE TWO
function printer(){
	for(let x = 1;x <= 100;x++){
		if((x % 3 == 0) && (x % 5 == 0)){
			console.log('FizzBuzz');
		}else if((x % 3 == 0) && ( x % 5 !== 0)){
			console.log('Fizz');
		}else if((x % 5 == 0) && (x % 3 !== 0)){
			console.log('Buzz');
		}else{
			console.log(x);
		}
	}
}

printer();

*/

//EXERCISE THREE
//let lineOne = []

let lineOne = '';
let width = 19;
let height = 191;

//should now output a grid of a given height and width.
//say if width == 20 and height == 40;

for(let x = 0;x <= height;x++){
	for(let y = 0;x <= height ;x++){
		//find a way of saying for every forty or whatever given number, this should
		//be the rows
		if((x == width) || (x % width == 0)){
			lineOne = lineOne + '\n';
		}else if(x % 2 == 0){
		 	lineOne = lineOne + '#';
		}else{
			lineOne = lineOne + ' ';
		}
	}
}

console.log(lineOne);


const mulitply = (x) => console.log(x*x);

mulitply(9);

