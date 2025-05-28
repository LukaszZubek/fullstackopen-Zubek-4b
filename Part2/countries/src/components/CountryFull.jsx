import getWeather from "./services/WeatherService"
import {useState} from 'react'
import {useEffect} from 'react'

const CountryFull = ({country}) => {
    const [weather, setWeather] = useState()
    useEffect(() => {
        const fetchWeather = async () => {
            try {
            const data = await getWeather({ lat: country.latlng[0], lng: country.latlng[1] })
            setWeather(data)
            } catch (error) {
            console.error("Weather fetch error:", error)
            }
        }
        fetchWeather()
    }, [country])


    return(
        <div>
            <h1>{country.name.common}</h1>
                <div>{country.capital}</div>
                <div>Area {country.area}</div>
            <h1>Languages</h1>
                <ul>
                    {Object.entries(country.languages).map(([key, code]) => <li key={key}>{code}</li>)}
                </ul>
            <img src={country.flags.png} />
            <h1>Weather in {country.capital}</h1>
            {
                weather ? 
                    <>
                        <div>Temperature {weather.main.temp} Celsius</div>
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
                        <div>Wind {weather.wind.speed} m/s</div>
                    </>
                    : <div>loading weather...</div>
            }
        </div>
    )
}

export default CountryFull