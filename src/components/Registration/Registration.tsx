import { useState } from 'react'
import { useAuth } from '../../providers/auth-provider/AuthProvider.tsx'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button.tsx'
import Checkbox from '../UI/Checkbox/Checkbox.tsx'
import { RegisterUserData } from '../../types/AuthProvider.ts'
import { useForm } from 'react-hook-form'

const Registration = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const [data, setData] = useState<RegisterUserData>({
		email: '',
		showname: '',
		username: '',
		password: '',
		birthdayYear: 0,
		birthdayMonth: '',
		birthdayDay: 0,
	})

	const { register: reg } = useAuth()

	const onSubmit = async () => {
		await reg(data)
	}

	return (
		<div
			className={
				'w-full h-svh select-none bg-[url("/img/auth-background.jpg")] bg-cover bg-no-repeat grid place-content-center'
			}
		>
			<main className={'w-[30rem] rounded-[0.3125rem] shadow-div bg-[#313338] p-8 grid justify-between'}>
				<h2 className={'text-2xl font-semibold text-[#f2f3f5] text-center'}>Create an account</h2>
				<form className={'w-full mt-5'} onSubmit={handleSubmit(onSubmit)}>
					<div>
						<label
							className={'text-xs font-bold uppercase tracking-wide text-[#b5bac1]'}
							$error={errors.email}
							htmlFor="email"
						>
							email{' '}
							<span className={'normal-case text-[#f23f42]'}>
								{errors.email ? '- ' + errors.email.message : '*'}
							</span>
						</label>
						<input
							className={
								'outline-0 mt-2 w-full h-10 p-2.5 font-medium rounded-[0.1875rem] bg-[#1e1f22] text-[#dbdee1] mb-5'
							}
							type="email"
							id="email"
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
							className={
								'outline-0 mt-2 w-full h-10 p-2.5 font-medium rounded-[0.1875rem] bg-[#1e1f22] text-[#dbdee1] mb-5'
							}
							type="text"
							id="displayName"
							{...register('displayName')}
						/>
						<p className={'text-sm text-[#dbdee1] transition-[.3s] mt-0 pb-0 h-0 opacity-0'}>
							This is how others see you. You can use special characters and emoji.
						</p>
					</div>
					<div>
						<label
							className={'text-xs font-bold uppercase tracking-wide text-[#b5bac1]'}
							$error={errors.userName}
							htmlFor="userName"
						>
							username{' '}
							<span className={'normal-case text-[#f23f42]'}>
								{errors.userName ? '- ' + errors.userName.message : '*'}
							</span>
						</label>
						<input
							className={
								'outline-0 mt-2 w-full h-10 p-2.5 font-medium rounded-[0.1875rem] bg-[#1e1f22] text-[#dbdee1] mb-5'
							}
							type="text"
							id="userName"
							{...register('userName', { required: 'Required' })}
							onFocus={() => document.querySelector('.help')?.classList.add('focus')}
							onBlur={() => document.querySelector('.help')?.classList.remove('focus')}
						/>
						<p className={'text-sm text-[#dbdee1] transition-[.3s] mt-0 pb-0 h-0 opacity-0'}>
							Please only use numbers, letters, underscores _, or periods.
						</p>
					</div>
					<div>
						<label
							className={'text-xs font-bold uppercase tracking-wide text-[#b5bac1]'}
							$error={errors.password}
							htmlFor="password"
						>
							password{' '}
							<span className={'normal-case text-[#f23f42]'}>
								{errors.password ? '- ' + errors.password.message : '*'}
							</span>
						</label>
						<input
							className={
								'outline-0 mt-2 w-full h-10 p-2.5 font-medium rounded-[0.1875rem] bg-[#1e1f22] text-[#dbdee1] mb-5'
							}
							type="password"
							id="password"
							{...register('password', { required: 'Required' })}
						/>
					</div>
					<div>
						<label
							className={'text-xs font-bold uppercase tracking-wide text-[#b5bac1]'}
							htmlFor="dateOfBirth"
						>
							date of birth
						</label>
						<div className="flex mt-2 justify-between"></div>
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
							<p>
								By registering, you agree to Discord's <Link to={'/'}>Terms of Service</Link> and{' '}
								<Link to={'/'}>Privacy Policy</Link>.
							</p>
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
