import RegistrationForm from './RegistrationForm.tsx'

const RegistrationMain = () => {
	return (
		<main className={'w-[30rem] rounded-[0.3125rem] shadow-div bg-[#313338] p-8 grid justify-between'}>
			<h2 className={'text-2xl font-semibold text-[#f2f3f5] text-center'}>
				Create an account
			</h2>
			<RegistrationForm />
		</main>
	)
}

export default RegistrationMain