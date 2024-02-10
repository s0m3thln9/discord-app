import Authorization from './components/Authorization/Authorization.tsx'
import { createGlobalStyle } from 'styled-components'
import WhitneyMedium from './fonts/whitney-medium.otf'
import WhitneySemibold from './fonts/whitney-semibold.otf'
import WhitneyBold from './fonts/whitney-bold.otf'
import { Route, Routes } from 'react-router-dom'
import { Main } from './components/Main/Main.tsx'

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
    }
	
	input, button {
		outline: none;
		border: none;
		background: none;
		font-size: 1rem;
	}
	
	a {
		text-decoration: none;
		color: #00a8fc;
		a:hover {
            text-decoration: underline;
		}
	}
	a:hover {
		text-decoration: underline;
	}
`

function App() {
	return (
		<>
			<GlobalStyles />
			<Routes>
				<Route path={'/'} element={<Main />} />
				<Route path={'/login'} element={<Authorization />} />
			</Routes>
		</>
	)
}

export default App
