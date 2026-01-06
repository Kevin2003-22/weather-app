const apiKey = "5e94398bf452a3f2f4e6f679b30cfe27";

function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("city").textContent =
                `City: ${data.name}`;
            document.getElementById("temperature").textContent =
                `Temperature: ${data.main.temp} °C`;
            document.getElementById("description").textContent =
                `Weather: ${data.weather[0].description}`;
        })
        .catch(() => {
            alert("City not found");
        });
}