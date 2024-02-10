import Navigation from '../Navigation/Navigation.tsx'
import styled from 'styled-components'

const StyledMain = styled.main`
	background: #313238;
`

export const Main = () => {
	return (
		<StyledMain>
			<Navigation />
		</StyledMain>
	)
}