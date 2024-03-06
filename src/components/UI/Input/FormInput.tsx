import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { HTMLInputTypeAttribute } from 'react'
import Input from './Input.tsx'
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
	className?: string
	required?: 'Required'
	pat?: Pattern
	minL?: MinLength
	maxL?: MaxLength
}

const FormInput = ({
	errors,
	register,
	id,
	type,
	label,
	placeholder,
	help,
	className,
	required,
	pat,
	minL,
	maxL,
}: Props) => {
	return (
		<div>
			{label && (
				<label
					className={`text-xs font-bold uppercase tracking-wide ${errors ? (errors[id] ? 'text-[#fa777c]' : 'text-[#b5bac1]') : 'text-[#b5bac1]'}`}
					htmlFor={id}
				>
					{label}
					{required && (
						<span
							className={`normal-case ${errors ? (errors[id] ? 'text-[#fa777c]' : 'text-[#f23f42]') : 'text-[#f23f42]'}`}
						>
							{errors ? (errors[id] ? ' - ' + errors[id]?.message : ' *') : ' *'}
						</span>
					)}
				</label>
			)}
			{register ? (
				<Input
					className={`peer mt-2 h-10 w-full rounded-[0.1875rem] bg-[#1e1f22] p-2.5 font-medium text-[#dbdee1] outline-0 ${className}`}
					placeholder={placeholder}
					id={id}
					type={type}
					{...register(id, {
						required: required,
						pattern: pat,
						minLength: minL,
						maxLength: maxL,
					})}
				/>
			) : (
				<Input className={className} placeholder={placeholder} id={id} type={type} />
			)}
			{help && (
				<div
					className={`mt-0 h-0 pb-0 text-sm font-medium tracking-tight text-[#dbdee1] opacity-0 duration-300 peer-focus:-mt-3 peer-focus:pb-10 peer-focus:opacity-100`}
				>
					{help}
				</div>
			)}
		</div>
	)
}

export default FormInput
