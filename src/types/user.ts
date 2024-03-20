import { ErrorMessage, SuccessMessage } from './responseMessages'

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
	phoneNumber: string | null
	createdAt: string
	updatedAt: string
}

export type RegisterCredentials = {
	email: string
	displayName: string
	username: string
	password: number
	birthdayYear: number
	birthdayMonth: string
	birthdayDay: number
}

export type User = Omit<PrismaUser, 'password'>

export type UserWithoutPassword = Omit<User, 'password'>

export type UserShowableData = Omit<PrismaUser, 'email' | 'password' | 'phoneNumber' | 'updatedAt'>

type UpdateUserErrorMessages = 'Unauthorized'

type UpdateUsernameErrorMessages = 'Unauthorized' | 'Wrong password' | 'Password is required'

export type UpdateDisplayNameResponse =
	| SuccessMessage<'DisplayName successfully updated', { user: UserWithoutPassword }>
	| ErrorMessage<UpdateUserErrorMessages>

export type UpdateUsernameResponse =
	| SuccessMessage<'Username successfully updated', { user: UserWithoutPassword }>
	| ErrorMessage<UpdateUsernameErrorMessages>
