document.getElementById('getWeatherBtn').addEventListener('click', fetchWeather);

async function fetchWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'Yhttps://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('lagos');
        const data = await response.json();

        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const location = data.name;

        document.getElementById('weatherResult').innerHTML = `
            <h2>${location}</h2>
            <p>Temperature: ${temperature} °C</p>
            <p>Condition: ${description}</p>
        `;
    } catch (error) {
        document.getElementById('weatherResult').innerHTML = `
            <p>Error: ${error.message}</p>
        `;
    }
}
