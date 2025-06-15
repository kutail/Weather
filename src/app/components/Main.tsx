import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import style from './styles/Main.module.css'

function Main() {
	const [city, setCity] = useState<string>('')
	const navigate = useNavigate()

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()
		navigate(`/weather/${city}`)
	}

	return (
		<section className={style.main}>
			<h1 className={style.title}>
				<span className={style.highlight}>Find out the weather</span>in the city
				you need in a matter of seconds on our app
			</h1>
			<form onSubmit={handleSubmit}>
				<input
					className={style.input}
					type='text'
					placeholder='Enter City'
					value={city}
					onChange={event => setCity(event.target.value)}
					onKeyDown={event => event.key === 'Enter' && handleSubmit(event)}
				/>
			</form>
		</section>
	)
}

export default Main
