import { ReactNode } from 'react'

type Props = {
	children: ReactNode
	className?: string
	variant?: 'ghost' | 'dark'
}

const IconButton = ({ children, className, variant = 'ghost' }: Props) => {
	return (
		<button
			className={`group/iconBtn h-9 w-9 rounded-full flex items-center justify-center ${className} ${variant === 'dark' ? 'bg-[#2b2d31] group-hover:bg-[#1e1f22]' : ''}`}
		>
			{children}
		</button>
	)
}

export default IconButton
