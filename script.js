document.getElementById('getWeather').addEventListener('click', getWeather);

async function getWeather(){
    const city = document.getElementById('cityInput').value;
    const apiKey = 'e61810e3351f4f26979dbc89e707c885';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=e61810e3351f4f26979dbc89e707c885';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weatherDisplay').innerText = error.message;
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