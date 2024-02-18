import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const SecondaryButton = ({ children }: Props) => {
	return <button>{children}</button>
}

export default SecondaryButton
