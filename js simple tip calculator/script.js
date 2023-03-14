/*	let billTotal;
	let tip;
	let food
function billAmount(event){
		 billTotal = Number(event.target.value);
		 // console.log(billTotal)
		 let outputTotal = document.getElementById('perPersonTotal');
		 outputTotal.innerText = `$ ${billTotal}`;
		}
function tipPercentage(event){
	 tip = Number(event.target.value)/100;
	 food = tip * billTotal
	 food = food + billTotal;
	 let outputTotal = document.getElementById('perPersonTotal');
		 outputTotal.innerText = `$ ${food}`;
}	
function increasePeople(){

	let plusButton = document.getElementById('numberOfPeople');
	plusButton.innerText++;
}

function decreasePeople(){
	let plusButton = document.getElementById('numberOfPeople');
	if(plusButton.innerText <= 1){
		return;
	}
	plusButton.innerText--;
	
}

// formula is ((tip/100)*total bill)+total bill  */


/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div

let billInput = document.getElementById('billTotalInput');
let tipinput = document.getElementById('tipInput');
let numberOfPeopleDiv = document.getElementById('numberOfPeople');
let perPersonTotal = document.getElementById('perPersonTotal');

// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
	// console.log(billInput.value);
	// console.log(numberOfPeople);

  // get bill from user input & convert it into a number
  

  // get the tip from user & convert it into a percentage (divide by 100)
  

  // get the total tip amount
  

  // calculate the total (tip amount + bill)
  

  // calculate the per person total (total divided by number of people)


  // update the perPersonTotal on DOM & show it to user

}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people


  // update the DOM with the new number of people


  // calculate the bill based on the new number of people

}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)

  
  // decrement the amount of people


  // update the DOM with the new number of people


  // calculate the bill based on the new number of people

}