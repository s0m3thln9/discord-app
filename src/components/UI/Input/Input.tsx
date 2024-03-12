import React, { forwardRef } from 'react'
import { FieldError } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'
import IntrinsicElements = React.JSX.IntrinsicElements

interface Props extends React.PropsWithoutRef<IntrinsicElements["input"]> {
	id: string
	label?: string
	help?: string
	error?: FieldError
}

const Input = forwardRef<HTMLInputElement, Props>(({ id, label, help, className, required, error, ...props }, ref) => {
	return (
		<div className={'overflow-hidden'}>
			{label &&
				<label
					className={clsx('text-xs font-bold uppercase tracking-wide text-[#b5bac1]', error && 'text-[#fa777c]')}
					htmlFor={id}
				>
					{label}
					{required &&
						<span
							className={clsx('normal-case text-[#f23f42]', error && 'text-[#fa777c]')}>
							{error ? ' - ' + error.message : ' *'}
						</span>
					}
				</label>
			}
			<input
				className={twMerge('outline-0 w-full h-10 p-2.5 mt-2 font-medium rounded-[0.1875rem] bg-[#1e1f22] text-[#dbdee1] peer', className)}
				id={id}
				{...props}
				ref={ref}
			/>
			{help &&
				<div
					className={'tracking-tight text-sm font-medium text-[#dbdee1] duration-300 mt-0 pb-0 h-0 opacity-0 peer-focus:-mt-3 peer-focus:pb-10 peer-focus:opacity-100'}>
					{help}
				</div>
			}
		</div>
	)
})

export default Input


