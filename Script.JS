function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    var timeString = hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock').textContent = timeString;
  }
  
  setInterval(updateClock, 1000);
  updateClock();

  const apiKey = '5246bf5c609eba67874bbdecfb0fd068';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=bengaluru&appid=${apiKey}&units=metric`; // Replace YOUR_CITY with the name of your city

async function fetchWeather() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const weatherInfo = `Current temperature: ${data.main.temp}°C, Description: ${data.weather[0].description}`;
    document.getElementById('weather').textContent = weatherInfo;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    document.getElementById('weather').textContent = 'Failed to fetch weather data.';
  }
}

// Call fetchWeather when the page loads
fetchWeather();
// Refresh weather every 10 minutes (600,000 milliseconds)
setInterval(fetchWeather, 600000);