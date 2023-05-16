function main() { 

const API_KEY = "241e960d106a4cd0756fc55e04a51a6d";
const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const city = document.querySelector(".city");
const temperatute = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchInput = document.querySelector(".app__search-box input");
const button = document.querySelector(".app__search-box button");
const mainImage = document.querySelector(".app__weather-main__image");
const weather = document.querySelector(".app__weather-main")
const error = document.querySelector(".error")


async function checkWeather(city) {
    const response = await fetch(URL + city + `&appid=${API_KEY}`);
    if(response.status == 404) {
        error.style.display = "block";
        weather.style.display = "none";
    }
    const data = await response.json()
    
    city.innerHTML = data.name;
    temperatute.innerHTML = `${Math.trunc(data.main.temp)}&#8451`;
    humidity.innerHTML = data.main.humidity + " %";
    wind.innerHTML = data.wind.speed + " km/h";

    switch (data.weather[0].main) {
        case "Clouds": mainImage.innerHTML = `<img src="./images/cloud-solid.svg" alt="">`;
        break;
        
        case "Rain": mainImage.innerHTML = `<img src="./images/cloud-rain-solid.svg" alt="">`;
        break;

        case "Clear": mainImage.innerHTML = `<img src="./images/sun-solid.svg" alt="">`;
        break;
    }
    weather.style.display = "block";
    error.style.display = "none";
}


button.addEventListener("click", e => {
    city.innerHTML = searchInput.value[0].toUpperCase() + searchInput.value.slice(1);
    checkWeather(searchInput.value)
    searchInput.value = "";
})

searchInput.addEventListener("keydown" , e => {
    if(e.keyCode === 13) {
        city.innerHTML = searchInput.value[0].toUpperCase() + searchInput.value.slice(1);
      checkWeather(searchInput.value);
        searchInput.value = "";
    }
})
}

try {
    main()
} catch (error) {
    alert(error)
}
