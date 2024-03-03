import { Controller } from 'react-hook-form'
import Select from 'react-select'
import { days, months, years } from './data.ts'

const RegistrationDateSelects = ({ errors, control }) => {
	return (
		<div>
			<label
				className={`text-xs font-bold uppercase tracking-wide ${errors.birthdayMonth || errors.birthdayDay || errors.birthdayYear ? 'text-[#fa777c]' : 'text-[#b5bac1]'}`}
				htmlFor="dateOfBirth"
			>
				date of birth
				<span
					className={`normal-case ${errors.birthdayMonth || errors.birthdayDay || errors.birthdayYear ? 'text-[#fa777c]' : 'text-[#f23f42]'}`}>
					{errors.birthdayMonth || errors.birthdayDay || errors.birthdayYear ? ' - ' + (errors.birthdayMonth?.message || errors.birthdayDay?.message || errors.birthdayYear?.message) : ' *'}
				</span>
			</label>
			<div className="flex mt-2 justify-between">
				<Controller
					name={'birthdayMonth'}
					control={control}
					rules={{
						required: 'Required',
					}}
					render={({ field }) => (
						<Select
							{...field}
							options={months}
							noOptionsMessage={() => 'No results found'}
							placeholder={'Month'}
							classNamePrefix={'custom-select'}
							maxMenuHeight={224}
						/>
					)}
				/>
				<Controller
					name={'birthdayDay'}
					control={control}
					rules={{
						required: 'Required',
					}}
					render={({ field }) => (
						<Select
							{...field}
							options={days}
							noOptionsMessage={() => 'No results found'}
							placeholder={'Day'}
							classNamePrefix={'custom-select'}
							maxMenuHeight={224}
						/>
					)}
				/>
				<Controller
					name={'birthdayYear'}
					control={control}
					rules={{
						required: 'Required',
					}}
					render={({ field }) => (
						<Select
							{...field}
							options={years}
							noOptionsMessage={() => 'No results found'}
							placeholder={'Year'}
							classNamePrefix={'custom-select'}
							maxMenuHeight={224}
						/>
					)}
				/>
			</div>
		</div>
	)
}

export default RegistrationDateSelects