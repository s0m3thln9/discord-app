import { ErrorMessage, SuccessMessage } from './Messages.ts'
import { RegisterCredentials, UserWithoutPassword } from './user.ts'

export type LoginUserData = {
	email: string
	password: string
}

export type TAuthProvider = {
	login: (userData: LoginUserData) => Promise<void>
	register: (userData: RegisterCredentials) => Promise<void>
	logout: () => void
}

export type LoginWithJwtResponse =
	| SuccessMessage<'Successfully got user', { user: UserWithoutPassword }>
	| ErrorMessage<GetUsersWithJwtErrorMessages>

export type GetUsersWithJwtErrorMessages = 'Unauthorized'

export type LoginWithCredentialsResponse =
	| SuccessMessage<'Authorized', { user: UserWithoutPassword }>
	| ErrorMessage<GetUserWithCredentialsErrorMessages>

type GetUserWithCredentialsErrorMessages = 'Unauthorized'

export type RegisterResponse =
	| SuccessMessage<'Registration completed', { user: UserWithoutPassword }>
	| ErrorMessage<RegisterUserErrorMessages>

type RegisterUserErrorMessages = 'User with this email or username already exists'
