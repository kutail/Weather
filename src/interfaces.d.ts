export interface WeatherData {
	location: {
		name: string
	}
	current: {
		condition: {
			text: string
		}
		temp_c: number
		feelslike_c: number
		wind_kph: number
	}
}

export interface ForecastData {
	location: {
		name: string
	}
	forecast: {
		forecastday: {
			date: string,
			day: {
				avgtemp_c: number,
				condition: {
					text: string
				}
			}
		}[]
	}
}