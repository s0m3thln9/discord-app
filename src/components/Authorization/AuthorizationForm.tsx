import Input from '../UI/Input/Input.tsx'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button.tsx'
import { useForm } from 'react-hook-form'
import { RegisterUserData } from '../../types/AuthProvider.ts'
import { useAuth } from '../../providers/authProvider/AuthProvider.tsx'

const AuthorizationForm = () => {
	const { login } = useAuth()

	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
	})

	const onSubmit = async () => {
		const data = { ...getValues() }
		await login(data as RegisterUserData)
	}

	return (
		<form className={'mt-5 w-full'} onSubmit={handleSubmit(onSubmit)}>
			<Input
				errors={errors}
				register={register}
				id={'email'}
				type={'email'}
				label={'email'}
				classes={'mb-5'}
				required={'Required'}
			/>
			<Input
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
