function welcomeUser(){
	var name = prompt("Enter your name:");
	alert("Welcome " + name + "!");
}

function largerInteger(){
	var number1 = parseInt(prompt("Enter a number"));
	var number2 = parseInt(prompt("Enter another number"));
	if (number1 > number2) {
		alert("The first number: " + number1);
	} else if (number2 > number1){
		alert("The second number: " + number2);
	} else{
		alert("error")
	}
}

function positiveNegative(){
	var number1 = parseInt(prompt("Enter a number"));
	var number2 = parseInt(prompt("Enter another number"));
	var number3 = parseInt(prompt("Enter a third number"));
	var x = number1 + number2 + number3;
	if (x < 0){
		alert("The product is negative");
	} else if (x > 0){
		alert("The product is positive");
	} else{
		alert("error")
	}
}

function orderedNumbers(){
	var number1 = parseInt(prompt("Enter a number"));
	var number2 = parseInt(prompt("Enter another number"));
	var number3 = parseInt(prompt("Enter a third number"));
	if (number1 > number2 > number3){
		alert(number1 + ", " + number2 + ", " + number3);
	} else if (number1 > number3 > number2){
		alert(number1 + ", " + number3 + ", " + number2);
	} else if (number2 > number1 > number3){
		alert(number2 + ", " + number1 + ", " + number3);
	} else if (number2 > number3 > number1){
		alert(number2 + ", " + number3 + ", " + number1);
	} else if (number3 > number1 > number2){
		alert(number3 + ", " + number1 + ", " + number2);
	} else if (number3 > number2 > number1){
		alert(number3 + ", " + number2 + ", " + number1);
	} 
}

function namePlease(userName){
	if (userName = "Tidalwave001"){
		console.log("Hello " + userName);
	} else if (userName = "Joe"){
		console.log("Welcome " + userName);
	} else {
		console.log("Invalid username");
	}
}

namePlease("Joe");

function yoMama(age){
	if (age<0){
		console.log("that can't be right");
	} else if (age<32){
		console.log("you have time left");
	} else{
		console.log("wow that's old");
	}
}

function countingLoop(number){
	 if (number%3==0 && number%5==0){
		console.log("ThreeFive!")
	} else if (number%5==0){
		console.log("Five!")
	} else if (number%3==0){
		console.log("Three!")
	} else {
		console.log(number)
	}
}
for (i = 1; i < 101; i++)
	countingLoop(i);

function guessNumber(){
	var guess = parseInt(prompt("I'm thinking of a number..."))
}