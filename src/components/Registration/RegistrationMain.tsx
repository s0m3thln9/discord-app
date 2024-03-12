import RegistrationForm from './RegistrationForm.tsx'
import { DSLogoText } from '../../../public/svgs.tsx'

const RegistrationMain = () => {
	return (
		<main className={'w-[30rem] rounded-[0.3125rem] shadow-div bg-[#313338] p-8 grid justify-between max-sm:content-start max-sm:w-svw max-sm:h-svh max-sm:rounded-none'}>
			<DSLogoText classes={'hidden justify-self-center mb-4 max-sm:block'} />
			<h2 className={'text-2xl font-semibold text-[#f2f3f5] text-center'}>
				Create an account
			</h2>
			<RegistrationForm />
		</main>
	)
}

export default RegistrationMain