// get request
// post request

// async function getQuotes(){
// 	// fetch("").then().catch();
// 	//const response = await fetch("");
// }

// iffy in async (async ()=>{})();


let quoteContainer = document.getElementById("quote-container");
let quoteText = document.getElementById("quote");
let authorText = document.getElementById("author");
let twitterButton = document.getElementById("twitter");
let newQuoteButton = document.getElementById("new-quote");
let loader = document.querySelector("span.loader");

function loading(){
	loader.classList.remove("hide");
	quoteContainer.classList.add("hide");
}
function complete(){
	loader.classList.add("hide");
	quoteContainer.classList.remove("hide");
}
let apiQuotes = [];
function newQuote(){
	 // let randomIndex = Math.floor(Math.random* apiQuotes.length);
	let quote =  apiQuotes[Math.floor(Math.random()* apiQuotes.length)]
	 authorText.innerText = quote.author || "Unknown"; 

	 // when I use author text below the quote text it won't show up why?

	 quoteText.innerText = quote.text;
	 if(quote.text.length > 120){
	 	quoteText.classList.add("long-quote");
	 }
	 else{
	 	quoteText.classList.remove("long-quote");
	 }
	
	 /*if(!quote.author) {
		authorText.innerText = "Unknown";
	 }
	 else{
		 authorText.innerText = quote.author;
	 }
	 */
	 /* authorText.innerText = quote.author ? quote.author : "Unknown";
	 */
}
async function getQuotes(){
	loading();
	let apiURL = "https://type.fit/api/quotes";
	try{
		let response = await fetch(apiURL);
		apiQuotes = await response.json();
		newQuote();
		complete();
	}
	catch(error){
	}
}
function tweetQuote(){
	let twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.textContent}`;
	window.open(twitterURL, "_blank");
}
twitterButton.addEventListener("click",tweetQuote);

newQuoteButton.addEventListener("click" , newQuote);
getQuotes();