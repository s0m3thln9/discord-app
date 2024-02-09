import { ReactNode } from 'react'
import AuthProvider from './auth-provider/AuthProvider.tsx'
import { Provider } from 'react-redux'
import { store } from '../store/store.ts'
import { BrowserRouter } from 'react-router-dom'
import Theme from '../theme/theme.tsx'

function Providers({ children }: { children: ReactNode }) {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<AuthProvider>
					<Theme>
						{children}
					</Theme>
				</AuthProvider>
			</Provider>
		</BrowserRouter>
	)
}

export default Providers