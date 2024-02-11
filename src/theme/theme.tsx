import { ThemeProvider } from 'styled-components'
import { ReactNode } from 'react'

const theme = {
	colors: {
		mainBackground: '#313338',
		title: '#f2f3f5',
		text: '#b5bac1',
		subText: '#949ba4',
		background1: '#1e1f22',
		inputColor: '#dbdee1',
		primary: '#5865f2',
		buttonHoverBackground: '#505bdb',
		buttonColor: '#fff',
		link: '#00a8fc',
		checkboxBorder: '#80848e',
		green360: '#3BA55D',
		tooltipBg: '#1b1b1e'
	},
}

export type ThemeCols = typeof theme

const Theme = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	)
}

export default Theme