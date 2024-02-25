import { ErrorMessage, SuccessMessage } from './Messages.ts'

export type LoginUserData = {
	email: string
	password: string
}

export type TAuthProvider = {
	login: (userData: LoginUserData) => Promise<void>
	register: (userData: RegisterUserData) => Promise<void>
	logout: () => void
}

type PrismaUser = {
	id: number
	email: string
	displayName: string
	username: string
	birthdayYear: number
	birthdayMonth: string
	birthdayDay: number
	password: string
	userImage: string | null
	color: 'orange' | 'red' | 'green' | 'blue' | 'yellow'
	textStatus: string
	onlineStatus: 'offline' | 'online' | 'idle' | 'doNotDisturb'
	createdAt: string
	updatedAt: string
}

export type RegisterUserData = Omit<
	PrismaUser,
	'id' | 'userImage' | 'color' | 'textStatus' | 'onlineStatus' | 'status' | 'createdAt' | 'updatedAt'
>

export type User = Omit<PrismaUser, 'password'>

export type PublicUser = Omit<User, 'email' | 'updatedAt'>

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
