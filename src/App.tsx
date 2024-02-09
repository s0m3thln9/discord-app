import Authorization from './components/Authorization.tsx'
import { createGlobalStyle } from 'styled-components'
import WhitneyMedium from './fonts/whitney-medium.otf'
import WhitneySemibold from './fonts/whitney-semibold.otf'
import WhitneyBold from './fonts/whitney-bold.otf'

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: Whitney;
        src: url(${WhitneyMedium}) format('otf');
        font-weight: 500;
    }

    @font-face {
        font-family: Whitney;
        src: url(${WhitneySemibold}) format('otf');
        font-weight: 600;
    }

    @font-face {
        font-family: Whitney;
        src: url(${WhitneyBold}) format('otf');
        font-weight: 700;
    }
	
	body {
        font-family: Whitney, sans-serif;
	}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: 0;
		outline: 0;
    }
`

function App() {
	return (
		<>
			<GlobalStyles />
			<Authorization />
		</>
	)
}

export default App
