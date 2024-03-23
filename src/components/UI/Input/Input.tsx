import React, { forwardRef } from 'react'
import { FieldError } from 'react-hook-form'
import { clsx } from 'clsx'
import { cn } from '../../../utils/cn.ts'
import IntrinsicElements = React.JSX.IntrinsicElements

interface Props extends React.PropsWithoutRef<IntrinsicElements['input']> {
	id: string
	label?: string
	help?: string
	error?: FieldError
}

const Input = forwardRef<HTMLInputElement, Props>(({ id, label, help, className, required, error, ...props }, ref) => {
	return (
		<div className={'overflow-hidden'}>
			{label && (
				<label
					className={clsx(
						'text-xs font-bold uppercase tracking-wide text-[#b5bac1]',
						error && 'text-[#fa777c]',
					)}
					htmlFor={id}
				>
					{label}
					{required && (
						<span className={clsx('normal-case text-[#f23f42]', error && 'text-[#fa777c]')}>
							{error ? ' - ' + error.message : ' *'}
						</span>
					)}
				</label>
			)}
			<input
				className={cn(
					'peer h-10 w-full rounded-[0.1875rem] bg-[#1e1f22] p-2.5 font-medium text-[#dbdee1] outline-0',
					label && 'mt-2',
					className,
				)}
				id={id}
				{...props}
				ref={ref}
			/>
			{help && (
				<div
					className={
						'mt-0 h-0 pb-0 text-sm font-medium tracking-tight text-[#dbdee1] opacity-0 duration-300 peer-focus:-mt-3 peer-focus:pb-10 peer-focus:opacity-100'
					}
				>
					{help}
				</div>
			)}
		</div>
	)
})

export default Input
