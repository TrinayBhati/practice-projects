const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

async function getMovies(url){
    const response = await fetch(url);
    const data = await response.json();
    showMovies(data);
};
getMovies(APIURL);

const moiveBox = document.querySelector("#movie-box")
const showMovies = (data) =>{
    moiveBox.innerHTML = "";
    data.results.forEach((result) =>{
        const imagePath = result.poster_path === null ? "image not found" : IMGPATH + result.poster_path;
        const box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML = `
            <img src="${imagePath}" alt="none"/>
            <div class="overlay">
            <div class="title"> 
            <h2> ${result.original_title}  </h2>
            <span> ${result.vote_average} <span>
            </div>
            <h3>Overview:</h3>
            <p> 
            ${result.overview}
            </p>
            </div>
        `
        moiveBox.appendChild(box)
        console.log("run")
    })
}
const search = document.querySelector("#search")
search.addEventListener("keyup", (e) => {
    if(e.target.value != ""){
        getMovies(SEARCHAPI + e.target.value);
    }
    else{
        getMovies(APIURL);
    }
})





