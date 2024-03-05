import React, { forwardRef } from 'react'
import { FieldError } from 'react-hook-form'
interface Props extends React.PropsWithoutRef<JSX.IntrinsicElements["input"]> {
	id: string
	label?: string
	help?: string
	error?: FieldError
}

const Input = forwardRef<HTMLInputElement, Props>(({ id, label, help, className, required, error, ...props }, ref) => {
	return (
		<div>
			{label &&
				<label
					className={`text-xs font-bold uppercase tracking-wide ${error ? 'text-[#fa777c]' : 'text-[#b5bac1]'}`}
					htmlFor={id}
				>
					{label}
					{required &&
						<span
							className={`normal-case ${error ? 'text-[#fa777c]' : 'text-[#f23f42]'}`}>
							{error ? ' - ' + error.message : ' *'}
						</span>
					}
				</label>
			}
			<input
				className={`outline-0 w-full h-10 p-2.5 mt-2 font-medium rounded-[0.1875rem] bg-[#1e1f22] text-[#dbdee1] peer ${className}`}
				id={id}
				{...props}
				ref={ref}
			/>
			{help &&
				<div
					className={`tracking-tight text-sm font-medium text-[#dbdee1] duration-300 mt-0 pb-0 h-0 opacity-0 peer-focus:-mt-3 peer-focus:pb-10 peer-focus:opacity-100`}>
					{help}
				</div>
			}
		</div>
	)
})

export default Input


