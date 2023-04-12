let imageConatiner = document.getElementById("image-container");
let loader = document.getElementById("loader");
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photoArray = [];

let count = 20;
let apiKey = "sxYvuWV_DWNoT8rSGN76QviiSvKfZSpyss5u56VqmV8";
let apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function sett(element, attributes){
	for(let key in attributes){
		element.setAttribute(key, attributes[key]);
	}
}
function displayPhotos(){
	imagesLoaded = 0;
	totalImages = photoArray.length;
	photoArray.forEach((photo) => {
	  let item = document.createElement("a");
	  sett(item, {
	  	href : photo.links.html,
	  	target : "_blank"
	  });
	  // item.setAttribute("href", photo.links.html)
	  // item.setAttribute("target", "_blank")
	  let img = document.createElement("img");
	  sett(img, {
	  	src :photo.urls.regular,
	  	alt : photo.alt_description,
	  	title : photo.alt_description,
	  });
	  // img.setAttribute("src", photo.urls.regular,);
	  // img.setAttribute("alt", photo.alt_description);
	  img.addEventListener("load",(e) => {
	  	imagesLoaded++;
	  	if(imagesLoaded == totalImages){
	  		ready = true;
	  		console.log("ready = " , ready)
	  	}
	  });
	  item.append(img);
	  imageConatiner.append(item);
	})
}

async function getPhotos(){
	try{
		let response = await fetch(apiURL);
		photoArray = await response.json();
		displayPhotos();
	}
	catch(error){
		console.log(error);
	}
}


window.addEventListener("scroll", ()=>{
	if((window.scrollY + window.innerHeight >= document.body.offsetHeight) && ready){
		ready = false;
		getPhotos();
		console.log("end");
	}
})
getPhotos();