
import { ErrorMessage, SuccessMessage } from './Messages.ts'

export type LoginUserData = {
	email: string
	password: string
}

export type TAuthProvider = {
	user: User | null
	login: (userData: LoginUserData) => Promise<void>
	register: (userData: RegisterUserData) => Promise<void>
	logout: () => void
	isAuth: boolean
}

type PrismaUser = {
	id: number
	email: string
	showname: string
	username: string
	birthdayYear: number
	birthdayMonth: string
	birthdayDay: number
	userImage: string | null
	createdAt: string
	updatedAt: string
	password: string
}

export type RegisterUserData = Omit<PrismaUser, 'id' | 'createdAt' | 'updatedAt'>

export type User = Omit<PrismaUser, 'password'>

export type GetUserWithJwtResponse =
	| SuccessMessage<'Successfully got user', { user: User }>
	| ErrorMessage<GetUsersWithJwtErrorMessages>

export type GetUsersWithJwtErrorMessages = 'Unauthorized' | 'No user with your data'

export type GetUserWithCredentials =
	| SuccessMessage<'Authorized', { user: User }>
	| ErrorMessage<GetUserWithCredentialsErrorMessages>

type GetUserWithCredentialsErrorMessages = 'Unauthorized'

export type RegisterResponse =
	| SuccessMessage<'Registration completed', undefined>
	| ErrorMessage<RegisterUserErrorMessages>

type RegisterUserErrorMessages = 'Registration failed' | 'User with this email already exists'
