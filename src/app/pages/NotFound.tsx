import { Undo2 } from 'lucide-react'
import style from './styles/NotFound.module.css'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()
	return (
		<div className={style.notfound}>
			<h1 className={style.code}>404</h1>
			<button className={style.button} onClick={() => navigate('/')}>
				<Undo2 className={style.icon}/>
				<p className={style.text}>Go Back</p>
			</button>
		</div>
	)
}

export default NotFound
