import { ReactNode } from 'react'
import AuthProvider from './authProvider/AuthProvider.tsx'
import { Provider } from 'react-redux'
import { store } from '../store/store.ts'
import { BrowserRouter } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'

function Providers({ children }: { children: ReactNode }) {
	const methods = useForm()

	return (
		<BrowserRouter>
			<Provider store={store}>
				<AuthProvider>
					<FormProvider {...methods}>{children}</FormProvider>
				</AuthProvider>
			</Provider>
		</BrowserRouter>
	)
}

export default Providers
