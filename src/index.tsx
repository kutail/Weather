import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './app/router/Router'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const queryClient = new QueryClient()

root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Router />
		</QueryClientProvider>
	</React.StrictMode>
)
