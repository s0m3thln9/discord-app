import Authorization from './components/Authorization.tsx'
import { createGlobalStyle } from 'styled-components'
import WhitneyMedium from './fonts/whitney-medium.otf'
import WhitneySemibold from './fonts/whitney-semibold.otf'
import WhitneyBold from './fonts/whitney-bold.otf'
import Theme from './theme/theme.tsx'

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

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: 0;
        font-weight: inherit;
        font-style: inherit;
        font-family: inherit;
        font-size: 100%;
        vertical-align: baseline;
    }
`

function App() {
	return (
		<Theme>
			<GlobalStyles/>
			<Authorization />
		</Theme>
	)
}

export default App
