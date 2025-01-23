const API = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
const API_key =`17f0dceda878b2554df264ee4053b512`

const search = document.querySelector("#search")
const form = document.querySelector("form")
const weather = document.querySelector("#weather")

const getWeather = async(city) =>
{
weather.innerHTML= `<h2>Loading...</h2>`
const url = await fetch(API)
const data = await response.json()
return showWeather();
}

const showWeather = (data) =>
{
if(data.cod == 404)
{
weather.innerHTML = `<h2>Search is not found</h2>`
return 
}

innerHTML = `
<div>
<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""></img>
</div>
<div>
<h2>${data.main.temp} C</h2>
<h4>${data.weather[0].main}</h4>
</div>
} `
}

form.addEventListener("submit", function(event)
{
getWeather(search.value)
event.preventDefault();
}
)
