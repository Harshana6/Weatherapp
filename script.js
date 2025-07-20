const apikey = "1your_api_key_here"; 
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " KM/H";

    if (data.weather[0].main.toLowerCase() === "clouds") {
        weathericon.src = "images/clouds.png";
    } else if (data.weather[0].main.toLowerCase() === "clear") {
        weathericon.src = "images/clear.png";
    } else if (data.weather[0].main.toLowerCase() === "drizzle") {
        weathericon.src = "images/drizzle.png";
    } else if (data.weather[0].main.toLowerCase() === "humidity") {
        weathericon.src = "images/humidity.png";
    } else if (data.weather[0].main.toLowerCase() === "mist") {
        weathericon.src = "images/mist.png";
    } else if (data.weather[0].main.toLowerCase() === "rain") {
        weathericon.src = "images/rain.png";
    } else if (data.weather[0].main.toLowerCase() === "snow") {
        weathericon.src = "images/snow.png";
    } else if (data.weather[0].main.toLowerCase() === "wind") {
        weathericon.src = "images/wind.png";
    } else {
        weathericon.src = "images/search.png";
    }
}

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
});

