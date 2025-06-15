import NavBar from '../components/NavBar'
import Main from '../components/Main'

import style from './styles/App.module.css'

function App() {
	return (
		<main className={style.app}>
			<section>
				<NavBar />
				<Main />
			</section>
		</main>
	)
}

export default App
