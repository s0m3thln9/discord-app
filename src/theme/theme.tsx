import { ThemeProvider } from 'styled-components'
import { ReactNode } from 'react'

const theme = {
	colors: {
		mainBackground: '#313338',
		sidebarBackground: '#2b2c31',
		navSectionHover: '#393c43',
		title: '#f2f3f5',
		text: '#b5bac1',
		textGrey: '#72767D',
		subText: '#949ba4',
		tooltipBg: '#1b1b1e',
		background1: '#1e1f22',
		background2: '#202225',
		inputColor: '#dbdee1',
		primary: '#5865f2',
		buttonHoverBackground: '#505bdb',
		buttonColor: '#fff',
		link: '#00a8fc',
		checkboxBorder: '#80848e',
		green360: '#3BA55D',
	},
}

export type ThemeCols = typeof theme

const Theme = ({ children }: { children: ReactNode }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
