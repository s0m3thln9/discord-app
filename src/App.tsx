import Authorization from './components/Authorization/Authorization.tsx'
import { createGlobalStyle } from 'styled-components'
import WhitneyMedium from './fonts/whitney-medium.otf'
import WhitneySemibold from './fonts/whitney-semibold.otf'
import WhitneyBold from './fonts/whitney-bold.otf'
import { Route, Routes } from 'react-router-dom'
import { Main } from './components/Main/Main.tsx'
import Registration from './components/Registration/Registration.tsx'

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
		color: #f2f3f5;
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
	
	button {
		cursor: pointer ;
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
	
	li {
		list-style: none;
	}

	.tooltip-container:hover .tooltip {
		z-index: 1;
	}
	svg {
		fill: #949ba4;
		stroke-width: 1.5;
	}
`

function App() {
	return (
		<>
			<GlobalStyles />
			<Routes>
				<Route path={'/'} element={<Main />} />
				<Route path={'/login'} element={<Authorization />} />
				<Route path={'/register'} element={<Registration />} />
			</Routes>
		</>
	)
}

export default App
