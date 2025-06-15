import axios from 'axios'

const apiKey = 'a28bba79d2704a5d89c220030251406'

export async function getWeather(city: string) {
	try {
		const get = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=en`)
		return get.data
	} catch (error) {
		if (axios.isAxiosError(error) && error.response?.status === 400) throw new Error('City not found')
		throw new Error('Unable to fetch weather data')
	}
}

export async function getForecast(city: string, days: number = 7) {
	try {
		const get = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&lang=en&days=${days}`)
		return get.data
	} catch (error) {
		if (axios.isAxiosError(error) && error.response?.status === 400) throw new Error('City not found')
		throw new Error('Unable to fetch weather data')
	}
}