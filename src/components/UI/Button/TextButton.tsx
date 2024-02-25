type Props = {
	children: string
}

const TextButton = ({ children }: Props) => {
	return (
		<button className={'text-sm p-[0.375rem] bg-[#1e1f22] text-[#949ba4] rounded w-full text-start'}>
			{children}
		</button>
	)
}

export default TextButton
