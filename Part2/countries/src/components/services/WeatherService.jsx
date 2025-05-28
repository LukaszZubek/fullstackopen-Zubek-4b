import axios from 'axios'

const getWeather = ({lat, lng}) => {
    const result = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&exclude=minutely,hourly,daily,alerts&units=metric&appid=${import.meta.env.VITE_OPENWEATHER_KEY}`)
    return result.then(r => r.data)
}

export default getWeather