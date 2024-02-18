import { FormEvent, useState } from 'react'
import { useAuth } from '../../providers/auth-provider/AuthProvider.tsx'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button.tsx'
import { DSLogoText } from '../../../public/svgs.tsx'

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
			className={'w-full h-svh bg-[url("/img/auth-background.jpg")] bg-no-repeat bg-cover grid place-content-center'}>
			<main
				className={'w-[49rem] gap-16 rounded-[0.3125rem] shadow-div bg-[#313338] p-8 grid grid-cols-[1.725fr_1fr] justify-between max-lg:grid-cols-[100%] max-lg:w-[30rem] max-sm:py-5 max-sm:px-4 max-sm:w-[100vw] max-sm:h-svh max-sm:rounded-none'}>
				<div className={'grid justify-items-center max-sm:content-start max-sm:w-auto max-sm:h-full'}>
					<DSLogoText classes={'hidden mb-4 max-sm:block'} />
					<h2 className={'text-2xl font-semibold text-center text-[#f2f3f5]'}>Welcome back!</h2>
					<p className={'mt-2 font-medium text-center text-[#b5bac1]'}>We're so excited to see you again!</p>
					<form className={'w-full mt-5'} onSubmit={handleSubmit}>
						<label className={'text-xs font-bold uppercase tracking-wide text-[#b5bac1]'}
							   htmlFor="email">display name</label>
						<input
							className={'outline-0 mt-2 w-full h-10 p-[0.625rem] font-medium rounded-[0.1875rem] bg-[#1e1f22] text-[#dbdee1]'}
							value={data.email} label={'EMAIL'} required={true}
							onChange={e => setData({ ...data, email: e.target.value })} id={'email'}
							type={'email'} />
						<label className={'text-xs font-bold uppercase tracking-wide text-[#b5bac1]'}
							   htmlFor="password">display name</label>
						<input
							className={'outline-0 mt-2 w-full h-10 p-[0.625rem] font-medium rounded-[0.1875rem] bg-[#1e1f22] text-[#dbdee1]'}
							value={data.password} label={'PASSWORD'} required={true}
							onChange={e => setData({ ...data, password: e.target.value })} id={'password'}
							type={'password'} />
						<p className={'mt-2 font-medium text-sm text-[#949ba4]'}><Link to="/">Forgot your
							password?</Link></p>
						<Button classes={'mt-5'}>Login</Button>
						<p className={'mt-2 font-medium text-sm text-[#949ba4]'}>Need an account? <Link
							to="/register">Register</Link></p>
					</form>
				</div>
				<div className={'grid place-items-center max-lg:hidden'}>
					<img src="/public/img/qr-code.png" alt="" />
					<h2 className={'mt-8 text-2xl font-semibold text-center text-[#f2f3f5]'}>Log in with QR Code</h2>
					<p className={'mt-2 font-medium text-center text-[#b5bac1]'}>Scan this with the <strong>Discord
						mobile app</strong> to log in
						instantly.</p>
				</div>
			</main>
		</div>
	)
}

export default Authorization