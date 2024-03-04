import { DSLogoText } from '../../../public/svgs.tsx'
import AuthorizationForm from './AuthorizationForm.tsx'

const AuthorizationWelcome = () => {
	return (
		<div className={'grid justify-items-center max-sm:content-start max-sm:w-auto max-sm:h-full'}>
			<DSLogoText classes={'hidden mb-4 max-sm:block'} />
			<h2 className={'text-2xl font-semibold text-center text-[#f2f3f5]'}>
				Welcome back!
			</h2>
			<p className={'mt-2 font-medium text-center text-[#b5bac1]'}>
				We're so excited to see you again!
			</p>
			<AuthorizationForm />
		</div>
	)
}

export default AuthorizationWelcome