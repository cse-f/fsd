// const fetch = require('node-fetch');
const API_KEY = '743cda0db886183f205f62623cac8604'; // replace with your OpenWeatherMap API key
const city = 'Hyderabad'; // change as needed

const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const forecast = data.list.map(entry => ({
      Date: entry.dt_txt,
      Temperature: `${entry.main.temp} °C`
    }));

    // Display as a table
    console.log(`Weather forecast for ${data.city.name}, ${data.city.country}:`);
    console.table(forecast.slice(0, 5)); // Limit to first 5 entries
  })
  .catch(err => console.error("Error fetching weather:", err));
