import Input from '../UI/Input/Input.tsx'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button.tsx'
import { useForm } from 'react-hook-form'
import { LoginUserData } from '../../types/AuthProvider.ts'
import { useAuth } from '../../providers/authProvider/AuthProvider.tsx'
import { useLoginUserWithCredentialsMutation } from '../../api/api.ts'
import Loader from '../UI/Loader/Loader.tsx'

const AuthorizationForm = () => {
	const { login } = useAuth()

	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<LoginUserData>({
		mode: 'onChange',
	})

	const [loginUser, { isLoading }] = useLoginUserWithCredentialsMutation()

	const onSubmit = async () => {
		//const data = { ...getValues() }
		await login(await loginUser({ ...getValues() }).unwrap())
	}

	return (
		<form className={'mt-5 w-full'} onSubmit={handleSubmit(onSubmit)}>
			<Input
				{...register('email', { required: 'Required' })}
				id={'email'}
				type={'email'}
				label={'email'}
				className={'mb-5'}
				required
				error={errors.email}
			/>
			<Input
				{...register('password', { required: 'Required' })}
				id={'password'}
				type={'password'}
				label={'password'}
				required
				error={errors.password}
			/>
			<p className={'mt-2 text-sm font-medium text-[#949ba4]'}>
				<Link to="/">Forgot your password?</Link>
			</p>
			<Button variant={'primary'} className={'mt-5 w-full'}>
				{!isLoading ? 'Login' : <Loader />}
			</Button>
			<p className={'mt-2 text-sm font-medium text-[#949ba4]'}>
				Need an account? <Link to="/register">Register</Link>
			</p>
		</form>
	)
}

export default AuthorizationForm
