import styled from 'styled-components'
import { ReactNode } from 'react'

const StyledButton = styled.button`
    width: 100%;
    height: 2.75rem;
    display: grid;
	place-items: center;
    padding: 0.125rem 1rem;
    font-weight: 500;
    border-radius: 0.1875rem;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.buttonColor};
	transition: .4s;
	cursor: pointer;
	&:hover {
        background: ${({ theme }) => theme.colors.buttonHoverBackground};
	}
`

type Props = {
	children: ReactNode
}

const Button = ({children}: Props) => {
	return (
		<StyledButton>{children}</StyledButton>
	)
}

export default Button