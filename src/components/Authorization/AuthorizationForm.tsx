import FormInput from '../UI/Input/FormInput.tsx'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button.tsx'
import { useForm } from 'react-hook-form'
import { LoginUserData } from '../../types/AuthProvider.ts'
import { useAuth } from '../../providers/authProvider/AuthProvider.tsx'

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

	const onSubmit = async () => {
		const data: LoginUserData = { ...getValues() }
		await login(data)
	}

	return (
		<form className={'mt-5 w-full'} onSubmit={handleSubmit(onSubmit)}>
			<FormInput
				errors={errors}
				register={register}
				id={'email'}
				type={'email'}
				label={'email'}
				className={'mb-5'}
				required={'Required'}
			/>
			<FormInput
				errors={errors}
				register={register}
				id={'password'}
				type={'password'}
				label={'password'}
				required={'Required'}
			/>
			<p className={'mt-2 text-sm font-medium text-[#949ba4]'}>
				<Link to="/">Forgot your password?</Link>
			</p>
			<Button variant={'primary'} className={'mt-5'}>
				Login
			</Button>
			<p className={'mt-2 text-sm font-medium text-[#949ba4]'}>
				Need an account? <Link to="/register">Register</Link>
			</p>
		</form>
	)
}

export default AuthorizationForm