import styled from 'styled-components'

const Button = styled.button`
	font-size: 0.875rem;
	padding: 0.375rem;
	background: #1e1f22;
	color: #949ba4;
	border-radius: 0.25rem;
	width: 100%;
	text-align: start;
`

type Props = {
	children: string
}

const TextButton = ({ children }: Props) => {
	return <Button>{children}</Button>
}

export default TextButton
