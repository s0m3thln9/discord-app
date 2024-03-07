import { ErrorMessage, SuccessMessage } from './Messages.ts'
import { RegisterUserData, User } from './user.ts'

export type LoginUserData = {
	email: string
	password: string
}

export type TAuthProvider = {
	login: (userData: LoginUserData) => Promise<void>
	register: (userData: RegisterUserData) => Promise<void>
	logout: () => void
}

export type GetUserWithJwtResponse =
	| SuccessMessage<'Successfully got user', { user: User }>
	| ErrorMessage<GetUsersWithJwtErrorMessages>

export type GetUsersWithJwtErrorMessages = 'Unauthorized' | 'No user with your data'

export type GetUserWithCredentialsResponse =
	| SuccessMessage<'Authorized', { user: User }>
	| ErrorMessage<GetUserWithCredentialsErrorMessages>

type GetUserWithCredentialsErrorMessages = 'Unauthorized'

export type RegisterResponse =
	| SuccessMessage<'Registration completed', undefined>
	| ErrorMessage<RegisterUserErrorMessages>

type RegisterUserErrorMessages = 'Registration failed' | 'User with this email already exists'
