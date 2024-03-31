import { ReactNode } from 'react'
import AuthProvider from './authProvider/AuthProvider.tsx'
import { Provider } from 'react-redux'
import { store } from '../store/store.ts'
import { BrowserRouter } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import SocketProvider from './socketProvider/SocketProvider.tsx'

function Providers({ children }: { children: ReactNode }) {
	const methods = useForm()

	return (
		<BrowserRouter>
			<Provider store={store}>
				<AuthProvider>
					<SocketProvider>
						<FormProvider {...methods}>{children}</FormProvider>
					</SocketProvider>
				</AuthProvider>
			</Provider>
		</BrowserRouter>
	)
}

export default Providers
