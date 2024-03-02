import { FormEvent, useState } from 'react'
import { useAuth } from '../../../providers/auth-provider/AuthProvider.tsx'
import { Link } from 'react-router-dom'
import Button from '../../UI/Button/Button.tsx'
import { DSLogoText } from '../../../../public/svgs.tsx'

const Authorization = () => {
	const [data, setData] = useState({
		email: '',
		password: '',
	})

	const { login } = useAuth()

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		await login(data)
	}

	return (
		<div
			className={
				'grid h-svh w-full place-content-center bg-[url("/img/auth-background.jpg")] bg-cover bg-no-repeat'
			}
		>
			<main
				className={
					'grid w-[49rem] grid-cols-[1.725fr_1fr] justify-between gap-16 rounded-[0.3125rem] bg-[#313338] p-8 shadow-div max-lg:w-[30rem] max-lg:grid-cols-[100%] max-sm:h-svh max-sm:w-[100vw] max-sm:rounded-none max-sm:px-4 max-sm:py-5'
				}
			>
				<div className={'grid justify-items-center max-sm:h-full max-sm:w-auto max-sm:content-start'}>
					<DSLogoText classes={'hidden mb-4 max-sm:block'} />
					<h2 className={'text-center text-2xl font-semibold text-[#f2f3f5]'}>Welcome back!</h2>
					<p className={'mt-2 text-center font-medium text-[#b5bac1]'}>We're so excited to see you again!</p>
					<form className={'mt-5 w-full'} onSubmit={handleSubmit}>
						<label className={'text-xs font-bold uppercase tracking-wide text-[#b5bac1]'} htmlFor="email">
							display name
						</label>
						<input
							className={
								'mt-2 h-10 w-full rounded-[0.1875rem] bg-[#1e1f22] p-[0.625rem] font-medium text-[#dbdee1] outline-0'
							}
							value={data.email}
							// @ts-ignore
							label={'EMAIL'}
							required={true}
							onChange={e => setData({ ...data, email: e.target.value })}
							id={'email'}
							type={'email'}
						/>
						<label
							className={'text-xs font-bold uppercase tracking-wide text-[#b5bac1]'}
							htmlFor="password"
						>
							display name
						</label>
						<input
							className={
								'mt-2 h-10 w-full rounded-[0.1875rem] bg-[#1e1f22] p-[0.625rem] font-medium text-[#dbdee1] outline-0'
							}
							value={data.password}
							// @ts-ignore
							label={'PASSWORD'}
							required={true}
							onChange={e => setData({ ...data, password: e.target.value })}
							id={'password'}
							type={'password'}
						/>
						<p className={'mt-2 text-sm font-medium text-[#949ba4]'}>
							<Link to="/">Forgot your password?</Link>
						</p>
						<Button className={'mt-5'} variant={'primary'}>
							Login
						</Button>
						<p className={'mt-2 text-sm font-medium text-[#949ba4]'}>
							Need an account? <Link to="/register">Register</Link>
						</p>
					</form>
				</div>
				<div className={'grid place-items-center max-lg:hidden'}>
					<img src="/img/qr-code.png" alt="" />
					<h2 className={'mt-8 text-center text-2xl font-semibold text-[#f2f3f5]'}>Log in with QR Code</h2>
					<p className={'mt-2 text-center font-medium text-[#b5bac1]'}>
						Scan this with the <strong>Discord mobile app</strong> to log in instantly.
					</p>
				</div>
			</main>
		</div>
	)
}

export default Authorization
