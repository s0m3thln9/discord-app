type Props = {
	children: string
	className?: string
	variant?: 'dark' | 'ghost' | 'green'
	active?: boolean
}

const TextButton = ({ children, className, variant = 'ghost', active }: Props) => {
	return (
		<button
			className={`px-2 ${variant === 'dark' ? 'bg-[#1e1f22]' : variant !== 'green' ? 'hover:bg-[#393c41] hover:text-[#fff]' : ''} ${active ? 'bg-[#43444b] text-[#fff]' : ''}
			${variant === 'green' ? 'bg-[#248046] text-[#fff]' : ''}
			text-[#949ba4] rounded w-full text-start leading-5 ${className}`}
		>
			{children}
		</button>
	)
}

export default TextButton
