import { ThemeProvider } from 'styled-components'

const theme = {
	colors: {
		mainBackground: '#313338',
	}
}

const Theme = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	)
}

export default Theme