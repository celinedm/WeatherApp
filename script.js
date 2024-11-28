document.getElementById('getWeather').addEventListener('click', getWeather);

async function getWeather(){
    const city = document.getElementById('cityInput').value;
    const apiKey = 'e61810e3351f4f26979dbc89e707c885';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=e61810e3351f4f26979dbc89e707c885';

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            document.getElementById('weatherDisplay').innerText = 'City not found';
        } else {
            displayWeather(data);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

    function displayWeather(data){
        const weatherDisplay = document.getElementById('weatherDisplay');
        weatherDisplay.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>`;

}