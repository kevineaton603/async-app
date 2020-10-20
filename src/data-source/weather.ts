
const API_KEY= '';

const getCurrentWeatherByCity = async (city: string) => {
    try {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        const json = await res.json();
        return json;
    } catch (error) {
        console.error(error);
    }

}

export {
    getCurrentWeatherByCity
}