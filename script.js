document.getElementById('getWeather').addEventListener('click', getWeather);

async function getWeather(){
    const city = document.getElementById('cityInput').value;
    const apiKey = 'e61810e3351f4f26979dbc89e707c885';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=e61810e3351f4f26979dbc89e707c885&units=imperial';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
        changeBackground(data.weather[0].main);

    } catch (error) {
        document.getElementById('weatherDisplay').innerText = error.message;
    }
}

    function displayWeather(data){
        const weatherDisplay = document.getElementById('weatherDisplay');
        weatherDisplay.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°F</p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>`;

}
    function changeBackground(weatherCondition){
    const body = document.body;
    switch(weatherCondition.toLowerCase()){
        case 'clear':
            body.style.backgroundImage = "url(Images/clearSky.jpg)";
            break;
        case 'rain':
            body.style.backgroundImage = "url(Images/rainyDay.jpg)";
            break;
        case 'fog':
            body.style.backgroundImage = "url(Images/foggyDay.jpg)";
            break;
        case 'snow':
            body.style.backgroundImage = "url(Images/snowyDay.jpg)";
            break;
        case 'clouds':
            body.style.backgroundImage = "url(Images/cloudyDay.jpg)";

        default:
            body.style.backgroundImage = "url(Images/defaultPic.jpg)";
            break;

    }
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center center";
    }