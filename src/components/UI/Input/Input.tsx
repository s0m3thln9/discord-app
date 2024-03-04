import { InputHTMLAttributes } from 'react'

const Input = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<div>
			<input
				className={`peer mt-2 h-10 w-full rounded-[0.1875rem] bg-[#1e1f22] p-2.5 font-medium text-[#dbdee1] outline-0 ${className}`}
				{...props}
			/>
		</div>
	)
}

export default Input
