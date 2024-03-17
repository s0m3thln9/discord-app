import AuthorizationMain from './AuthorizationMain.tsx'

const Authorization = () => {
	return (
		<div
			className={
				'grid h-svh w-full select-none place-content-center bg-[url("src/assets/img/auth-background.jpg")] bg-cover bg-no-repeat'
			}
		>
			<AuthorizationMain />
		</div>
	)
}

export default Authorization
