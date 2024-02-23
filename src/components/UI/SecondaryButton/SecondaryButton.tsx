import { ReactNode } from 'react'

type Props = {
	children: ReactNode
	className?: string
}

const SecondaryButton = ({ children, className }: Props) => {
	return (
		<button className={`${className} h-8 w-8 rounded hover:bg-[#3c3c44] flex items-center justify-center`}>
			{children}
		</button>
	)
}

export default SecondaryButton
