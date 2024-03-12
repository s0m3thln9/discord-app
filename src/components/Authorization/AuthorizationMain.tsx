import AuthorizationWelcome from './AuthorizationWelcome.tsx'
import AuthorizationQRCode from './AuthorizationQRCode.tsx'

const AuthorizationMain = () => {
	return (
		<main
			className={'w-[49rem] gap-16 rounded-[0.3125rem] shadow-div bg-[#313338] p-8 grid grid-cols-[1.725fr_1fr] justify-between max-lg:grid-cols-[100%] max-lg:w-[30rem] max-sm:py-5 max-sm:px-4 max-sm:w-svw max-sm:h-svh max-sm:rounded-none'}>
			<AuthorizationWelcome />
			<AuthorizationQRCode />
		</main>
	)
}

export default AuthorizationMain