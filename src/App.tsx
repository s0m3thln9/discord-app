import Authorization from './components/Authorization.tsx'
import { createGlobalStyle } from 'styled-components'
import WhitneyMedium from './fonts/Whitney-Medium.ttf'

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		
		@font-face {
            font-family: 'Whitney';
			src: url(${WhitneyMedium}) format('ttf');
        }
	}
`

function App() {
	return (
		<>
			<GlobalStyles/>
			<Authorization />
		</>
	)
}

export default App
