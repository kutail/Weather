import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import App from '../pages/App'
import NotFound from '../pages/NotFound'
import Weather from '../pages/Weather'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}/>
				<Route path='*' element={<Navigate to="/page-not-found"/>}/>
				<Route path='/page-not-found' element={<NotFound/>}/>
				<Route path='/weather/:city' element={<Weather/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default Router