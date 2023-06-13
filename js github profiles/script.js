const URL = "https://api.github.com/users/";
const main = document.getElementById("main");
const searchBox = document.getElementById("search")

async function getUser(userName) {
    const response = await fetch(URL+userName);
    const data = await response.json();
    console.log(data);

    const card = `
     <div class="card">
            <div>
                <img class="avatar" src="${data.avatar_url}" alt="Florin Pop">
            </div>
            <div class="user-info">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>

                <ul class="info">
                    <li>${data.followers}<strong>Followers</strong></li>
                    <li>${data.following}<strong>Following</strong></li>
                    <li>${data.public_repos}<strong>Repositories</strong></li>
                </ul>

                <div id="repos">

                </div>
            </div>
        </div> 
    `
    main.innerHTML = card;
    getRepos(userName);
}

// getUser("TrinayBhati")
const reposBox = document.getElementById("repos");
async function getRepos(userName){
    const response = await fetch(URL + userName + "/repos");
    const data = await response.json();
    console.log(data);
   data.forEach((item)=>{
    const elem = document.createElement("a");
   elem.classList.add("repo");
   elem.href = item.html_url;
   elem.innerText = item.name;
   elem.target = "_blank";
   repos.appendChild(elem);
   })
}

const formSubmit = () =>{
    if(searchBox != ""){
        console.log(searchBox.value)
        getUser(searchBox.value);
    }
    return false;
}
searchBox.addEventListener("focusout", formSubmit);




