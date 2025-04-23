const city = "Hyderabad"; // City is fixed as Hyderabad
const API_KEY = "743cda0db886183f205f62623cac8604"; // Replace with your OpenWeatherMap API key

const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    if (data.cod !== "200") {
      throw new Error(data.message);
    }

    // Extract temperatures from the response
    const temps = data.list.map(entry => entry.main.temp);

    // Calculate min, max, and avg temperatures
    const minTemp = Math.min(...temps);
    const maxTemp = Math.max(...temps);
    const avgTemp = temps.reduce((a, b) => a + b, 0) / temps.length;

    // Display results
    console.log(`Weather stats for ${city}:`);
    console.log(`Min Temperature: ${minTemp.toFixed(2)} °C`);
    console.log(`Max Temperature: ${maxTemp.toFixed(2)} °C`);
    console.log(`Avg Temperature: ${avgTemp.toFixed(2)} °C`);
  })
  .catch(err => {
    console.error("Failed to fetch weather data:", err.message);
  });
