import { LandPlot, Map, MapPin } from 'lucide-react'
import { ForecastData, WeatherData } from '../../interfaces'
import { useEffect, useState } from 'react'
import { getForecast } from '../utils/getWeather'

import style from './styles/WeatherForecast.module.css'
import moment from 'moment'

function WeatherForecast({ weather }: { weather: WeatherData }) {
	const [forecast, setForecast] = useState<ForecastData | null>(null)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		async function fetchForecast() {
			try {
				const forecast = await getForecast(weather.location.name)
				setForecast(forecast)
				setError(null)
			} catch (error) {
				setForecast(null)
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
		fetchForecast()
	}, [weather])

	console.log(forecast)

	return (
		<main className={style.forecast}>
			<div className={style.location}>
				<Map className={style.icon} />
				<h1 className={style.title}>{weather.location.name}</h1>
			</div>
			<div className={style.today}>
				<h1 className={style.subtitle}>Today</h1>
				<h2 className={style.subtitle}>{weather.current.condition.text}</h2>
				<h2 className={style.subtitle}>{weather.current.temp_c}°C</h2>
				<h3 className={style.subtitle}>
					{Number((weather.current.wind_kph * 1000) / 3600).toFixed(1)} m/s{' '}
				</h3>
				<h3 className={style.subtitle}>{weather.current.feelslike_c}°C</h3>
			</div>
			<div className={style.forecast_container}>
				{forecast?.forecast.forecastday.map((day, index) => (
					<div key={index} className={style.forecast_day}>
						<h1 className={style.date}>
							{moment(day.date).format('dddd')} {moment(day.date).format('Do')}
						</h1>
						<h2 className={style.condition}>{day.day.condition.text}</h2>
						<h2 className={style.temp}>{day.day.avgtemp_c}°C</h2>
					</div>
				))}
			</div>
		</main>
	)
}

export default WeatherForecast
