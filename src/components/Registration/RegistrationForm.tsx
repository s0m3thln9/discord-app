import Input from '../UI/Input/Input.tsx'
import RegistrationDateSelects from './RegistrationDateSelects.tsx'
import Checkbox from '../UI/Checkbox/Checkbox.tsx'
import Button from '../UI/Button/Button.tsx'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../providers/authProvider/AuthProvider.tsx'
import { RegisterCredentials } from '../../types/user.ts'
import { useRegisterUserMutation } from '../../api/api.ts'
import Loader from '../UI/Loader/Loader.tsx'

const RegistrationForm = () => {
	const {
		register,
		handleSubmit,
		control,
		getValues,
		formState: { errors },
	} = useForm<RegisterCredentials>({
		mode: 'onChange',
	})

	const [registerUser, { isLoading }] = useRegisterUserMutation()
	const { register: reg } = useAuth()

	const onSubmit = async () => await reg(await registerUser({ ...getValues() }).unwrap())

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
				{...register('displayName')}
				id={'displayName'}
				type={'text'}
				label={'displayName'}
				help={'This is how others see you. You can use special characters and emoji.'}
				className={'mb-5'}
			/>
			<Input
				{...register('username', {
					required: 'Required',
					minLength: {
						value: 2,
						message: 'Must be between 2 and 32 in length',
					},
					maxLength: {
						value: 32,
						message: 'Must be between 2 and 32 in length',
					},
					pattern: {
						value: /^[a-z0-9_.]+$/,
						message: 'Username can only use letters, numbers, underscores and periods',
					},
				})}
				id={'username'}
				type={'text'}
				label={'username'}
				help={'Please only use numbers, letters, underscores _, or periods.'}
				className={'mb-5'}
				required
				error={errors.username}
			/>
			<Input
				{...register('password', {
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
				})}
				id={'password'}
				type={'password'}
				label={'password'}
				className={'mb-5'}
				required
				error={errors.password}
			/>
			<RegistrationDateSelects errors={errors} control={control} />
			<Checkbox
				classes={'mt-4'}
				id={'offers'}
				label={
					"(Optional) It's okay to send me emails with Discord updates, tips, and special offers. You can opt out at any time."
				}
			/>
			<Button variant={'primary'} className={'mt-5'}>
				{!isLoading ? 'Continue' : <Loader />}
			</Button>
			<p className={'mt-4 text-xs text-[#949ba4]'}>
				By registering, you agree to Discord's <Link to={'/'}>Terms of Service</Link> and{' '}
				<Link to={'/'}>Privacy Policy</Link>.
			</p>
			<p className={'have-acc mt-5 text-sm font-medium text-[#949ba4] '}>
				<Link to={'/login'}>Already have an account?</Link>
			</p>
		</form>
	)
}

export default RegistrationForm
