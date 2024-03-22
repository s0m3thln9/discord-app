import Authorization from './components/Authorization/Authorization.tsx'
import { Route, Routes } from 'react-router-dom'
import Registration from './components/Registration/Registration.tsx'
import Main from './components/Main/Main.tsx'

function App() {
	return (
		<Routes>
			<Route path={'/*'} element={<Main />} />
			<Route path={'/login'} element={<Authorization />} />
			<Route path={'/register'} element={<Registration />} />
		</Routes>
	)
}

export default App
