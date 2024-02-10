import { ThemeProvider } from 'styled-components'
import { ReactNode } from 'react'

const theme = {
	colors: {
		mainBackground: '#313338',
		title: '#f2f3f5',
		text: '#b5bac1',
		subText: '#949ba4',
		inputBackground: '#1e1f22',
		inputColor: '#dbdee1',
		buttonBackground: '#5865f2',
		buttonHoverBackground: '#505bdb',
		buttonColor: '#fff',
		link: '#00a8fc',
		checkboxBorder: '#80848e',
	},
}

const Theme = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	)
}

export default Theme