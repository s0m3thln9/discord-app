import { useAuth } from '../../providers/auth-provider/AuthProvider.tsx'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button.tsx'
import Checkbox from '../UI/Checkbox/Checkbox.tsx'
import { days, months, years } from './data.ts'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'

const Registration = () => {

	const {
		register,
		handleSubmit,
		control,
		getValues,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
	})

	const { register: reg } = useAuth()

	const onSubmit = async () => {
		const data = {
			...getValues(),
			birthdayMonth: String(getValues().birthdayMonth.value),
			birthdayDay: parseInt(getValues().birthdayDay.value),
			birthdayYear: parseInt(getValues().birthdayYear.value),
		}
		await reg(data)
	}

	return (
		<div className={'w-full h-svh select-none bg-[url("/img/auth-background.jpg")] bg-cover bg-no-repeat grid place-content-center'}>
			<main className={'w-[30rem] rounded-[0.3125rem] shadow-div bg-[#313338] p-8 grid justify-between'}>
				<h2 className={'text-2xl font-semibold text-[#f2f3f5] text-center'}>
					Create an account
				</h2>
				<form className={'w-full mt-5'} onSubmit={handleSubmit(onSubmit)}>

					<div>
						<label
							className={`text-xs font-bold uppercase tracking-wide ${errors.email ? `text-[#fa777c]` : 'text-[#b5bac1]'}`}
							htmlFor="email"
						>
							email
							<span
								className={`normal-case ${errors.email ? 'text-[#fa777c]' : 'text-[#f23f42]'}`}>
								{errors.email ? ' - ' + errors.email.message : ' *'}
							</span>
						</label>
						<input
							className={'outline-0 mt-2 w-full h-10 p-2.5 font-medium rounded-[0.1875rem] bg-[#1e1f22] text-[#dbdee1] mb-5'}
							id="email"
							type="email"
							{...register('email', { required: 'Required' })}
						/>
					</div>
					<div>
						<label
							className={'text-xs font-bold uppercase tracking-wide text-[#b5bac1]'}
							htmlFor="displayName"
						>
							display name
						</label>
						<input
							className={'outline-0 mt-2 w-full h-10 p-2.5 font-medium rounded-[0.1875rem] bg-[#1e1f22] text-[#dbdee1] mb-5 peer'}
							id="displayName"
							type="text"
							{...register('displayName')}
						/>
						<div
							className={`tracking-tight text-sm font-medium text-[#dbdee1] duration-300 mt-0 pb-0 h-0 opacity-0 peer-focus:-mt-3 peer-focus:pb-10 peer-focus:opacity-100`}>
							This is how others see you. You can use special characters and emoji.
						</div>
					</div>
					<div>
						<label
							className={`text-xs font-bold uppercase tracking-wide ${errors.username ? 'text-[#fa777c]' : 'text-[#b5bac1]'}`}
							htmlFor="username"
						>
							username
							<span className={`normal-case ${errors.username ? 'text-[#fa777c]' : 'text-[#f23f42]'}`}>
								{errors.username ? ' - ' + errors.username.message : ' *'}
							</span>
						</label>
						<input
							className={'outline-0 mt-2 w-full h-10 p-2.5 font-medium rounded-[0.1875rem] bg-[#1e1f22] text-[#dbdee1] mb-5 peer'}
							id="username"
							type="text"
							{...register(
								'username',
								{
									required: 'Required',
									pattern: {
										value: /^[a-z0-9_.]+$/,
										message: 'Username can only use letters, numbers, underscores and periods',
									},
									minLength: {
										value: 2,
										message: 'Must be between 2 and 32 in length',
									},
									maxLength: {
										value: 32,
										message: 'Must be between 2 and 32 in length',
									},
								},
							)}
						/>
						<div className={`tracking-tight text-sm font-medium text-[#dbdee1] duration-300 mt-0 pb-0 h-0 opacity-0 peer-focus:-mt-3 peer-focus:pb-10 peer-focus:opacity-100`}>
							Please only use numbers, letters, underscores _, or periods.
						</div>
					</div>
					<div>
						<label
							className={`text-xs font-bold uppercase tracking-wide ${errors.password ? 'text-[#fa777c]' : 'text-[#b5bac1]'}`}
							htmlFor="password"
						>
							password
							<span className={`normal-case ${errors.password ? 'text-[#fa777c]' : 'text-[#f23f42]'}`}>
								{errors.password ? ' - ' + errors.password.message : ' *'}
							</span>
						</label>
						<input
							className={'outline-0 mt-2 w-full h-10 p-2.5 font-medium rounded-[0.1875rem] bg-[#1e1f22] text-[#dbdee1] mb-5'}
							id="password"
							type="password"
							{...register(
								'password',
								{
									required: 'Required',
									minLength: {
										value: 8,
										message: 'Must be at least 8 characters long',
									},
									maxLength: {
										value: 72,
										message: 'Must be 72 or fewer in length',
									},
									pattern: {
										value: /^(?=.*[0-9])(?=.*[a-z])(?!.* ).{8,72}$/,
										message: 'Password is too weak or common to use',
									},
								}
							)}
						/>
					</div>
					<div>
						<label
							className={`text-xs font-bold uppercase tracking-wide ${errors.birthdayMonth || errors.birthdayDay || errors.birthdayYear ? 'text-[#fa777c]' : 'text-[#b5bac1]'}`}
							htmlFor="dateOfBirth"
						>
							date of birth
							<span className={`normal-case ${errors.birthdayMonth || errors.birthdayDay || errors.birthdayYear ? 'text-[#fa777c]' : 'text-[#f23f42]'}`}>
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
					<Checkbox
						classes={'mt-4'}
						id={'offers'}
						label={
							"(Optional) It's okay to send me emails with Discord updates, tips, and special offers. You can opt out at any time."
						}
					/>
					<Button classes={'mt-5'}>Continue</Button>
					<Checkbox
						classes={'mt-4'}
						id={'terms'}
						label={
							<p>By registering, you agree to Discord's <Link to={'/'}>Terms of Service</Link> and <Link to={'/'}>Privacy Policy</Link>.</p>
						}
					/>
					<p className={'have-acc mt-5 text-sm font-medium text-[#949ba4] '}>
						<Link to={'/login'}>Already have an account?</Link>
					</p>
				</form>
			</main>
		</div>
	)
}

export default Registration