import { Undo2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import style from './styles/CityNotFound.module.css'

function CityNotFound() {
	const navigate = useNavigate()
	return (
		<div className={style.notfound}>
			<h1 className={style.code}>City Not Found</h1>
			<button className={style.button} onClick={() => navigate('/')}>
				<Undo2 className={style.icon}/>
				<p className={style.text}>Go Back</p>
			</button>
		</div>
	)
}

export default CityNotFound;
