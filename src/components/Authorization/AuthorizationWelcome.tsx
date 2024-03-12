import AuthorizationForm from './AuthorizationForm.tsx'
import { DSLogoText } from '../../assets/svgs.tsx'

const AuthorizationWelcome = () => {
	return (
		<div className={'grid justify-items-center max-sm:h-full max-sm:w-auto max-sm:content-start'}>
			<DSLogoText classes={'hidden mb-4 max-sm:block'} />
			<h2 className={'text-center text-2xl font-semibold text-[#f2f3f5]'}>Welcome back!</h2>
			<p className={'mt-2 text-center font-medium text-[#b5bac1]'}>We're so excited to see you again!</p>
			<AuthorizationForm />
		</div>
	)
}

export default AuthorizationWelcome
