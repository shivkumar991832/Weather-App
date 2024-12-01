// const apikey = "142f9dfa6d3d3a688f3e1547fbec4af0";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");

// async function checkWeather(city) {
//     const response = await fetch(apiUrl + city + `&appid=${apikey}`);
//     var data = await response.json();
//     // this data have info about all cities and their temp

//     console.log(data);
    
//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + "°c";
//     // math round remove decimal means mekes standard formate
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

// }

// searchBtn.addEventListener("click" , ()=> {
//  checkWeather(searchBox.value);
// })
  

    
 
// this checkWeather have cities info ,written in the input field
// searchBox.value gives you city name








