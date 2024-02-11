import Navigation from '../Navigation/Navigation.tsx'
import styled from 'styled-components'
import Content from '../Content/Content.tsx'

const Container = styled.div`
	background: ${({ theme }) => theme.colors.mainBackground};
	display: flex;
`

export const Main = () => {
	return (
		<Container>
			<Navigation />
			<Content />
		</Container>
	)
}
