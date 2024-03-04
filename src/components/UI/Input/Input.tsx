import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { HTMLInputTypeAttribute } from 'react'
import { ClassValue } from 'clsx'
import { RegisterUserData } from '../../../types/AuthProvider.ts'

type MinLength = {
	value: number
	message: string
}

type MaxLength = {
	value: number
	message: string
}

type Pattern = {
	value: RegExp
	message: string
}

type Props = {
	errors?: FieldErrors
	register?: UseFormRegister<RegisterUserData>
	id: string
	type: HTMLInputTypeAttribute
	label?: string
	placeholder?: string
	help?: string
	className?: ClassValue
	required?: 'Required'
	pat?: Pattern
	minL?: MinLength
	maxL?: MaxLength
}

const Input = ({ errors, register, id, type, label, placeholder, help, className, required, pat, minL, maxL, }: Props) => {
	return (
		<div>
			{label &&
				<label
					className={`text-xs font-bold uppercase tracking-wide ${errors ? errors[id] ? 'text-[#fa777c]' : 'text-[#b5bac1]' : 'text-[#b5bac1]'}`}
					htmlFor={id}
				>
					{label}
					{required &&
						<span
							className={`normal-case ${errors ? errors[id] ? 'text-[#fa777c]' : 'text-[#f23f42]' : 'text-[#f23f42]'}`}>
							{errors ? errors[id] ? ' - ' + errors[id]?.message : ' *' : ' *'}
						</span>
					}
				</label>
			}
			{register ?
				<input
					className={`outline-0 w-full h-10 p-2.5 mt-2 font-medium rounded-[0.1875rem] bg-[#1e1f22] text-[#dbdee1] peer ${className}`}
					placeholder={placeholder}
					id={id}
					type={type}
					{...register(
						id,
						{
							required: required,
							pattern: pat,
							minLength: minL,
							maxLength: maxL,
						},
					)}
				/>
				:
				<input
					className={`outline-0 w-full h-10 p-2.5 mt-2 font-medium rounded-[0.1875rem] bg-[#1e1f22] text-[#dbdee1] peer ${className}`}
					placeholder={placeholder}
					id={id}
					type={type}
				/>
			}
			{help &&
				<div
					className={`tracking-tight text-sm font-medium text-[#dbdee1] duration-300 mt-0 pb-0 h-0 opacity-0 peer-focus:-mt-3 peer-focus:pb-10 peer-focus:opacity-100`}>
					{help}
				</div>
			}
		</div>
	)
}

export default Input