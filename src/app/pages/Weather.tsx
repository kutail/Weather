import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { WeatherData } from '../../interfaces'

import { getWeather } from '../utils/getWeather' 
import Loader from '../components/Loader'
import CityNotFound from '../components/CityNotFound'
import WeatherForecast from '../components/WeatherForecast'

function Weather() {
	const { city } = useParams<{ city: string }>()
	const [weather, setWeather] = useState<WeatherData | null>(null)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		async function fetchData() {
			try {
				const weather = await getWeather(city!)
				setWeather(weather)
				setError(null)
			} catch (error) {
				setWeather(null)
				if (error instanceof Error) {
					if (error.message === 'City not found') {
						setError('City not found')
					} else {
						setError('Unable to fetch weather data')
					}
				} else {
					setError('An unknown error occurred')
				}
			}
		}
		fetchData()
	}, [city])

	return (
		!weather && !error ? (
			<Loader />
		) : !error && weather ? (
			<WeatherForecast weather={weather}/>
		) : (
			<CityNotFound/>
		)
	)
}

export default Weather
