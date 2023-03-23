// let buttons = document.querySelectorAll(".button");
// let input = document.getElementById("input");
// buttons.forEach((button) => {
//   button.addEventListener("click", (e)=>{
//   		if(e.target.innerText == "="){
//   		console.log("clicked");
//   		document.getElementById("input").value = eval(input.value);
//   	}
//   	else if(e.target.innerText === "C"){
//   		document.getElementById("input").value = " ";
//   	}
//   	else{
//   			console.log(e.target.innerText);
//   	input.value = input.value + e.target.innerText;
//   	let string = input.value;
//   	}
//   })
// })

let buttons = document.querySelectorAll(".button");
let input = document.getElementById("input");
buttons.forEach((button) =>{
	button.addEventListener("click", (e)=>{
		if(e.target.innerText == "="){
			document.getElementById("input").value = eval(input.value)
		}
		else if(e.target.innerText == "C"){
			document.getElementById("input").value = "";
		}
		else{
			document.getElementById("input").value= input.value +event.target.innerText;
		}
	})
})
