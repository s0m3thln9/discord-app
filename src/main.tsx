import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Providers from './providers/Providers.tsx'
import './index.css'
import './assets/font/ggSans/font/ggSans.css'
import './components/Main/SettingsPage/Content/Settings/MyAccount/phoneSelect.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Providers>
			<App />
		</Providers>
	</React.StrictMode>,
)
