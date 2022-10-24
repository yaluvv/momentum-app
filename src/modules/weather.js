const weather = () => {

    const weatherIcon = document.querySelector('.weather-icon');
    const temperature = document.querySelector('.temperature');
    const weatherDescription = document.querySelector('.weather-description');
    const inputCity = document.querySelector('.city');
    const weatherError = document.querySelector('.weather-error')

    async function getWeather(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=481675063c4d401c0d9fb14af851f41e&units=metric`;


        try {
            const res = await fetch(url);
            const data = await res.json()
            weatherIcon.classList.add(`owf-${data.weather[0].id}`);
            temperature.textContent = `${data.main.temp}°C`;
            weatherDescription.textContent = data.weather[0].description;
            weatherError.textContent = ''
            weatherIcon.classList.add('weather-icon', 'owf')
        } catch {
            temperature.textContent = ''
            weatherDescription.textContent = ''
            weatherError.textContent = 'There is no such city. Try another one.'
            weatherIcon.removeAttribute('class')
        }
    }

    function showWeather(defaultCity) {
        inputCity.addEventListener('change', () => {
            if (inputCity.value) {
                localStorage.setItem('city', inputCity.value)
                getWeather(inputCity.value)
            }
        })
        if (localStorage.getItem('city')) {
            inputCity.value = localStorage.getItem('city')
            getWeather(inputCity.value)
        } else {
            inputCity.value = defaultCity
            getWeather(defaultCity)
        }

    }
    showWeather('Tula')

}


export default weather;