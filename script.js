const apiKey = "5e94398bf452a3f2f4e6f679b30cfe27";

function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                alert("City not found");
                return;
            }

            document.getElementById("city").textContent = data.name;
            document.getElementById("temperature").textContent =
                `${Math.round(data.main.temp)} °C`;
            document.getElementById("description").textContent =
                data.weather[0].description;

            document.getElementById("icon").src =
                `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

            document.getElementById("weatherResult").classList.add("show");
        })
        .catch(() => {
            alert("Error fetching weather data");
        });
}
