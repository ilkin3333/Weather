let mainInput = document.querySelector("#input");
let mainButton = document.querySelector(".search-button");
let cityInfo = document.querySelector(".city-info");
let cityName = document.querySelector(".city-name");
let sun = document.querySelector(".sun");
let degree = document.querySelector(".degree");
let skyInfo = document.querySelector(".sky-info");
let rutubet = document.querySelector(".rutubet");
let kulek = document.querySelector(".kulek");
let apiKey = "30d76fca86f7df50751291a76163f2be";
let bulud = "cokbulutlu.jpg";
let azbulut = "image/clouds.png";
let gunes = "image/clear.png";



async function requestApi(city){
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


    try {
        const response = await fetch(api);
        const data = await response.json();
        degree.innerText = Math.round(+(data.main.temp) - 273.15) + ' deg';
        degree.style.color = 'white';
        degree.style.fontSize = '50px'
        cityName.innerText = data.name;
        cityName.style.color= 'white';
        cityName.style.fontSize = '50px'
        if(data.weather[0].description.includes("clear sky")) {
            sun.style.backgroundImage =`url(${gunes})`;
            sun.style.backgroundSize = 'cover';
        }
        else if (data.weather[0].description.includes("few clouds")){
            sun.style.backgroundImage =`url(${azbulut})`;
            sun.style.backgroundSize = 'cover';
        }
        else if (data.weather[0].description.includes("overcast clouds")){
            sun.style.backgroundImage =`url(${azbulut})`;
            sun.style.backgroundSize = 'cover';
        }
        
      
        skyInfo.innerText = data.weather[0].description;
skyInfo.style.color = 'white'
skyInfo.style.fontSize = '35px'
        rutubet.innerText = "Rutubet"+ " "+ data.main.humidity + "%";
        rutubet.style.color = 'white'
        rutubet.style.fontSize = '35px'
        kulek.innerText = "Kulek" + " "+ Math.round(data.wind.speed)*36/10 + 'km/h';
        kulek.style.color = 'white'
        kulek.style.fontSize = '35px'
        
        cityInfo.style.display = "block";
    } catch (error) {
        console.log("Hata:", error);
    }
}


mainButton.addEventListener("click", function() {
    requestApi(mainInput.value);
});


mainInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        requestApi(mainInput.value);
    }
});