import { Clock, Cloud } from 'lucide-react'
import { useEffect, useState } from 'react'

import style from './styles/NavBar.module.css'
import moment from 'moment'

function NavBar() {
	const [time, setTime] = useState<string>('Loading...')

	useEffect(() => {
		setInterval(() => {
			setTime(moment().format('MMMM Do, HH:mm:ss'))
		}, 1000)
	}, [])

	return (
		<section className={style.navbar}>
			<div className={style.logo}>
				<Cloud className={style.icon} />
				<h1 className={style.title}>Weather App</h1>
			</div>
			<div className={style.datenow}>
				<h1 className={style.time}>{time}</h1>
				<Clock className={style.icon_clock} />
			</div>
		</section>
	)
}

export default NavBar
