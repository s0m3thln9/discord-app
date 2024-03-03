import Input from '../UI/Input/Input.tsx'
import RegistrationDateSelects from './RegistrationDateSelects.tsx'
import Checkbox from '../UI/Checkbox/Checkbox.tsx'
import Button from '../UI/Button/Button.tsx'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../providers/auth-provider/AuthProvider.tsx'
import { RegisterUserData } from '../../types/AuthProvider.ts'

const RegistrationForm = () => {

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
		await reg(data as RegisterUserData)
	}

	return (
		<form className={'w-full mt-5'} onSubmit={handleSubmit(onSubmit)}>
			<Input
				errors={errors}
				register={register}
				id={'email'}
				type={'email'}
				label={'email'}
				classes={'mt-2 mb-5'}
				required={'Required'}
			/>
			<Input
				errors={errors}
				register={register}
				id={'displayName'}
				type={'displayName'}
				label={'display name'}
				help={'This is how others see you. You can use special characters and emoji.'}
				classes={'mt-2 mb-5'}
				required={false}
			/>
			<Input
				errors={errors}
				register={register}
				id={'username'}
				type={'username'}
				label={'username'}
				help={'Please only use numbers, letters, underscores _, or periods.'}
				classes={'mt-2 mb-5'}
				required={'Required'}
				pattern={{
					value: /^[a-z0-9_.]+$/,
					message: 'Username can only use letters, numbers, underscores and periods',
				}}
				minLength={{
					value: 2,
					message: 'Must be between 2 and 32 in length',
				}}
				maxLength={{
					value: 32,
					message: 'Must be between 2 and 32 in length',
				}}
			/>
			<Input
				errors={errors}
				register={register}
				id={'password'}
				type={'password'}
				label={'password'}
				help={false}
				classes={'mt-2 mb-5'}
				required={'Required'}
				pattern={{
					value: /^(?=.*[0-9])(?=.*[a-z])(?!.* ).{8,72}$/,
					message: 'Password is too weak or common to use',
				}}
				minLength={{
					value: 8,
					message: 'Must be at least 8 characters long',
				}}
				maxLength={{
					value: 72,
					message: 'Must be 72 or fewer in length',
				}}
			/>
			<RegistrationDateSelects errors={errors} control={control} />
			<Checkbox
				classes={'mt-4'}
				id={'offers'}
				label={
					'(Optional) It\'s okay to send me emails with Discord updates, tips, and special offers. You can opt out at any time.'
				}
			/>
			<Button variant={'primary'} className={'mt-5'}>
				Continue
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