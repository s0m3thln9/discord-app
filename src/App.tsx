import Authorization from './components/auth/Authorization/Authorization.tsx'
import { Route, Routes } from 'react-router-dom'
import { Main } from './components/Main/Main.tsx'
import Registration from './components/auth/Registration/Registration.tsx'

function App() {
	return (
		<Routes>
			<Route path={'/'} element={<Main />} />
			<Route path={'/login'} element={<Authorization />} />
			<Route path={'/register'} element={<Registration />} />
		</Routes>
	)
}

export default App
