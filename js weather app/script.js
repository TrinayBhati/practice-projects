const apiKey = `3265874a2c77ae4a04bb96236a642d2f`;
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

async function getWeather(city){
    weather.innerHTML = `<h2> Loading... <h2>`
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
     showWeather(data);
}

const showWeather = (data) =>{
    if(data.cod == "404"){
        weather.innerHTML = "<h2> Error <h2>";
        return;
    }
    weather.innerHTML = `<div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            </div>
            <div>
                <h2>${data.main.temp} ℃</h2>
                <h4>${data.weather[0].main} </h4>
            </div>`
}

form.addEventListener("submit", (e)=>{
    getWeather(search.value);
    e.preventDefault();
})

