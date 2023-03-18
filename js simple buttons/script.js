function focusHere(event){
	event.target.style.border = "10px solid #F9DBBB"
}
let submitButton = document.getElementById("btn");
submitButton.addEventListener("click", (e)=>{
	let input = Number(document.getElementById("input").value);
	// if(input === "" || input === " " || input === undefined || input === null ){
	// 	let errorMessage = document.getElementById("errorMessage");
	// 	errorMessage.innerText = "can't be left empty";
	// 	document.getElementById("input").style.border = "10px solid red";
	// 	console.log("error")
	// }
	if(input === "" || input === " " || input === undefined || input === 0 ){
		let errorMessage = document.getElementById("errorMessage");
		errorMessage.innerText = "can't be left empty";
		document.getElementById("input").style.border = "10px solid red";
		console.log("error")
	}
	else{
		let box = document.getElementById("box");
	for(let i = 1; i<input;i++){
		let element = document.createElement("div");
		element.textContent = i;
		element.classList.add(i%2==0 ? "even" : "odd");
		box.appendChild(element);

	}
	}
})






