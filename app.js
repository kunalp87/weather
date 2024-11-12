let url="https://api.openweathermap.org/data/2.5/weather?&appid=1d018d72e3199bce0363e1a7ff706ea9&units=metric&q=";
let temp=document.querySelector(".temp");
let city=document.querySelector(".city");
let humidity=document.querySelector(".humidity");
let body=document.querySelector("body")
let wind=document.querySelector(".wind");
let searchBox=document.querySelector("#search-box");
let searchBtn=document.querySelector("#search-btn");
let weatherImg=document.querySelector(".img");
async function checkWeather(q){
    const response=await fetch(url+q);

    var data =await response.json();
    console.log(data);
    temp.innerHTML=Math.round(data.main.temp)+"°c";
    city.innerHTML=data.name;
    humidity.innerHTML=data.main.humidity+"%";
    wind.innerHTML=data.wind.speed+"km/h"
    if(data.weather[0].main=="Clear"){
        weatherImg.style.backgroundImage="url(clear.png)";
    }
    else if(data.weather[0].main=="Clouds"){
        weatherImg.style.backgroundImage="url(clouds.png)";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherImg.style.backgroundImage="url(drizzle.png)";
    }
    else if(data.weather[0].main=="Humidity"){
        weatherImg.style.backgroundImage="url(humidity.png)";
    }
    else if(data.weather[0].main=="Rain"){
        weatherImg.style.backgroundImage="url(rain.png)";
    }
    else if(data.weather[0].main=="Snow"){
       weatherImg.style.backgroundImage="url(snow.png)";
    }
    
    
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
    setTimeout(() => {
        searchBox.value="";
    }, 1000);
})


