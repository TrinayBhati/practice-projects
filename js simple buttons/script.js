function focusHere(event){
	event.target.style.border = "10px solid #F9DBBB"
}
let inputButton = document.getElementById("input");
let keyFunction = (e)=>{
	e.target.style.color = "red";
	console.log(e.target.value);
}
inputButton.addEventListener("keydown", keyFunction)

let submitButton = document.getElementById("btn");
submitButton.addEventListener("click", (e)=>{
	let input = Number(document.getElementById("input").value);
	if(input === "" || input === " " || input === undefined || input === 0 ){
		let errorMessage = document.getElementById("errorMessage");
		errorMessage.innerText = "can't be left empty";
		document.getElementById("input").style.border = "10px solid red";
		console.log("error")
	}
	else{
		let box = document.getElementById("box");
		for(let i = 1; i<input+1;i++){
			let element = document.createElement("div");
			element.textContent = i;
			element.classList.add(i%2==0 ? "even" : "odd") ;
			box.appendChild(element);
			element.addEventListener("mouseover", () => {
				element.style.backgroundColor = "#002B5B";
			});
			element.addEventListener("mouseout", () => {
				element.style.backgroundColor = "#245953";
			});


		}

	}
})






