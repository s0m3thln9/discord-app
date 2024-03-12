import RegistrationForm from './RegistrationForm.tsx'
import { DSLogoText } from '../../assets/svgs.tsx'

const RegistrationMain = () => {
	return (
		<main
			className={
				'grid w-[30rem] justify-between rounded-[0.3125rem] bg-[#313338] p-8 shadow-div max-sm:h-svh max-sm:w-svw max-sm:content-start max-sm:rounded-none'
			}
		>
			<DSLogoText classes={'hidden justify-self-center mb-4 max-sm:block'} />
			<h2 className={'text-center text-2xl font-semibold text-[#f2f3f5]'}>Create an account</h2>
			<RegistrationForm />
		</main>
	)
}

export default RegistrationMain
