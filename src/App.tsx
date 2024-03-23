import { Suspense } from 'react'
import Preloader from './components/Preloader/Preloader.tsx'
import Authorization from './components/Authorization/Authorization.tsx'
import Registration from './components/Registration/Registration.tsx'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main/Main.tsx'

function App() {
	return (
		<Suspense fallback={<Preloader />}>
			<Routes>
				<Route path={'/*'} element={<Main />} />
				<Route path={'/login'} element={<Authorization />} />
				<Route path={'/register'} element={<Registration />} />
			</Routes>
		</Suspense>
	)
}

export default App
