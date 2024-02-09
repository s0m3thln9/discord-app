import Authorization from './components/Authorization.tsx'
import { createGlobalStyle } from 'styled-components'
import WhitneyMedium from './fonts/whitney-medium.otf'

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		
		@font-face {
            font-family: Whitney;
			src: url(${WhitneyMedium}) format('otf');
        }
		
		body {
            font-family: Whitney, sans-serif;
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
